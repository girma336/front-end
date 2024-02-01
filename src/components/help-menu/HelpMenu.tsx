"use client";

import React, { useState } from "react";
import Link from "next/link";
import GuidesHelpData from "@/data/HelpMenuData";
import ImageWrapper from "@/atoms/ImageWrapper";
import HelpHeader from "./HelpHeader";
import { QASectionType } from "./types/index";
import SearchInput from "./SearchInput";

const HelpMenu = () => {
  const [isSearchEntered, setIsSearchEntered] = useState<boolean>(false);

  return (
    <div className="mx-auto  flex min-h-[80vh] w-full flex-col items-center justify-start py-12">
      <HelpHeader />
      <SearchInput
        setIsSearchEntered={setIsSearchEntered}
        isSearchEntered={isSearchEntered}
      />
      {!isSearchEntered && (
        <div className="mx-auto mb-7 grid w-full grid-cols-2 gap-4 p-4 lg:w-[80%] lg:grid-cols-3 xl:gap-5">
          {GuidesHelpData.map((category: QASectionType, index: number) => (
            <div
              key={category.id}
              className="rounded border border-tile-border bg-custom-blue-light p-0 shadow-md transition-transform duration-100 hover:scale-105"
            >
              <Link href={`/help-menu/${index}`}>
                <div className="mx-auto flex h-full min-h-[170px] animate-fadein flex-col justify-between md:min-h-[220px] ">
                  <h4 className="m-2 text-sm font-bold text-tile-header sm:text-base lg:text-2xl">
                    {category.description}
                  </h4>
                  <div className="flex justify-end">
                    <ImageWrapper
                      src={category.icon.src}
                      alt={category.icon.alt}
                      imageSizes="h-[60px] w-[60px] md:h-[90px] md:w-[90px] xl:h-[110px] xl:w-[110px]"
                    />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default HelpMenu;
