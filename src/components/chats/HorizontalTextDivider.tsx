import React from "react";
import styles from "./style.module.css";

interface HorizontalTextDividerProps {
  dividerText: string;
  className?: string;
}

const HorizontalTextDivider = ({
  dividerText,
  className = "",
}: HorizontalTextDividerProps) => (
  <div
    className={`flex w-full items-center justify-center text-center ${className}`}
  >
    <h3 className={`${styles["horizontal-divider"]} text-center`}>
      {dividerText}
    </h3>
  </div>
);

export default HorizontalTextDivider;
