import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import CloseIcon from "@public/icons/x-icon.svg";

interface OnboardingHelpPopupProps {
  setOpenHelpPopup: Function;
}

const OnboardingHelpPopup = ({
  setOpenHelpPopup,
}: OnboardingHelpPopupProps) => (
  <section className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
    <div className="relative h-[80vh] min-h-[600px] w-5/6 max-w-[1024px] overflow-auto rounded-[10px] bg-custom-chats-bg-blue text-custom-white lg:h-[70vh] lg:w-4/5 lg:rounded-[30px]">
      <div className="m-4 flex items-center justify-between border-b border-b-custom-divider-gray p-4">
        <h2 className="text-lg font-bold lg:text-xl">Juubix Onboarding</h2>
        <button type="button" onClick={() => setOpenHelpPopup(false)}>
          <ImageWrapper
            src={CloseIcon}
            alt="close app icon"
            imageSizes="h-[26px] w-[26px]"
          />
        </button>
      </div>
      <ul className="flex list-disc flex-col gap-4 p-8">
        <li>
          <h3 className="text-base font-semibold lg:text-lg">Step 1</h3>
          <h4>
            Select one of the three profiles to use Juubix. This selection will
            be permanent
          </h4>
        </li>
        <li>
          <h3 className="text-base font-semibold lg:text-lg">Step 2</h3>
          <h4>
            Select three interests and three sub-interests for each interest.
          </h4>
        </li>
        <li>
          <h3 className="text-base font-semibold lg:text-lg">Step 3</h3>
          <h4>Select three skills and three sub-skills for each skill. </h4>
        </li>
      </ul>
    </div>
  </section>
);

export default OnboardingHelpPopup;
