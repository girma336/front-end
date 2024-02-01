import React from "react";
import { MediaStreamProps } from "./types/types";

const MediaStream = ({ mediaBlobUrl, videoRef }: MediaStreamProps) => (
  <div
    className="mb-2 mt-7 h-full w-full object-cover md:mt-0"
    style={{ backgroundColor: mediaBlobUrl ? "transparent" : "black" }}
  >
    {mediaBlobUrl ? (
      <video
        ref={videoRef}
        className="aspect-video h-full w-full object-cover"
      />
    ) : (
      <video
        ref={videoRef}
        autoPlay
        className="aspect-video h-full w-full object-cover"
      />
    )}
  </div>
);

export default MediaStream;
