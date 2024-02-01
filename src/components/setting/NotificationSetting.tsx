"use client";

import React from "react";
import { roboto } from "@/atoms/fonts";
import NotificationItem from "@/components/setting/NotificationItem";

const notification = [
  { id: 1, title: "Allow new match notification" },
  { id: 2, title: "Allow profile view notifications" },
  { id: 3, title: "Allow new connections notifications" },
  { id: 4, title: "Allow Notification" },
];

const NotificationSetting = () => (
  <div className="flex flex-col">
    <div
      className={`md:text-md mb-2 mt-6 hidden  border-b  border-custom-divider-gray text-lg font-bold tracking-wide text-custom-white md:block lg:text-2xl ${roboto.className}`}
    >
      Notification
    </div>

    {notification.map((item) => (
      <NotificationItem title={item.title} key={item.id} />
    ))}
  </div>
);

export default NotificationSetting;
