import React, { useRef, useState } from "react";
import Link from "next/link";
import ImageWrapper from "@/atoms/ImageWrapper";
import useClickOutside from "@/hooks/UseClickOutside";
import AccountAnim from "../../../public/profileImage/animoji.svg";
import IonArrawDown from "../../../public/icons/down-arrow-light.svg";

const navList = [
  {
    pathname: "Account",
    path: "/account",
  },
  {
    pathname: "Settings",
    path: "/setting",
  },
  {
    pathname: "Help",
    path: "/help-menu",
  },
];

interface UserProfileLinkProps {
  handleLogout: Function;
}

const UserProfileLink = ({ handleLogout }: UserProfileLinkProps) => {
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef(null);
  useClickOutside(containerRef, () => setIsActive(false));

  return (
    <>
      <button
        className="z-80 hidden items-center gap-2 lg:flex"
        type="button"
        onClick={() => setIsActive((prevValue) => !prevValue)}
      >
        <ImageWrapper
          className="h-max rounded-full border"
          src={AccountAnim}
          alt="user photo"
          imageSizes="h-[26px] w-[26px] lg:h-[36px] lg:w-[36px]"
        />
        <p className="hidden shrink-0 text-xs font-semibold tracking-widest sm:block">
          John Doe
        </p>
        <ImageWrapper
          src={IonArrawDown}
          alt="Dropdown Icon"
          imageSizes="h-[10px] w-[10px] lg:w-[14px] lg:h-[14px]"
        />
      </button>

      {/* <!-- Dropdown menu --> */}
      {isActive && (
        <>
          <div className="absolute right-[2.15rem] top-[3.5rem] z-50 hidden h-0 w-0 border-b-[10px] border-l-[10px] border-r-[10px] border-b-[#213655] border-l-transparent border-r-transparent sm:right-[1.5rem] sm:top-[3.2rem] md:right-[4.75rem] md:top-[3.2rem] lg:block" />
          <div
            className="absolute right-2 top-12 z-50 my-4 hidden w-36 list-none divide-y rounded-lg bg-custom-popup text-base shadow sm:top-11 lg:block"
            ref={containerRef}
          >
            <ul className="py-2">
              {navList.map((pathItem, index) => (
                <li key={index}>
                  <Link
                    href={pathItem.path}
                    onClick={() => setIsActive((prevValue) => !prevValue)}
                    className="block px-4 py-2 text-sm text-gray-200 hover:bg-custom-blue-dark hover:text-white"
                  >
                    {pathItem.pathname}
                  </Link>
                </li>
              ))}
              <li className="mt-5">
                <button
                  onClick={() => handleLogout()}
                  type="button"
                  className="mx-auto block w-3/4 rounded-2xl bg-[#ff0000] px-6 py-2 text-xs text-custom-white hover:bg-opacity-90"
                >
                  Sign Out
                </button>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default UserProfileLink;
