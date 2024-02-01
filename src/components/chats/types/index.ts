export interface ChatRoomType {
  id: number;
  name: string;
  type: string;
  groupImage: string;
}

export interface ChatParticipantType {
  id: number;
  name: string;
  profileImage: string;
}

export interface MessageType {
  sender: ChatParticipantType;
  message: { id: number; content: string };
}

export interface ChatMessagesType {
  date: string;
  messages: MessageType[];
}

export interface ChatRoomDataType {
  id: number;
  name: string;
  category: string;
  groupImage: string;
  groupMembers: ChatParticipantType[];
  conversations: ChatMessagesType[];
}
