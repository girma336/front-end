import React, { useRef, useState } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import DropDownContainer from "@/components/navbar/DropDownContainer";
import useClickOutside from "@/hooks/UseClickOutside";
import GroupUserIcon from "../../../../public/icons/chatrooms-icon.svg";
import DotMenuIcon from "../../../../public/icons/menu-dots-light.svg";
import ExitIcon from "../../../../public/icons/exit-icon-light.svg";

interface ChatWindowHeaderProps {
  chatRoomName: string;
  chatRoomCategory: string;
  chatRoomImage: string;
  chatRoomMembersCount: number;
}

const ChatWindowHeader = ({
  chatRoomName,
  chatRoomCategory,
  chatRoomImage,
  chatRoomMembersCount,
}: ChatWindowHeaderProps) => {
  const headerImage = chatRoomImage === "" ? GroupUserIcon : chatRoomImage;

  const [openRoomDetailsDropdown, setOpenRoomDetailsDropdown] = useState(false);
  const handleDropdown = () => {
    setOpenRoomDetailsDropdown((prevValue) => !prevValue);
  };

  const dropdownContainerRef = useRef<HTMLDivElement>(null);
  useClickOutside(dropdownContainerRef, () =>
    setOpenRoomDetailsDropdown(false)
  );

  return (
    <div className="row-span-1 flex w-full items-center justify-between rounded-[7px] bg-custom-chats-bg-blue px-2 py-2 md:px-6">
      <div className="flex items-center">
        <ImageWrapper
          src={headerImage}
          alt={`Profile image of Chatroom Group ${chatRoomName}`}
          imageSizes="h-[20px] w-[20px] md:h-[28px] md:w-[28px] lg:h-[34px] lg:w-[34px] mx-4"
          sizes="20vw"
          className="rounded-full"
        />
        <div>
          <h4 className="text-sm md:text-base">{chatRoomName}</h4>
          <h5 className="mdLtext-lg text-xs">{chatRoomCategory}</h5>
        </div>
      </div>
      <div className="relative" ref={dropdownContainerRef}>
        <button type="button" onClick={handleDropdown}>
          <ImageWrapper
            src={DotMenuIcon}
            alt="Dropdown arrow icon to access chat group menu"
            imageSizes="h-[18px] w-[18px] md:w-[24px] md:h-[24px]"
          />
        </button>

        {openRoomDetailsDropdown && (
          <DropDownContainer className="bg-custom-blue-dark">
            <div className="flex min-h-[40vh] w-full flex-col items-center justify-between">
              <div className="flex min-h-[25vh] flex-col items-center justify-center">
                <ImageWrapper
                  src={headerImage}
                  alt={`Profile image of Chatroom Group ${chatRoomName}`}
                  imageSizes="h-[60px] w-[60px]"
                  sizes="30vw"
                  className="rounded-full"
                />
                <h4 className="my-2 text-base md:text-lg">{chatRoomName}</h4>
                <h6 className="my-2 text-base md:text-lg">
                  {chatRoomCategory}
                </h6>
              </div>
              <h4 className="my-2 text-sm md:text-base">
                Participants - {chatRoomMembersCount}
              </h4>
              <button
                type="button"
                className="flex items-center justify-center"
              >
                <ImageWrapper
                  src={ExitIcon}
                  alt="Exit door icon to leave the chat room"
                  imageSizes="h-[18px] w-[18px] md:h-[22px] md:w-[22px] lg:w-[25px] h-[25px]"
                  className="text-red-500"
                />
                <p className="mx-4 font-bold text-red-500 ">Leave this Group</p>
              </button>
            </div>
          </DropDownContainer>
        )}
      </div>
    </div>
  );
};
export default ChatWindowHeader;
