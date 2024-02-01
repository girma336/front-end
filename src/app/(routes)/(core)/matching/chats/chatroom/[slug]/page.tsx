"use client";

import React, { useEffect, useState } from "react";
import ChatWindowHeader from "@/components/chats/chatroom/ChatWindowHeader";
import ChatContainer from "@/components/chats/chatroom/ChatContainer";
import SendMessageForm from "@/components/chats/chatroom/SendMessageForm";
import { ChatRoomDataType } from "@/components/chats/types";
import { ChatRoom1Data } from "@/data/ChatsData";

interface ChatRoomPageProps {
  params: { slug: string };
}

const ChatRoomPage = ({ params: { slug } }: ChatRoomPageProps) => {
  const [chatRoomData, setChatRoomData] = useState<ChatRoomDataType>({
    id: 0,
    name: "",
    category: "",
    groupImage: "",
    conversations: [],
    groupMembers: [],
  });

  // TODO use the slug [chatroomId] to pull conversations for this chatroom

  useEffect(() => {
    setChatRoomData(ChatRoom1Data);
  }, [slug]);

  return (
    <div className="grid-rows-7 grid h-[75vh] w-[90vw] md:w-[70vw]">
      <ChatWindowHeader
        chatRoomName={chatRoomData.name}
        chatRoomCategory={chatRoomData.category}
        chatRoomImage={chatRoomData.groupImage}
        chatRoomMembersCount={chatRoomData.groupMembers.length}
      />
      <ChatContainer chatConversations={chatRoomData.conversations} />
      <SendMessageForm />
    </div>
  );
};

export default ChatRoomPage;
