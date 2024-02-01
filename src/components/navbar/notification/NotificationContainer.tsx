import React from "react";
import { poppins } from "@/atoms/fonts";
import { NotificationType } from "../types";
import NotificationItem from "./NotificationItem";

interface NotificationsContainerProps {
  notifications: NotificationType[];
  setNotifications: Function;
}

const NotificationsContainer = ({
  notifications,
  setNotifications,
}: NotificationsContainerProps) => {
  const markAllAsRead = () => {
    setNotifications(
      notifications.map((notification) => ({ ...notification, isRead: true }))
    );
  };

  return (
    <>
      <div className="absolute -bottom-2 right-1 z-50 h-0 w-0 border-b-[10px] border-l-[10px] border-r-[10px] border-b-[#213655] border-l-transparent border-r-transparent" />
      <div className="absolute -right-4 z-50 my-2 w-[16rem] rounded-lg bg-custom-popup py-4 text-base lg:w-[20rem]">
        <h5
          className={`p-4 text-center ${poppins.className} border-b border-custom-divider-gray font-medium`}
        >
          All Notification
        </h5>

        <div className="flex w-full justify-between border-b border-custom-divider-gray px-4 py-2">
          <p className="text-sm">
            {
              notifications.filter((notification) => !notification.isRead)
                .length
            }{" "}
            unread
          </p>
          <button
            className="text-sm text-custom-blue-primary"
            type="button"
            onClick={markAllAsRead}
          >
            Mark all as read
          </button>
        </div>
        <ul
          className={`text-custom-white ${poppins.className} max-h-[400px] overflow-auto lg:max-h-[550px]
  `}
        >
          {notifications.map((notification: NotificationType) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default NotificationsContainer;
