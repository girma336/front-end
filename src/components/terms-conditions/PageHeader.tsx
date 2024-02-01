import React from "react";

interface PageHeaderProps {
  wrapperClass: "text-left" | "text-center";
}

function PageHeader({ wrapperClass }: PageHeaderProps) {
  return (
    <div className={`${wrapperClass}`}>
      <h2 className="text-lg font-bold text-custom-gray-primary md:text-2xl">
        Terms and Conditions
      </h2>
      <p className="text-xs font-bold text-custom-gray-secondary md:text-base">
        Updated August 2023
      </p>
    </div>
  );
}
export default PageHeader;
