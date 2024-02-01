import React from "react";
import { UserData } from "@/data/UserData";
import ImageWrapper from "@/atoms/ImageWrapper";

const MapLegend = () => {
  const { skills: userSkills } = UserData;

  return (
    <div className="z-[888] my-2 flex flex-col gap-1 p-1 md:flex-row md:gap-4">
      {userSkills.map((skill) => (
        <div
          key={skill.id}
          className="flex w-max flex-nowrap items-center gap-2 overflow-auto rounded-full bg-white px-4 py-1 text-black lg:py-2"
        >
          <ImageWrapper
            src={skill.icon}
            alt="skill icon"
            imageSizes="h-4 w-4"
          />
          <p className="max-w-[10rem] overflow-auto whitespace-nowrap sm:max-w-[8rem] lg:max-w-[12rem] 2xl:max-w-full">
            {skill.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MapLegend;
