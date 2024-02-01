import React from "react";
import Image from "next/image";
import Link from "next/link";
import { UserData } from "@/data/UserData";
import IonEdit from "@public/icons/edit-pen.svg";
import AccountItems from "./AccountItems";

const skillsList = UserData.skills;

const Skills = () => (
  <>
    <div className="grid lg:grid-cols-3 lg:gap-4">
      {skillsList?.map((skill) => (
        <AccountItems
          key={skill.id}
          description={skill.description}
          subdescriptions={skill.subskills}
        />
      ))}
    </div>
    <Link
      href="/skills"
      className="hover:-translate-y-100 flex w-1/12 justify-end transition ease-in-out hover:scale-95"
    >
      <Image src={IonEdit} alt="Pen icon" width={20} height={20} />
    </Link>
  </>
);

export default Skills;
