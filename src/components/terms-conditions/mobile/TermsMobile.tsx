"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import MainAppLogoWithText from "@/atoms/logos/MainAppLogoWithText";
import PageHeader from "../PageHeader";
import AccordionDiv from "./AccordionDiv";
import AgreeCheckBox from "../AgreeCheckBox";
import EmailButton from "../EmailButton";
import AgreeButton from "../AgreeButton";
import { TermsDataType } from "../types";

function TermsMobile({ termsData }: TermsDataType) {
  const [termsAgreed, setTermsAgreed] = useState<boolean>(false);
  const appRouter = useRouter();
  const handleCheckBox: React.ChangeEventHandler<HTMLInputElement> = () => {
    setTermsAgreed((prevTermsAgreed) => !prevTermsAgreed);
  };

  const handleClick = () => {
    appRouter.push("/video-recorder");
  };

  return (
    <div className="flex min-h-85vh w-full flex-col items-center justify-around p-6">
      <MainAppLogoWithText imageSizes="h-[30px] w-[90px] md:h-[40px] md:w-[120px]" />
      <PageHeader wrapperClass="text-center" />
      <AccordionDiv termsData={termsData} />
      <AgreeCheckBox handleChange={handleCheckBox} />
      <EmailButton />
      <AgreeButton termsAgreed={termsAgreed} handleClick={handleClick} />
    </div>
  );
}
export default TermsMobile;
