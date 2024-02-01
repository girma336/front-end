import React from "react";

interface DropDownContainerProps {
  positionRight?: number;
  children: React.ReactNode;
  className?: string;
}

const DropDownContainer = ({
  positionRight = 0,
  children,
  className = "",
}: DropDownContainerProps) => (
  <>
    <div className="absolute  right-1 top-5 z-50 h-0 w-0 border-b-[10px] border-l-[10px] border-r-[10px] border-b-[#213655] border-l-transparent border-r-transparent sm:right-[1.5rem] sm:top-[3.2rem] md:right-[4.75rem] md:top-[3.2rem]" />
    <div
      className={`-bottom-100 absolute z-20 flex min-w-[70vw] animate-expand-slow flex-col items-center justify-center overflow-hidden rounded p-4 md:min-w-[50vw] lg:min-w-[25vw] ${className}`}
      style={{ right: positionRight }}
    >
      {children}
    </div>
  </>
);

export default DropDownContainer;
