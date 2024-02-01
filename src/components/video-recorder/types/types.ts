import { RefObject } from "react";

export interface BigScreensButtonsProps {
  isRecording: boolean;
  stopRecording: () => void;
  startRecording: () => void;
  mediaBlobUrl?: string;
  isPlayingRecordedVideo: boolean;
  stopRecordedVideo: () => void;
  playRecordedVideo: () => void;
  loading: boolean;
  uploadHandler: () => void;
  targetImageId?: Buffer;
  confirmIdentity: () => void;
  identityConfirmed: boolean;
  confirmField: boolean;
}

export interface MobileScreensButtonsProps {
  isRecording: boolean;
  stopRecording: () => void;
  startRecording: () => void;
  mediaBlobUrl?: string;
  isPlayingRecordedVideo: boolean;
  stopRecordedVideo: () => void;
  playRecordedVideo: () => void;
  loading: boolean;
  uploadHandler: () => void;
  targetImageId?: Buffer;
  confirmIdentity: () => void;
  identityConfirmed: boolean;
  confirmField: boolean;
}

export interface MediaStreamProps {
  mediaBlobUrl: string | null;
  videoRef: RefObject<HTMLVideoElement>;
}

export interface RecordingComponentProps {
  setIsRecording: (isRecording: boolean) => void;
}
