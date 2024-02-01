import React from "react";
import { SelectedSubSkillType } from "../types";
import PopupSelectionMessage from "./PopupSelectionMessage";

interface PopupActionButtonsProps {
  onConfirm: React.MouseEventHandler<HTMLButtonElement>;
  onCancel: React.MouseEventHandler<HTMLButtonElement>;
  className: string;
  limitReached: boolean;
  isEditMode: boolean;
  selectedSubSkills: SelectedSubSkillType;
}

const PopupActionButtons = ({
  onCancel,
  onConfirm,
  className,
  limitReached,
  isEditMode,
  selectedSubSkills,
}: PopupActionButtonsProps) => {
  const disabledButtonStyle = limitReached ? "opacity-100" : "opacity-30";
  const cancelDisabledStyle = isEditMode ? "opacity-30" : "opacity-100";

  return (
    <div className="text-center">
      <PopupSelectionMessage
        isLimitReached={limitReached}
        selectedSubSkills={selectedSubSkills}
      />
      <div className={`${className} grid grid-cols-1 gap-4 p-4 md:grid-cols-2`}>
        <button
          type="button"
          onClick={onCancel}
          className={`rounded-xl border-2 border-red-500 p-2 ${cancelDisabledStyle}`}
          disabled={isEditMode}
        >
          {" "}
          Cancel{" "}
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className={`rounded-xl border-2 border-green-500 p-2 ${disabledButtonStyle}`}
          disabled={!limitReached}
        >
          {" "}
          Confirm{" "}
        </button>
      </div>
    </div>
  );
};

export default PopupActionButtons;
