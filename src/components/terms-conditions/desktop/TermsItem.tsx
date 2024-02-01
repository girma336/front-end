import React from "react";
import useScrollObserver from "../hooks/UseScrollObserver";

interface TermsItemProps {
  title: string;
  content: string;
}

function TermsItem({ title, content }: TermsItemProps) {
  const scrollObserverRef = useScrollObserver();
  return (
    <div data-item-id={`terms-${title}`} ref={scrollObserverRef}>
      <h4 className="my-4 text-xl font-semibold text-custom-gray-primary">
        {title}
      </h4>
      <p className="text-justify">{content}</p>
    </div>
  );
}
export default TermsItem;
