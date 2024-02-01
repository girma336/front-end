"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import ImageWrapper from "@/atoms/ImageWrapper";
import HelpIcon from "@public/icons/help-icon.svg";
import JuubixLogo from "@public/logos/juubix_logo.svg";
import HamburgerIcon from "@public/icons/hamburger-menu-icon.svg";
import { useAuth } from "@/shared";
import UserProfileLink from "./UserProfileLink";
import MobileMenu from "./mobile-menu/MobileMenu";
import OnboardingHelpPopup from "./OnboardingHelpPopup";
import NotificationBell from "./notification/NotificationBell";

const onboardingPages = [
  "/profiles",
  "/interests",
  "/skills",
  "/questionnaire",
];

const AppNavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [openHelpPopup, setOpenHelpPopup] = useState(false);

  const currentPath = usePathname();
  const showItemInPages = !onboardingPages.includes(currentPath);

  const { logout } = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const handleHelpPopup = () => {
    setOpenHelpPopup((prevValue) => !prevValue);
  };

  return (
    <>
      <nav className="w-full border-gray-200 px-6 py-2 text-custom-white md:mb-8 lg:bg-[#040B27]">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <Link href="/">
            <ImageWrapper
              src={JuubixLogo}
              alt="Registered Juubix logo"
              imageSizes="w-[90px] h-[35px] lg:w-[120px] lg:h-[55px]"
            />
          </Link>

          {/* Show user profile, mobile menu and notifications in pages other than onboarding */}

          {showItemInPages && (
            <div className="flex w-full items-center justify-between gap-3 lg:justify-end">
              <button
                type="button"
                className="lg:hidden"
                onClick={handleToggleMenu}
              >
                <ImageWrapper
                  src={HamburgerIcon}
                  alt="Hamburger Menu"
                  imageSizes="h-[24px] w-[24px] lg:h-[28px] lg:w-[28px]"
                />
              </button>
              <NotificationBell />

              <UserProfileLink handleLogout={handleLogout} />
            </div>
          )}

          {/* show help button in onboarding pages */}

          {!showItemInPages && (
            <div className="flex w-full items-center justify-end gap-3">
              <button
                type="button"
                className="flex items-center"
                onClick={handleHelpPopup}
              >
                <ImageWrapper
                  src={HelpIcon}
                  alt="help icon"
                  imageSizes="h-[22px] w-[22px]"
                />
                <p className="mx-1 text-sm font-semibold lg:text-base">Help</p>
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* <!-- Toggle menu --> */}

      {toggleMenu && (
        <MobileMenu
          toggleMenu={toggleMenu}
          onToggle={handleToggleMenu}
          onLogout={handleLogout}
        />
      )}
      {openHelpPopup && (
        <OnboardingHelpPopup setOpenHelpPopup={setOpenHelpPopup} />
      )}
    </>
  );
};

export default AppNavBar;
