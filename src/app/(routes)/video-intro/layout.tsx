import React from "react";

interface VideoLayoutProps {
  children: React.ReactNode;
}

function VideoLayout({ children }: VideoLayoutProps) {
  return <section id="video-intro">{children}</section>;
}

export default VideoLayout;
