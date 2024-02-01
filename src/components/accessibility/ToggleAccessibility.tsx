"use client";

import React, { useEffect, useState } from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import accessibilityIcon from "@public/icons/accessibility.svg";
import magnifyIcon from "@public/icons/accessibility-icons/magnify.svg";
import decreaseMagnifyIcon from "@public/icons/accessibility-icons/decrease-text.svg";
import link from "@public/icons/accessibility-icons/link.svg";
import contrastIcon from "@public/icons/accessibility-icons/contrast.svg";
import negativeContrastIcon from "@public/icons/accessibility-icons/negative-contrast.svg";
import resetIcon from "@public/icons/accessibility-icons/reset.svg";
import grayscaleIcon from "@public/icons/accessibility-icons/grayscale.svg";
import {
  setCurrentFontSize,
  setGrayScale,
  setUnderlineLinks,
  setHighContrast,
  setNegativeContrast,
  resetAllOptions,
} from "../../redux/features/accessibility/accessibilitySlice";

const ToggleAccessibility = () => {
  const dispatch = useAppDispatch();

  const {
    currentFontSize,
    grayScale,
    underlineLinks,
    highContrast,
    negativeContrast,
  } = useAppSelector((state) => state.accessibility);

  const [showContainer, setShowContainer] = useState<boolean>(false);
  const [baseFontSize, setBaseFontSize] = useState<number>(0);

  const root = document?.querySelector(":root") as HTMLElement;

  useEffect(() => {
    if (root) {
      const style = window
        .getComputedStyle(root, null)
        .getPropertyValue("font-size");
      const browserFontSize = parseFloat(style);
      setBaseFontSize(browserFontSize);
    }
  }, [root]);

  useEffect(() => {
    if (currentFontSize === 0) dispatch(setCurrentFontSize(baseFontSize));
  }, [currentFontSize, dispatch, baseFontSize]);

  useEffect(() => {
    if (currentFontSize !== 0) {
      root.style.fontSize = `${currentFontSize}px`;
    }

    if (root) {
      if (grayScale) {
        root.classList.add("grayscale");
      } else {
        root.classList.remove("grayscale");
      }

      if (underlineLinks) {
        root.classList.add("underline-links");
      } else {
        root.classList.remove("underline-links");
      }

      if (highContrast || negativeContrast) {
        document.body?.classList.remove("bg-main-gradient");
        document.body?.classList.add("bg-main-black");
      } else {
        document.body?.classList.remove("bg-main-black");
        document.body?.classList.add("bg-main-gradient");
      }

      if (highContrast) {
        document.documentElement.setAttribute("data-theme", "highContrast");
      } else if (negativeContrast) {
        document.documentElement.setAttribute("data-theme", "negativeContrast");
      } else {
        document.documentElement.setAttribute("data-theme", "default");
      }
    }
  }, [
    root,
    currentFontSize,
    grayScale,
    underlineLinks,
    highContrast,
    negativeContrast,
    dispatch,
  ]);

  const handleToggle = () => {
    setShowContainer(!showContainer);
  };

  const handleTextIncrease = () => {
    if (currentFontSize < 28) dispatch(setCurrentFontSize(currentFontSize + 2));
  };

  const handleTextDecrease = () => {
    if (currentFontSize > baseFontSize) {
      dispatch(setCurrentFontSize(currentFontSize - 2));
    }
  };

  const handleGrayscale = () => {
    dispatch(setGrayScale(!grayScale));
    dispatch(setHighContrast(false));
    dispatch(setNegativeContrast(false));
  };

  const handleHighContrast = () => {
    dispatch(setHighContrast(!highContrast));
    dispatch(setGrayScale(false));
    dispatch(setNegativeContrast(false));
  };

  const handleNegativeContrast = () => {
    dispatch(setHighContrast(false));
    dispatch(setGrayScale(false));
    dispatch(setNegativeContrast(!negativeContrast));
  };

  const handleLinksUnderline = () => {
    dispatch(setUnderlineLinks(!underlineLinks));
  };

  const resetAccessibilityOptions = () => {
    dispatch(
      resetAllOptions({
        baseFontSize,
        currentFontSize: baseFontSize,
        grayScale: false,
        underlineLinks: false,
        highContrast: false,
        negativeContrast: false,
      })
    );
  };

  return (
    <div className="absolute right-0 top-1/2 z-[999] flex -translate-y-1/2 transform items-start justify-start text-custom-blue-primary">
      <button
        type="button"
        onClick={handleToggle}
        className="border-2 border-button-border bg-custom-blue-primary p-2 lg:p-3"
      >
        <ImageWrapper
          src={accessibilityIcon}
          alt="AccessibilityIcon"
          imageSizes="h-[26px] w-[26px] md:h-[30px] md:w-[30px]"
        />
      </button>
      {showContainer && (
        <div className="flex flex-col items-start justify-start gap-1 border-2 border-button-border bg-custom-white py-4">
          <p className="font- px-4 py-2 text-sm font-semibold">
            Accessibility Tools
          </p>
          <button
            type="button"
            className="flex w-full items-center justify-start gap-1 px-4 py-2 text-sm"
            onClick={() => {
              handleTextIncrease();
            }}
          >
            <ImageWrapper
              src={magnifyIcon}
              alt="Magnifying Icon"
              imageSizes="h-[18px] w-[18px]"
            />
            Increase Text
          </button>
          <button
            type="button"
            className={`flex w-full items-center justify-start gap-1 px-4 py-2 text-sm ${
              baseFontSize < 16 ? "bg-gray-400" : ""
            } ${baseFontSize < 16 ? "text-white" : ""}`}
            onClick={() => {
              handleTextDecrease();
            }}
          >
            <ImageWrapper
              src={decreaseMagnifyIcon}
              alt="Magnifying Icon"
              imageSizes="h-[18px] w-[18px]"
            />
            Decrease Text
          </button>
          <button
            type="button"
            className={`flex w-full items-center justify-start gap-1 px-4 py-2 text-sm ${
              grayScale ? "bg-gray-400" : ""
            } ${grayScale ? "text-white" : ""}`}
            onClick={handleGrayscale}
          >
            <ImageWrapper
              src={grayscaleIcon}
              alt="Grayscale Icon"
              imageSizes="h-[18px] w-[18px]"
            />
            Grayscale
          </button>
          <button
            type="button"
            className={`flex w-full items-center justify-start gap-1 px-4 py-2 text-sm ${
              highContrast ? "bg-gray-400" : ""
            } ${highContrast ? "text-white" : ""}`}
            onClick={handleHighContrast}
          >
            <ImageWrapper
              src={contrastIcon}
              alt="High Contrast Icon"
              imageSizes="h-[14px] w-[14px]"
            />
            High Contrast
          </button>
          <button
            type="button"
            className={`flex w-full items-center justify-start gap-1 px-4 py-2 text-sm ${
              negativeContrast ? "bg-gray-400" : ""
            } ${negativeContrast ? "text-white" : ""}`}
            onClick={handleNegativeContrast}
          >
            <ImageWrapper
              src={negativeContrastIcon}
              alt="Negative Contrast Icon"
              imageSizes="h-[18px] w-[18px]"
            />
            Negative Contrast
          </button>
          <button
            type="button"
            className={`flex w-full items-center justify-start gap-1 px-4 py-2 text-sm ${
              underlineLinks ? "bg-gray-400" : ""
            } ${underlineLinks ? "text-white" : ""}`}
            onClick={handleLinksUnderline}
          >
            <ImageWrapper
              src={link}
              alt="Link Icon"
              imageSizes="h-[14px] w-[14px]"
            />
            Links Underline
          </button>
          <button
            type="button"
            className="flex w-full items-center justify-start gap-1 px-4 py-2 text-sm"
            onClick={() => {
              resetAccessibilityOptions();
            }}
          >
            <ImageWrapper
              src={resetIcon}
              alt="Reset Icon"
              imageSizes="h-[14px] w-[14px]"
            />
            Reset
          </button>
        </div>
      )}
    </div>
  );
};

export default ToggleAccessibility;
