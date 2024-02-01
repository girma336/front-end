import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import { ChatParticipantType, MessageType } from "../types";
import UserIcon from "../../../../public/icons/user-icon-light.svg";
import styles from "../style.module.css";

interface ChatMessagesProps {
  chatMessages: MessageType[];
  currentUserId: number;
  conversationDate: string;
}

interface ReceivedMessageProps {
  message: string;
  senderData: ChatParticipantType;
}

const ReceivedMessage = ({ message, senderData }: ReceivedMessageProps) => {
  const senderImage =
    senderData.profileImage === "" ? UserIcon : senderData.profileImage;

  return (
    <div className="max-width-[70%] my-4 flex flex-col">
      <div className="flex items-center">
        <ImageWrapper
          src={senderImage}
          alt={`profile image of user ${senderData.name}`}
          imageSizes="h-[14px] w-[14px] sm:h-[17px] sm:w-[17px] md:h-[20px] md:w-[20px] md:h-[22px] md:w-[22px]"
          sizes="5vw"
          className="rounded-full"
        />
        <h4 className="mx-4 text-xs lg:text-sm">{senderData.name}</h4>
      </div>
      <div
        className={`my-4 p-3 text-sm md:p-5 lg:text-base ${styles["received-message"]}`}
      >
        {message}
      </div>
    </div>
  );
};
const SentMessage = ({ message }: { message: string }) => (
  <div
    className={`${styles["sent-message"]} my-4 p-3 text-sm md:p-5 lg:text-base`}
  >
    {message}
  </div>
);

const ChatMessages = ({
  chatMessages,
  currentUserId,
  conversationDate,
}: ChatMessagesProps) => (
  <div key={conversationDate} className={`${styles["chat-message"]} my-[2rem]`}>
    <h4 className={`${styles["chat-date"]} text-sm md:text-base`}>
      {conversationDate}
    </h4>
    {chatMessages.map((message) => {
      const userSentMessage = currentUserId === message.sender.id;
      return userSentMessage ? (
        <SentMessage
          key={message.message.id}
          message={message.message.content}
        />
      ) : (
        <ReceivedMessage
          key={message.message.id}
          message={message.message.content}
          senderData={message.sender}
        />
      );
    })}
  </div>
);

export default ChatMessages;
