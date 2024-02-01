import React from "react";
import RightArrow from "./RightArrow";
import DownArrow from "./DownArrow";

interface AccordionItemProps {
  header: string;
  content: string;
  isActive: boolean;
  onShow: React.MouseEventHandler<HTMLButtonElement>;
}

function AccordionItem({
  header,
  content,
  isActive,
  onShow,
}: AccordionItemProps) {
  const ArrowIcon = isActive ? DownArrow : RightArrow;

  return (
    <div className="w-full">
      <button
        className="my-3 flex w-full items-center"
        type="button"
        onClick={onShow}
      >
        {!isActive && <ArrowIcon height={16} width={16} />}
        {isActive && <ArrowIcon height={16} width={16} />}
        <h2 className="text-left font-semibold text-custom-blue-primary">
          {header}
        </h2>
      </button>
      {isActive && (
        <div className="animate-expand overflow-hidden px-6 py-2">
          <p>{content}</p>
        </div>
      )}
      <hr />
    </div>
  );
}
export default AccordionItem;
