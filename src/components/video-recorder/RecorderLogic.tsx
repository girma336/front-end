"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import {
  RekognitionClient,
  CompareFacesCommand,
} from "@aws-sdk/client-rekognition";
import UploadImage from "./UploadImage";
import MobileButtons from "./MobileButtons";
import BigScreensButtons from "./BigScreensButtons";
import MediaStream from "./MediaStream";

const RecorderLogic = () => {
  const [mediaBlobUrl, setMediaBlobUrl] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openPopUp, setOpenPopUp] = useState(false);
  const recordedVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlayingRecordedVideo, setIsPlayingRecordedVideo] = useState(false);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [recordingTime, setRecordingTime] = useState(60);
  const [targetImageBuffer, setTargetImageBuffer] = useState<Buffer | null>(
    null
  );
  const [identityConfirmed, setIdentityConfirmed] = useState(false);
  const [confirmField, setConfirmField] = useState(false);
  const [imagedataOfRcognition, setImagedataOfRcognition] = useState<
    string | undefined
  >();

  const rekognition = new RekognitionClient({
    credentials: {
      accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY || "",
      secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_KEY || "",
    },
    region: "eu-west-2",
  });

  const handleImageCapture = (imageDataUrl: string | undefined) => {
    if (imageDataUrl) {
      const sourceImage = encodeURIComponent(
        imageDataUrl.replace(/^data:image\/\w+;base64,/, "")
      );
      const imageBuffer = Buffer.from(
        decodeURIComponent(sourceImage),
        "base64"
      );
      setTargetImageBuffer(imageBuffer);
    } else {
      // where imageDataUrl is undefined
      setTargetImageBuffer(null);
    }
  };

  const cleanup = () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      mediaRecorderRef.current.stop();
    }

    if (mediaStreamRef.current) {
      const tracks = mediaStreamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  const handleVideoEnded = () => {
    setIsPlayingRecordedVideo(false);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", handleVideoEnded);
    }

    return cleanup;
  }, []);

  const handleRecordingError = (
    error: Error,
    countdownInterval: ReturnType<typeof setTimeout> | null
  ) => {
    clearInterval(countdownInterval as ReturnType<typeof setTimeout>);
    setCountdown(null);
    toast.error(`Error starting recording: ${error.message}`);
  };

  const handleDataAvailable = (event: BlobEvent) => {
    if (event.data.size > 0) {
      recordedChunksRef.current.push(event.data);
    }
  };

  const handleRecordingStop = async () => {
    const mediaBlob = new window.Blob(recordedChunksRef.current, {
      type: "video/webm",
    });
    const url = URL.createObjectURL(mediaBlob);
    setMediaBlobUrl(url);

    if (videoRef.current) {
      videoRef.current.srcObject = null;
      videoRef.current.src = url;
      videoRef.current.muted = false;
    }

    if (recordedVideoRef.current) {
      recordedVideoRef.current.src = url;
    }
  };

  const setupMediaRecorder = (stream: MediaStream) => {
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = handleDataAvailable;
    mediaRecorderRef.current.onstop = handleRecordingStop;

    recordedChunksRef.current = [];
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const startRecording = async () => {
    if (mediaRecorderRef.current) {
      toast.error("Recording is already in progress.");
      return;
    }

    setMediaBlobUrl(null);
    setCountdown(3);

    const countdownInterval = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown as number) - 1);
    }, 1000);

    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });

      clearInterval(countdownInterval);
      setCountdown(null);

      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.muted = true;
        videoRef.current.controls = false;
      }

      mediaStreamRef.current = stream;
      setupMediaRecorder(stream);
    } catch (error: unknown) {
      if (error instanceof Error) {
        // Now 'error' is correctly inferred as 'Error'
        handleRecordingError(error, countdownInterval);
      }
    }
  };

  const captureLastFrame = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (context) {
      canvas.width = videoRef.current?.videoWidth || 0;
      canvas.height = videoRef.current?.videoHeight || 0;
      context.drawImage(
        videoRef.current as HTMLVideoElement,
        0,
        0,
        canvas.width,
        canvas.height
      );
      const dataUrl = canvas.toDataURL("image/jpeg");

      setImagedataOfRcognition(dataUrl);
    }
  };

  const stopRecording = useCallback(async () => {
    if (
      mediaRecorderRef.current &&
      mediaRecorderRef.current.state === "recording"
    ) {
      if (recordingTime > 30) {
        toast.error(
          "It is recommended to record a minimum of 30 seconds for your introduction"
        );
      }

      mediaRecorderRef.current.stop();
      setIsRecording(false);
      mediaRecorderRef.current = null;
    }

    if (mediaStreamRef.current) {
      const tracks = mediaStreamRef.current.getTracks();
      tracks.forEach((track) => track.stop());
      mediaStreamRef.current = null;
    }

    setRecordingTime(60);

    try {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });
      captureLastFrame();
    } catch (error) {
      toast.error("Error performing face comparison:");
    }
  }, [
    mediaRecorderRef,
    setIsRecording,
    mediaStreamRef,
    setRecordingTime,
    recordingTime,
  ]);

  const handleStopRecording = useMemo(() => stopRecording, [stopRecording]);

  const performFaceComparison = async (imageDataUrl: string | undefined) => {
    if (!imageDataUrl) {
      toast.error("Invalid imageDataUrl");
      return;
    }

    try {
      if (!targetImageBuffer) {
        toast.error("No targeted image found for comparison.");
        return;
      }

      const sourceImage = imageDataUrl.replace(/^data:image\/\w+;base64,/, "");
      const imageBuffer = Buffer.from(sourceImage, "base64");

      const params = {
        SourceImage: {
          Bytes: imageBuffer,
        },
        TargetImage: {
          Bytes: targetImageBuffer,
        },
        SimilarityThreshold: 85,
      };

      const command = new CompareFacesCommand(params);
      const faceComparisonResponse = await rekognition.send(command);

      if (faceComparisonResponse?.FaceMatches) {
        const faceMatches = faceComparisonResponse.FaceMatches;
        const faceMatchesLength = faceMatches.length ?? 0;

        if (faceMatchesLength > 0) {
          const similarity = faceMatches[0].Similarity;

          // Check if similarity is defined and greater than or equal to 85
          if (similarity !== undefined && similarity >= 85) {
            toast.success("Identity confirmed");
            setIdentityConfirmed(true);
            setLoading(false);
          }
        } else if (faceMatchesLength > 1) {
          toast.error(
            "Multiple faces detected. Please ensure only one face is in the image or video."
          );
        } else if (faceMatchesLength === 0) {
          toast.error("No matching face found. Please try again.");
          setConfirmField(true);
        } else {
          toast.error("Unexpected response from face comparison.");
          setConfirmField(true);
        }
      } else {
        toast.error("FaceMatches is undefined in the response.");
      }
    } catch (error) {
      toast.error("Please check your ID type or video and try again");
      setConfirmField(true);
    }
  };

  const confirmIdentityHandler = () => {
    setLoading(true);
    performFaceComparison(imagedataOfRcognition);
  };

  const playRecordedVideo = () => {
    if (mediaBlobUrl) {
      videoRef.current?.play();
      setIsPlayingRecordedVideo(true);
    }
  };

  const stopRecordedVideo = () => {
    if (isPlayingRecordedVideo) {
      videoRef.current?.pause();
      setIsPlayingRecordedVideo(false);
    }
  };

  const uploadHandler = () => {
    setOpenPopUp(true);
  };

  const handleCountdown = useMemo(
    () => () => setRecordingTime((prevTime) => prevTime - 1),
    [setRecordingTime]
  );

  useEffect(() => {
    let countdownInterval: ReturnType<typeof setTimeout> | null = null;

    if (isRecording) {
      countdownInterval = setInterval(handleCountdown, 1000);
    }

    if (recordingTime === 0 && isRecording) {
      handleStopRecording();
    }

    return () => {
      clearInterval(countdownInterval as ReturnType<typeof setTimeout>);
    };
  }, [isRecording, recordingTime, handleStopRecording, handleCountdown]);

  return (
    <div className="relative mx-auto h-[60vh] w-full p-4 md:h-[50vh] md:w-[90%] md:pb-10  md:pt-0 lg:h-[65vh] lg:w-[90%] 2xl:max-h-[700px] 2xl:max-w-[95%]">
      {isRecording && (
        <div className="absolute left-1/2 top-4 flex -translate-x-1/2 transform flex-row items-center gap-1 md:-top-9">
          <Image
            src="/icons/record-icon.svg"
            alt="record button"
            width={25}
            height={25}
          />
          Recording - 0:
          {recordingTime < 10 ? `0${recordingTime}` : recordingTime}
        </div>
      )}

      {countdown !== null && (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform animate-bounce text-4xl">
          {countdown}
        </div>
      )}

      <MediaStream mediaBlobUrl={mediaBlobUrl} videoRef={videoRef} />

      <BigScreensButtons
        isRecording={isRecording}
        stopRecording={stopRecording}
        startRecording={startRecording}
        mediaBlobUrl={mediaBlobUrl ?? undefined}
        isPlayingRecordedVideo={isPlayingRecordedVideo}
        stopRecordedVideo={stopRecordedVideo}
        playRecordedVideo={playRecordedVideo}
        uploadHandler={uploadHandler}
        targetImageId={targetImageBuffer ?? undefined}
        confirmIdentity={confirmIdentityHandler}
        identityConfirmed={identityConfirmed}
        loading={loading}
        confirmField={confirmField}
      />

      <MobileButtons
        isRecording={isRecording}
        stopRecording={stopRecording}
        startRecording={startRecording}
        mediaBlobUrl={mediaBlobUrl ?? undefined}
        isPlayingRecordedVideo={isPlayingRecordedVideo}
        stopRecordedVideo={stopRecordedVideo}
        playRecordedVideo={playRecordedVideo}
        uploadHandler={uploadHandler}
        targetImageId={targetImageBuffer ?? undefined}
        confirmIdentity={confirmIdentityHandler}
        identityConfirmed={identityConfirmed}
        loading={loading}
        confirmField={confirmField}
      />

      {openPopUp && (
        <UploadImage
          onClose={() => setOpenPopUp(false)}
          onImageCapture={handleImageCapture}
        />
      )}
    </div>
  );
};

export default RecorderLogic;
