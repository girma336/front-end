import React from "react";

interface AgreeCheckBoxProps {
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

function AgreeCheckBox({ handleChange }: AgreeCheckBoxProps) {
  return (
    <label htmlFor="agree-terms-conditions" className="my-2 text-justify">
      <input
        id="agree-terms-conditions"
        type="checkbox"
        onChange={handleChange}
        className="me-4 h-[14px] w-[14px] text-sm lg:h-[20px] lg:w-[20px] lg:text-base "
      />
      I acknowledge and agree to the above Terms & Conditions.
    </label>
  );
}
export default AgreeCheckBox;
