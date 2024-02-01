import React from "react";
import LinkButton from "@/atoms/buttons/LinkButton";

const ChatLeftPanel = () => (
  <div className="w-full border-b-[0.5px] border-e-0 border-custom-divider-gray p-2 md:h-[75vh] md:w-[20%] md:border-b-0 md:border-e-[0.5px] xl:w-[15%] 2xl:w-[10%]">
    <LinkButton
      linkTo="/matching/chats/"
      className="w-[7rem] rounded-full border-[0.5px] border-[#747d86] bg-custom-chats-bg-blue p-1"
    >
      Chats
    </LinkButton>
  </div>
);

export default ChatLeftPanel;
