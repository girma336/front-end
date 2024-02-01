import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import { useRouter } from "next/navigation";
import { ChatRoomType } from "./types";
import ChatRoomIcon from "../../../public/icons/chatrooms-icon.svg";

interface ConversationProps {
  chatroomData: ChatRoomType;
}

const ChatRoom = ({ chatroomData }: ConversationProps) => {
  const chatRoomImage =
    chatroomData.groupImage === "" ? ChatRoomIcon : chatroomData.groupImage;

  const applicationRouter = useRouter();

  const handleButtonClick = () => {
    applicationRouter.push(`chats/chatroom/${chatroomData.id}`);
  };

  return (
    <li className="aspect-square rounded-[7px] border-[0.7px] border-[#075307]">
      <button
        type="button"
        className="flex h-full w-[100%] flex-col items-center justify-center rounded-[7px] bg-custom-chats-bg-blue p-2 md:p-4"
        onClick={handleButtonClick}
      >
        <ImageWrapper
          src={chatRoomImage}
          alt={`profile photo of user ${chatroomData.name}`}
          imageSizes="h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:w-[60px] md:h-[60px] lg:h-[70px] lg:w-[70px]"
          className="rounded-full"
          sizes="30vw"
        />
        <h4 className="... w-[90%] overflow-hidden text-ellipsis whitespace-nowrap text-sm md:text-lg lg:text-base">
          {chatroomData.name}
        </h4>
      </button>
    </li>
  );
};

export default ChatRoom;
