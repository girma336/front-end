import React from "react";
import { inter } from "@/atoms/fonts";
import SwitchToggle from "@/atoms/Toggle/SwitchToggle";
import { NotificationItemProps } from "./types";

const NotificationItem = ({ title }: NotificationItemProps) => (
  <div className="my-2 flex flex-row justify-between py-2 md:border-b md:border-custom-divider-gray">
    <div
      className={`text-md font-medium tracking-wide text-custom-white ${inter.className}`}
    >
      {title}
    </div>

    <div>
      <SwitchToggle />
    </div>
  </div>
);

export default NotificationItem;
