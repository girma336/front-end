import React from "react";
import Link from "next/link";

// Button wrapped in a Next JS Link Component. Background-blue, Text - white
// Pass the link to navigate to, tailwind css styling for the button and button's text

interface LinkButtonProps {
  linkTo: string;
  className?: string;
  target?: string;
  isDisabled?: boolean;
  children: React.ReactNode;
  onclick?: () => void;
}
function LinkButton({
  linkTo,
  className = "bg-custom-blue-primary text-custom-white",
  target = "_self",
  children,
  isDisabled = false,
  onclick,
}: LinkButtonProps) {
  return (
    <Link href={linkTo} target={target}>
      <button
        className={`${className}`}
        type="button"
        disabled={isDisabled}
        onClick={onclick}
      >
        {children}
      </button>
    </Link>
  );
}
export default LinkButton;
