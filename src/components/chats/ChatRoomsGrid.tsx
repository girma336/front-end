import React from "react";
import ChatRoom from "./ChatRoom";
import { ChatRoomType } from "./types";

interface ChatRoomsGridProps {
  chatRooms: ChatRoomType[];
}

const ChatRoomsGrid = ({ chatRooms }: ChatRoomsGridProps) => (
  <ul className="grid w-full auto-rows-max grid-cols-3 gap-2 overflow-auto p-2 sm:grid-cols-3 md:w-[80%] lg:grid-cols-5 lg:gap-3 xl:w-[85%] 2xl:w-[90%] 2xl:grid-cols-8">
    {chatRooms.map((chatroom) => (
      <ChatRoom chatroomData={chatroom} key={chatroom.id} />
    ))}
  </ul>
);

export default ChatRoomsGrid;
