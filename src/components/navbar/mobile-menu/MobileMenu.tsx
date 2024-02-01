"use client";

import React from "react";
import ImageWrapper from "@/atoms/ImageWrapper";
import HamburgerCloseIcon from "@public/icons/x-icon.svg";
import UserIcon from "@public/user_profile.svg";
import LinkButton from "@/atoms/buttons/LinkButton";
import ProfileIcon from "@public/icons/person-icon.svg";
import HelpMenuIcon from "@public/icons/help-icon.svg";
import SettingIcon from "@public/icons/icon-settings.svg";
import ModeIcon from "@public/icons/light-mode-icon.svg";
import LogoutIcon from "@public/icons/logout-icon.svg";
import MatchingNavMenu from "../MatchingNavMenu";

interface MobileMenuProps {
  toggleMenu?: boolean;
  onToggle?: React.MouseEventHandler<HTMLButtonElement>;
  onLogout?: React.MouseEventHandler<HTMLButtonElement>;
}

const MenuOptions = [
  {
    id: 1,
    linkTo: "/account",
    title: "Account",
    imageSrc: ProfileIcon,
    imageAlt: "Profile Icon",
  },
  {
    id: 2,
    linkTo: "/help-menu",
    title: "Help Menu",
    imageSrc: HelpMenuIcon,
    imageAlt: "Help Menu Icon",
  },
  {
    id: 3,
    linkTo: "/setting",
    title: "Settings",
    imageSrc: SettingIcon,
    imageAlt: "Setting Icon",
  },
  {
    id: 4,
    linkTo: "",
    title: "Light Mode",
    imageSrc: ModeIcon,
    imageAlt: "Light Mode Icon",
  },
];

const MobileMenu = ({ toggleMenu, onToggle, onLogout }: MobileMenuProps) => {
  const imageSize =
    "h-[20px] w-[20px] md:h-[24px] md:w-[24px] lg:h-[26px] lg:w-[26px]";

  return (
    <div className="block lg:hidden">
      <div className="fixed left-0 top-0 z-[999] flex h-screen w-[50%] flex-col  gap-4 bg-[#113160] pt-14 text-white lg:relative lg:z-40 lg:flex lg:h-full lg:w-max lg:items-start lg:bg-transparent lg:pt-4">
        <button
          type="button"
          className="self-end pr-3 lg:hidden"
          onClick={onToggle}
        >
          <ImageWrapper
            imageSizes={imageSize}
            src={HamburgerCloseIcon}
            alt="Hamburger Close Icon"
          />
        </button>
        <span className="m-1 flex items-center gap-2 pl-4 lg:hidden">
          <ImageWrapper
            src={UserIcon}
            alt="Grey color User profile icon"
            className="rounded-full"
            imageSizes="h-[30px] w-[30px]"
            sizes="40vw"
          />
          <p className="text-sm">John Doe</p>
        </span>
        <MatchingNavMenu />

        <ul className="flex flex-col gap-4">
          {MenuOptions.map((menuLink) => (
            <li className="w-max px-4 lg:hidden" key={menuLink.id}>
              <LinkButton
                linkTo={menuLink.linkTo}
                className="m-1 flex items-center justify-center gap-2 bg-transparent"
              >
                <ImageWrapper
                  imageSizes={imageSize}
                  src={menuLink.imageSrc}
                  alt={menuLink.imageAlt}
                />
                <p className="text-xs">{menuLink.title}</p>
              </LinkButton>
            </li>
          ))}
          <li className="w-max px-4 md:flex lg:absolute lg:bottom-[20%] lg:p-2">
            <button
              type="button"
              className="m-1 flex items-center justify-center gap-2 bg-transparent"
              onClick={onLogout}
            >
              <ImageWrapper
                imageSizes={imageSize}
                src={LogoutIcon}
                alt="Logout Icon"
              />
              <p className="text-xs">Logout</p>
            </button>
          </li>
        </ul>
      </div>
      {toggleMenu && (
        <button
          type="button"
          onClick={onToggle}
          className="absolute left-0 top-0 z-40 h-full w-full bg-black bg-opacity-50 lg:hidden"
          aria-label="Toggle Menu"
        />
      )}
    </div>
  );
};

export default MobileMenu;
