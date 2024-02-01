import React from "react";
import LinkButton from "@/atoms/buttons/LinkButton";
import VideoPlayer from "../../../components/video-intro/VideoPlayer";
import videoUrls, { captionUrls } from "../../../data/IntroVideo";

function VideoIntroPage() {
  return (
    <div className="mt-[15vh] flex h-full w-full flex-col items-center justify-center text-custom-white sm:mt-[15vh] md:mb-20 lg:mt-6">
      <div className="mb-4 w-[95vw] md:w-[85vw]">
        <VideoPlayer videoSrc={videoUrls} captionSrc={captionUrls} />
      </div>

      <h2 className="mt-1 text-xl font-medium text-custom-white md:text-3xl">
        Welcome to JUUBIX
      </h2>
      <p className="w-[80vw] text-center text-sm font-normal text-custom-white md:text-lg">
        The Omniverse like no other. The latest in Technology. Access Unlimited
        Opportunities. Access Community Networks. Access NFTs. We want to
        connect you to Talent, Companies & Investors. Our video to explore more.
      </p>
      <LinkButton
        linkTo="/terms-conditions"
        className="xl:w-38 my-4 w-32 rounded-full bg-custom-blue-primary py-3 text-sm font-normal text-custom-white  md:w-44 md:text-xl md:font-medium"
      >
        Continue
      </LinkButton>
    </div>
  );
}
export default VideoIntroPage;
