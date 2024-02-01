import React, { useState } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import SendIcon from "../../../../public/icons/send-message-icon.svg";

const SendMessageForm = () => {
  const [enteredText, setEnteredText] = useState("");

  const sendButtonDisabled = enteredText === "";

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEnteredText(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      className="row-span-1 flex w-full items-center justify-between p-2 md:p-6"
      onSubmit={handleFormSubmit}
    >
      <label htmlFor="chat-message" className="w-[90%] md:w-[95%]">
        <textarea
          name="chatMessage"
          id="chat-message"
          rows={1}
          maxLength={480}
          className="lg :text-lg w-full rounded-[10px] p-2 text-xs text-black sm:text-sm"
          onChange={handleTextAreaChange}
          placeholder="Enter your message here..."
        />
      </label>

      <button
        className={`mx-4 ${sendButtonDisabled ? "opacity-20" : "opacity-100"}`}
        type="submit"
        disabled={sendButtonDisabled}
      >
        <ImageWrapper
          src={SendIcon}
          alt="Paper plane icon to send typed message when clicked"
          imageSizes="h-[20px] w-[20px] md:h-[26px] md:w-[26px]"
        />
      </button>
    </form>
  );
};

export default SendMessageForm;
