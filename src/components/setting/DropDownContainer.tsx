import React, { useState } from "react";
import Image from "next/image";
import DropDownIcon from "@public/icons/menu-down.svg";
import { menuList } from "@/data/SettingPagesData";
import SelectedItem from "./SelectedItem";

interface DropDownContainerProps {
  onClickLastItem: () => void;
}

interface MenuItem {
  path: string;
  title: string;
  text: string;
  icon: any;
}

const DropDownContainer: React.FC<DropDownContainerProps> = ({
  onClickLastItem,
}) => {
  const [selected, setSelected] = useState<MenuItem | undefined>(undefined);
  const [open, setOpen] = useState(false);

  const item = selected ? (
    <SelectedItem selected={selected} />
  ) : (
    <h4 className="lg:text-md text-xs md:text-sm">Who can see this</h4>
  );

  return (
    <div className="h-15 mt-2 w-48 font-medium">
      <button
        className="flex w-full items-center justify-between border border-custom-white p-2"
        type="button"
        onClick={() => setOpen(!open)}
      >
        {item}
        <Image src={DropDownIcon} alt="Dropdown Icon" />
      </button>
      <ul className={`mt-2 bg-custom-dark-blue ${open ? "block" : "hidden"}`}>
        {menuList.map((menuItem, index) => (
          <li key={menuItem.title}>
            <button
              type="button"
              className="w-48 cursor-pointer border-b-2 border-custom-blue-dark p-2 hover:bg-custom-blue-dark"
              onClick={() => {
                setSelected(menuItem);
                setOpen(false);
                if (index === menuList.length - 1) {
                  onClickLastItem();
                }
              }}
            >
              <div className="flex items-start gap-4">
                <Image
                  src={menuItem.icon}
                  alt={`${menuItem.title} Icon`}
                  width={25}
                  height={25}
                />
                <div className="flex flex-col items-start">
                  <span className="md:text-md text-sm font-bold md:text-left">
                    {menuItem.title}
                  </span>
                  <span className="text-xs">{menuItem.text}</span>
                </div>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropDownContainer;
