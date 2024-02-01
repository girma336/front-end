"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MainAppLogoWithText from "@/atoms/logos/MainAppLogoWithText";
import PageHeader from "../PageHeader";
import TermsContainer from "./TermsContainer";
import Stepper from "./Stepper";
import AgreeCheckBox from "../AgreeCheckBox";
import EmailButton from "../EmailButton";
import AgreeButton from "../AgreeButton";
import { TermsDataType } from "../types";

function TermsDesktop({ termsData }: TermsDataType) {
  const [termsAgreed, setTermsAgreed] = useState<boolean>(false);
  const appRouter = useRouter();
  const handleCheckBox: React.ChangeEventHandler<HTMLInputElement> = () => {
    setTermsAgreed((prevTermsAgreed) => !prevTermsAgreed);
  };

  const handleClick = () => {
    appRouter.push("/profiles");
  };

  return (
    <div className="min-h-[85vh] w-full p-6">
      <MainAppLogoWithText imageSizes="h-[20px] w-[90px] lg:h-[30px] w-[160px]" />
      <div className="grid min-h-[75vh] grid-cols-4">
        <div className="col-span-1 h-full border-e-[0.7px] border-custom-black-secondary py-10">
          <Stepper titles={Object.keys(termsData)} />
        </div>
        <div
          className="rows-span-5 relative col-span-3 grid"
          id="terms-conditions-wrapper"
        >
          <div className="row-span-4 px-10 pt-10">
            <PageHeader wrapperClass="text-left" />
            <TermsContainer termsData={termsData} />
          </div>
          <div className="row-span-1 my-1 flex w-full flex-col items-center px-8">
            <AgreeCheckBox handleChange={handleCheckBox} />
            <div className="mt-1 flex w-full items-center justify-between">
              <EmailButton />
              <AgreeButton
                termsAgreed={termsAgreed}
                handleClick={handleClick}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TermsDesktop;
