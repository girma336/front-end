import React from "react";
import Image from "next/image";
import { DropDownProps } from "./types";

interface SelectedItemProps {
  selected: DropDownProps;
}

const SelectedItem = ({ selected }: SelectedItemProps) => (
  <div className="flex items-center gap-2">
    <Image
      src={selected.icon}
      alt={`${selected.title} Icon`}
      width={25}
      height={25}
    />
    <div className="flex flex-col items-start">
      <span className="font-bold">{selected.title}</span>
    </div>
  </div>
);

export default SelectedItem;
