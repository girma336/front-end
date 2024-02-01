import React, { useState } from "react";

const SwitchToggle = () => {
  const [isChecked, setIsChecked] = useState(false);

  const toggleSwitch = () => {
    setIsChecked((previousIsChecked) => !previousIsChecked);
  };

  return (
    <div className="relative inline-block w-10 select-none align-middle transition duration-200 ease-in">
      <input
        type="checkbox"
        name="toggle"
        id="toggle"
        className="absolute h-full w-full cursor-pointer opacity-0"
        checked={isChecked}
        onChange={toggleSwitch}
      />
      <div
        className={`${
          isChecked ? "bg-custom-blue-primary" : "bg-custom-left-panel"
        } toggle-label block h-5 w-10 cursor-pointer overflow-hidden rounded-full transition-colors duration-200 ease-in`}
      >
        <span
          className={`${
            isChecked
              ? "translate-x-full bg-custom-white"
              : "translate-x-0 bg-custom-white"
          } absolute inline-block h-5 w-5 transform rounded-full transition-transform duration-200 ease-in`}
        />
      </div>
    </div>
  );
};

export default SwitchToggle;
