import React, { useEffect, useRef } from "react";
import ChatMessages from "./ChatMessages";
import { ChatMessagesType } from "../types";

interface ChatsContainerProps {
  chatConversations: ChatMessagesType[];
}

const ChatContainer = ({ chatConversations }: ChatsContainerProps) => {
  // TODO current user data to be fetched from redux store or backend
  const currentUser = { id: 1, name: "John Doe" };

  const chatsContainerRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    if (chatsContainerRef.current) {
      chatsContainerRef.current.scrollTop =
        chatsContainerRef.current.scrollHeight - 10;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatConversations]);

  return (
    <div
      className="row-span-5 m-auto h-full w-full overflow-auto px-6"
      ref={chatsContainerRef}
    >
      {chatConversations.map((conversation) => (
        <ChatMessages
          key={conversation.date}
          conversationDate={conversation.date}
          chatMessages={conversation.messages}
          currentUserId={currentUser.id}
        />
      ))}
    </div>
  );
};

export default ChatContainer;
