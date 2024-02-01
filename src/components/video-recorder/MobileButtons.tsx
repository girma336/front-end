import React from "react";
import Image from "next/image";
import LinkButton from "@/atoms/buttons/LinkButton";
import Spinner from "@/atoms/loading-spinner/Spinner";
import { MobileScreensButtonsProps } from "./types/types";

const MobileButtons: React.FC<MobileScreensButtonsProps> = ({
  isRecording,
  loading,
  stopRecording,
  startRecording,
  mediaBlobUrl,
  isPlayingRecordedVideo,
  stopRecordedVideo,
  playRecordedVideo,
  uploadHandler,
  targetImageId,
  confirmIdentity,
  identityConfirmed,
  confirmField,
}) => (
  <div className="justify- mb-2 flex flex-col items-center gap-3 text-custom-white md:hidden">
    <div className="flex items-center gap-4">
      {isRecording ? (
        <button type="button" onClick={stopRecording}>
          <Image
            src="/icons/stop-record-icon.svg"
            alt="record button"
            width={41}
            height={41}
          />
        </button>
      ) : (
        <button
          type="button"
          onClick={startRecording}
          className={`p-1 ${
            !targetImageId || identityConfirmed
              ? "fill-custom-gray-primary"
              : ""
          }`}
          disabled={!targetImageId || identityConfirmed}
        >
          <Image
            src={`${
              !targetImageId || identityConfirmed
                ? "/icons/record-disabled-icon.svg"
                : "/icons/record-icon.svg"
            }`}
            alt="record button"
            width={33}
            height={33}
          />
        </button>
      )}
      {!isRecording && mediaBlobUrl ? (
        isPlayingRecordedVideo ? (
          <button type="button" onClick={stopRecordedVideo}>
            <Image
              src="/icons/pause-icon.svg"
              alt="pause button"
              width={32}
              height={32}
            />
          </button>
        ) : (
          <button type="button" onClick={playRecordedVideo}>
            <Image
              src="/icons/play-icon.svg"
              alt="play button"
              width={35}
              height={35}
            />
          </button>
        )
      ) : null}
    </div>

    <div className="flex flex-col gap-2 max-sm:w-[80%] sm:flex-row sm:gap-10">
      <button
        type="button"
        onClick={uploadHandler}
        disabled={identityConfirmed}
        className={`flex flex-row items-center justify-center gap-2 px-7 py-2 text-sm  ${
          targetImageId ? "bg-custom-gray-primary" : "bg-custom-blue-primary"
        } rounded-full text-custom-white`}
      >
        <Image
          src="/icons/upload-icon.svg"
          alt="upload btn"
          width={20}
          height={20}
        />{" "}
        {targetImageId ? "ID Uploaded" : "Upload ID"}
      </button>

      {identityConfirmed ? (
        <LinkButton
          linkTo="/profiles"
          className="gap-2 rounded-full bg-custom-blue-primary px-10 py-2 text-center text-sm text-custom-white max-sm:w-full"
        >
          Continue
        </LinkButton>
      ) : (
        <div>
          {confirmField ? (
            <button
              type="button"
              className="gap-2 rounded-full bg-custom-blue-primary px-10 py-2 text-center text-sm text-custom-white max-sm:w-full"
            >
              Field!
            </button>
          ) : (
            <button
              type="button"
              onClick={confirmIdentity}
              disabled={!mediaBlobUrl}
              className={`gap-2  px-10 py-2 text-center text-sm ${
                !mediaBlobUrl
                  ? "bg-custom-gray-primary"
                  : "bg-custom-blue-primary"
              } rounded-full text-custom-white max-sm:w-full`}
            >
              {loading ? (
                <div className="flex flex-row items-center justify-center gap-3">
                  Confirming <Spinner spinnerSize="h-[16px] w-[16px]" />
                </div>
              ) : (
                "Confirm Identity"
              )}
            </button>
          )}
        </div>
      )}
    </div>
  </div>
);

export default MobileButtons;
