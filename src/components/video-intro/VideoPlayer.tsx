import React from "react";

interface VideoSource {
  id: number;
  type: string;
  videoUrl: string;
}

interface CaptionSource {
  id: number;
  url: string;
  kind: string;
  srcLang: string;
  label: string;
}

function VideoPlayer({
  videoSrc,
  captionSrc,
}: {
  videoSrc: VideoSource[];
  captionSrc: CaptionSource[];
}) {
  return (
    <video
      width="100%"
      height="auto"
      controls
      className="aspect-video text-red-500"
    >
      {videoSrc.map((src) => (
        <source src={src.videoUrl} type={src.type} key={src.id} />
      ))}
      {captionSrc.map((caption) => (
        <track
          key={caption.id}
          src={caption.url}
          kind={caption.kind}
          srcLang={caption.srcLang}
          label={caption.label}
        />
      ))}
      This browser does not support this Video content
    </video>
  );
}
export default VideoPlayer;
