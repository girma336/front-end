import { ChatRoomDataType, ChatRoomType } from "@/components/chats/types";

const UserChatRooms: ChatRoomType[] = [
  { id: 1, name: "Agriculture", groupImage: "", type: "Skill" },
  { id: 2, name: "Education", groupImage: "", type: "Interest" },
];

const SuggestedChatrooms: ChatRoomType[] = [
  { id: 1, name: "Agriculture", groupImage: "/T-rex.jpg", type: "Skill" },
  { id: 2, name: "Real Estate", groupImage: "", type: "Skill" },
  { id: 3, name: "HealthCare", groupImage: "/T-rex.jpg", type: "Skill" },
  { id: 4, name: "Administration", groupImage: "", type: "Interest" },
  { id: 5, name: "Education", groupImage: "", type: "Interest" },
  {
    id: 6,
    name: "Clinical Sciences",
    groupImage: "/T-rex.jpg",
    type: "Interest",
  },
];

export const ChatRoomsData = {
  userRooms: UserChatRooms,
  suggestedRooms: SuggestedChatrooms,
};

export const ChatRoom1Data: ChatRoomDataType = {
  id: 1,
  name: "Europe Region Group",
  category: "Agriculture",
  groupImage: "/T-rex.jpg",
  groupMembers: [
    { id: 1, name: "John Doe", profileImage: "/T-rex.jpg" },
    { id: 2, name: "Sam Somebody", profileImage: "" },
    { id: 3, name: "Jane Anybody", profileImage: "" },
    { id: 4, name: "Don Quixote", profileImage: "/T-rex.jpg" },
  ],
  conversations: [
    {
      date: "31 Aug 2023",
      messages: [
        {
          sender: { id: 1, name: "John Doe", profileImage: "/T-rex.jpg" },
          message: { content: "Hello Everyone", id: 22 },
        },
      ],
    },
    {
      date: "Yesterday",
      messages: [
        {
          sender: { id: 3, name: "Sam Somebody", profileImage: "/T-rex.jpg" },
          message: { content: "Hello Everyone", id: 2114 },
        },
        {
          sender: { id: 1, name: "John Doe", profileImage: "/T-rex.jpg" },
          message: { content: "Hello Everyone", id: 21 },
        },
      ],
    },
    {
      date: "Today",
      messages: [
        {
          sender: { id: 1, name: "John Doe", profileImage: "/T-rex.jpg" },
          message: {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            id: 221,
          },
        },
        {
          sender: { id: 2, name: "Jane Somebody", profileImage: "" },
          message: {
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
            id: 222,
          },
        },
      ],
    },
  ],
};
