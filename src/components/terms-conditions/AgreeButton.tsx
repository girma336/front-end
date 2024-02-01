import React from "react";

interface AgreeButtonProps {
  termsAgreed: boolean;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

function AgreeButton({ termsAgreed, handleClick }: AgreeButtonProps) {
  const disableStyle = termsAgreed ? "opacity-100" : "opacity-20";
  return (
    <button
      className={`my-4 h-[1.8rem] w-48 rounded-full bg-custom-blue-primary py-1 text-sm font-normal text-custom-white md:my-0 md:h-[2.4rem]  md:w-64 md:rounded-lg ${disableStyle}`}
      disabled={!termsAgreed}
      onClick={handleClick}
      type="button"
    >
      I AGREE
    </button>
  );
}
export default AgreeButton;
