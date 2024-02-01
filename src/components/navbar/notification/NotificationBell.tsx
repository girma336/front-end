import React, { useState, useEffect, useRef } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import { NotificationsData } from "@/data/Notifications";
import BellIconLight from "@public/icons/ion-notification.svg";
import useClickOutside from "@/hooks/UseClickOutside";
import NotificationsContainer from "./NotificationContainer";
import NotificationDot from "./NotificationDot";

const NotificationBell = () => {
  const [isActive, setIsActive] = useState(false);

  const [hasNewNotifications, setHasNewNotifications] =
    useState<boolean>(false);
  const [notifications, setNotifications] = useState(NotificationsData);

  const containerRef = useRef(null);
  useClickOutside(containerRef, () => setIsActive(false));

  useEffect(() => {
    setHasNewNotifications(
      notifications.some((notification) => !notification.isRead)
    );
  }, [notifications]);

  return (
    <div className="relative ms-1" ref={containerRef}>
      <button
        type="button"
        className=""
        onClick={() => setIsActive((prevValue) => !prevValue)}
      >
        <ImageWrapper
          src={BellIconLight}
          alt="Bell icon for notifications"
          imageSizes="h-[20px] w-[20px] lg:h-[25px] lg:w-[25px]"
        />
      </button>
      {hasNewNotifications && <NotificationDot />}
      {isActive && (
        <NotificationsContainer
          notifications={notifications}
          setNotifications={setNotifications}
        />
      )}
    </div>
  );
};

export default NotificationBell;
