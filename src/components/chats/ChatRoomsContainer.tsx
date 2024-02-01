"use client";

import React, { useEffect, useState } from "react";
import { ChatRoomsData } from "@/data/ChatsData";
import HorizontalTextDivider from "./HorizontalTextDivider";
import ChatRoomsGrid from "./ChatRoomsGrid";
import { ChatRoomType } from "./types";

const ChatRoomsContainer = () => {
  const [chatRooms, setChatRooms] = useState<{
    userRooms: ChatRoomType[];
    suggestedRooms: ChatRoomType[];
  }>({
    userRooms: [],
    suggestedRooms: [],
  });

  useEffect(() => {
    setChatRooms(ChatRoomsData);
  }, [chatRooms]);

  return (
    <div className="h-[75vh] w-full overflow-auto">
      <div>
        <HorizontalTextDivider
          dividerText="Your Chatrooms"
          className="p-3 md:p-6"
        />
        <ChatRoomsGrid chatRooms={chatRooms.userRooms} />
      </div>
      <div>
        <HorizontalTextDivider
          dividerText="Suggested Chatrooms"
          className="p-3 md:p-6"
        />
        <ChatRoomsGrid chatRooms={chatRooms.suggestedRooms} />
      </div>
    </div>
  );
};

export default ChatRoomsContainer;
