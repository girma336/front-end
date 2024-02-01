import React from "react";

interface NotificationDotProps {
  className?: string;
}

const NotificationDot = ({
  className = "absolute right-0 top-0 h-2 w-2 rounded-full border-gray-900 bg-red-500 text-xs font-bold text-white",
}: NotificationDotProps) => <div className={className} />;

export default NotificationDot;
