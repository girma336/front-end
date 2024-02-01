import React, { useEffect, useRef } from "react";
import useScreenSize from "@/hooks/UseScreenSize";
import TermsItem from "./TermsItem";
import { TermsDataType } from "../types";

function TermsContainer({ termsData }: TermsDataType) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { height } = useScreenSize();

  const responsiveContainerHeight =
    height > 700 ? "45vh" : height > 500 ? "35vh" : "30vh";

  const scrollToTop = () => {
    if (containerRef.current) containerRef.current.scrollTo({ top: 0 });
  };

  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <div
      id="terms-conditions-container"
      className="my-4 overflow-auto pe-6"
      ref={containerRef}
      style={{ height: responsiveContainerHeight }}
    >
      {Object.entries(termsData).map(([key, value]) => (
        <TermsItem key={key} title={key} content={value} />
      ))}
    </div>
  );
}
export default TermsContainer;
