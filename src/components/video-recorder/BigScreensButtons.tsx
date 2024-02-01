import React from "react";
import Image from "next/image";
import LinkButton from "@/atoms/buttons/LinkButton";
import Spinner from "@/atoms/loading-spinner/Spinner";
import { BigScreensButtonsProps } from "./types/types";

const BigScreensButtons: React.FC<BigScreensButtonsProps> = ({
  isRecording,
  stopRecording,
  startRecording,
  mediaBlobUrl,
  isPlayingRecordedVideo,
  stopRecordedVideo,
  playRecordedVideo,
  loading,
  uploadHandler,
  targetImageId,
  confirmIdentity,
  identityConfirmed,
  confirmField,
}) => (
  <div className="mt-6 hidden flex-row justify-between md:flex">
    <button
      type="button"
      onClick={uploadHandler}
      className={`flex flex-row items-center gap-2 px-7 py-2 ${
        targetImageId ? "bg-custom-gray-primary" : "bg-custom-blue-primary"
      } rounded-full text-custom-white`}
      disabled={identityConfirmed}
    >
      <Image
        src="/icons/upload-icon.svg"
        alt="upload btn"
        width={20}
        height={20}
      />
      {targetImageId ? "ID Uploaded" : "Upload ID"}
    </button>

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
          className="p-1"
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

    {identityConfirmed ? (
      <LinkButton
        linkTo="/profiles"
        className="flex flex-row items-center gap-2 rounded-full bg-custom-blue-primary px-10 py-3 text-custom-white"
      >
        Continue
      </LinkButton>
    ) : (
      <div>
        {confirmField ? (
          <button
            type="button"
            className="flex w-auto flex-row items-center gap-2 rounded-full bg-custom-blue-primary px-10 py-3 text-custom-white"
          >
            Field!
          </button>
        ) : (
          <button
            type="button"
            onClick={confirmIdentity}
            className={`flex w-auto flex-row items-center gap-2 px-10 py-3 ${
              !mediaBlobUrl
                ? "bg-custom-gray-primary"
                : "bg-custom-blue-primary"
            } rounded-full text-custom-white`}
            disabled={!mediaBlobUrl}
          >
            {loading ? (
              <div className="flex flex-row items-center gap-3">
                Confirming <Spinner spinnerSize="h-[22px] w-[22px]" />
              </div>
            ) : (
              "Confirm Identity"
            )}
          </button>
        )}
      </div>
    )}
  </div>
);

export default BigScreensButtons;
