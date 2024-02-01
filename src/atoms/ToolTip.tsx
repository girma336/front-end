import React from "react";
import useScreenSize from "@/hooks/UseScreenSize";

interface ToolTipProps {
  message: string;
  children: React.ReactNode;
  position: {
    top: number | string;
    left: number | string;
    right?: number | string;
    bottom?: number | string;
  };
  className?: string;
}
const ToolTip = ({
  message,
  children,
  position,
  className = "",
}: ToolTipProps) => {
  const { width } = useScreenSize();

  const isMobile = width <= 768;

  if (isMobile) return children;

  return (
    <div className={`group relative flex ${className}`}>
      <p
        className="invisible absolute whitespace-nowrap rounded-xl bg-custom-tooltip px-4 py-2 text-base font-semibold text-custom-white group-hover:visible "
        style={position}
      >
        {message}
      </p>
      {children}
    </div>
  );
};

export default ToolTip;
