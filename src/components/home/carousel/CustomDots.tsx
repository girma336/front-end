import React from "react";

const CustomDots = ({ onClick, active }: any) => {
  const activeStyleClass = active ? "bg-[#00D0FE]" : "bg-[#040B26B5]";

  return (
    <button
      className={`mx-2 h-3 w-3 cursor-pointer rounded-full border ${activeStyleClass}`}
      type="button"
      onClick={() => onClick()}
    >
      {" "}
    </button>
  );
};

export default CustomDots;
