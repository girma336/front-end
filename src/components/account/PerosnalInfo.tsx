import Image from "next/image";
import React from "react";
import IonCalender from "@public/icons/circum_calendar-date.svg";
import IonConnection from "@public/icons/teams-connection.svg";
import IonActiveConnection from "@public/icons/active-teams-connection.svg";
import IonProfile from "@public/icons/profile.svg";

const accountDetails = [
  {
    name: "Join Date",
    description: "16/10/2019",
    icon: IonCalender,
  },
  {
    name: "Connections",
    description: "500+",
    icon: IonConnection,
  },
  {
    name: "Active Connections",
    description: "200+",
    icon: IonActiveConnection,
  },
  {
    name: "Profile Visits",
    description: "60 profile visits",
    icon: IonProfile,
  },
];

const PerosnalInfo = () => (
  <ul className="mb-20 space-y-2.5">
    {accountDetails?.map((info, index) => (
      <li key={index} className="grid w-2/3 text-sm sm:grid-cols-2">
        <div className="flex items-center gap-2">
          <Image
            className="block shrink-0 rounded-full bg-custom-blue-primary p-0.5"
            src={info.icon}
            alt={info.name}
            width={20}
            height={20}
          />
          <h5 className="shrink-0 font-bold">{info.name}</h5>
        </div>
        <p className="ml-7 text-xs font-thin tracking-widest">
          {info.description}
        </p>
      </li>
    ))}
  </ul>
);

export default PerosnalInfo;
