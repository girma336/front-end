import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserData } from "@/data/UserData";
import IonEdit from "@public/icons/edit-pen.svg";
import AccountItems from "./AccountItems";

const interestList = UserData.interests;
const Interest = () => (
  <>
    <div className="grid lg:grid-cols-3 lg:gap-4">
      {interestList?.map((interest) => (
        <AccountItems
          key={interest.id}
          description={interest.description}
          subdescriptions={interest.subinterests}
        />
      ))}
    </div>
    <Link
      href="/interests"
      className="hover:-translate-y-100 flex w-1/12 justify-end transition ease-in-out hover:scale-95"
    >
      <Image src={IonEdit} alt="Pen icon" width={20} height={20} />
    </Link>
  </>
);

export default Interest;
