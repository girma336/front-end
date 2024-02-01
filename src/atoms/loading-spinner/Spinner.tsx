import React from "react";
import styles from "../style/style.module.css";

interface SpinnerProps {
  spinnerSize?: string;
  spinnerColor?: string;
}

const Spinner = ({
  spinnerSize = "h-[36px] w-[36px] lg:h-[48px] lg:w-[48px]",
  spinnerColor = "#fbfbfb",
}: SpinnerProps) => (
  <div
    className={`${spinnerSize} ${styles["loading-spinner"]} before:border-[${spinnerColor}] before:border-[5px] `}
  />
);

export default Spinner;
