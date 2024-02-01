import React from "react";
import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import { NotificationType } from "../types";
import NotificationDot from "./NotificationDot";

interface NotificationItemProps {
  notification: NotificationType;
}

const NotificationItem = ({ notification }: NotificationItemProps) => (
  <Link href={notification.link}>
    <li
      key={notification.id}
      className="flex items-center gap-2 border-b border-custom-divider-gray px-4 py-2 hover:bg-custom-blue-dark"
    >
      <div className="relative w-max p-1">
        <ImageWrapper
          src={notification.Icon}
          alt="user profile icon"
          imageSizes="h-[20px] w-[20px] lg:h-[32px] lg:w-[32px]"
        />
        {!notification.isRead && (
          <NotificationDot className="absolute right-0 top-0 h-2 w-2 rounded-full border-gray-900 bg-red-500 text-xs font-bold text-white lg:h-3 lg:w-3" />
        )}
      </div>
      <div>
        <h5 className="text-sm">{notification.title}</h5>
        <h6 className="text-xxs">{notification.message}</h6>
        <p className="text-xxs">{notification.time}</p>
      </div>
    </li>
  </Link>
);

export default NotificationItem;
