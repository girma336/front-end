import React from "react";
import termsData from "@/data/TermsConditions";
import TermsMobile from "@/components/terms-conditions/mobile/TermsMobile";
import TermsDesktop from "@/components/terms-conditions/desktop/TermsDesktop";

function ConditionsPage() {
  return (
    <div>
      <div className="block md:hidden">
        <TermsMobile termsData={termsData} />
      </div>
      <div className="hidden md:block">
        <TermsDesktop termsData={termsData} />
      </div>
    </div>
  );
}
export default ConditionsPage;
