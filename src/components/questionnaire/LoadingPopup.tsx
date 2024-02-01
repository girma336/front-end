import React from "react";
import AnimatedLoadingSkeleton from "../loading-skeleton/AnimatedLoadingSkeleton";

interface LoadingPopupProps {
  setOpenPopup: Function;
}
const LoadingPopup = ({ setOpenPopup }: LoadingPopupProps) => {
  const closePopup = () => {
    setOpenPopup((prevVal: boolean) => !prevVal);
  };

  return (
    <div className="bg-main-gradient fixed inset-0 z-50 flex animate-fadein flex-col items-center justify-center">
      <AnimatedLoadingSkeleton onCancel={closePopup} navigateTo="/matching" />
    </div>
  );
};

export default LoadingPopup;
