import React from "react";
import GraphIcon from "@public/icons/graph-icon.svg";
import LinkButton from "@/atoms/buttons/LinkButton";
import ImageWrapper from "@/atoms/ImageWrapper";
import MatchingIcon from "@public/icons/icon-matching.svg";
import MapIcon from "@public/icons/map-menu-icon.svg";
import ChatIcon from "@public/icons/chat-menu-icon.svg";
import VideoIcon from "@public/icons/video-menu-icon.svg";

const imageSize =
  "h-[20px] w-[20px] md:h-[24px] md:w-[24px] lg:h-[26px] lg:w-[26px]";

const StandardMenuItems = [
  {
    id: 10,
    linkTo: "/matching",
    title: "Matches",
    imageSrc: MatchingIcon,
    imageAlt: "Matching Icon",
  },
  {
    id: 11,
    linkTo: "/matching/graph",
    title: "Chart",
    imageSrc: GraphIcon,
    imageAlt: "Graph Icon",
  },
  {
    id: 12,
    linkTo: "/matching/map",
    title: "Map",
    imageSrc: MapIcon,
    imageAlt: "Map Icon",
  },
  {
    id: 13,
    linkTo: "/matching/chats",
    title: "Chat",
    imageSrc: ChatIcon,
    imageAlt: "Chat Icon",
  },

  {
    id: 14,
    linkTo: "/",
    title: "Ju-Meet",
    imageSrc: VideoIcon,
    imageAlt: "Ju Meet Icon",
  },
];

const MatchingNavMenu = () => (
  <ul className="flex flex-col gap-4">
    {StandardMenuItems.map((menuItem) => (
      <li className="w-max px-4" key={menuItem.id}>
        <LinkButton
          linkTo={menuItem.linkTo}
          className="m-1 flex items-center justify-center gap-2 bg-transparent"
        >
          <ImageWrapper
            imageSizes={imageSize}
            src={menuItem.imageSrc}
            alt={menuItem.imageAlt}
          />
          <p className="text-xs">{menuItem.title}</p>
        </LinkButton>
      </li>
    ))}
  </ul>
);

export default MatchingNavMenu;
