import React from "react";
import Interest from "@/components/account/Interest";
import Skills from "@/components/account/Skills";
import Image from "next/image";
import PerosnalInfo from "@/components/account/PerosnalInfo";
import AccountAnim from "@public/profileImage/animoji.svg";
import ProfileBG from "@public/profileImage/aleksey-kuprikov-BG.jpg";
import IonLocation from "@public/icons/ion_location-outline.svg";
import IonEdit from "@public/icons/edit-pen.svg";

function AccountPage() {
  return (
    <section className="mx-auto space-y-5 rounded-3xl p-4 md:w-full ">
      <div className="relative left-0 right-0">
        <div>
          <Image
            className="flex h-28 !w-full !items-stretch rounded-3xl object-cover sm:h-32"
            src={ProfileBG}
            alt="Profle background image"
            sizes="(max-width: 768px) 100vw, (max-width: 1400px) 50vw, 33vw"
          />
          <button
            type="button"
            className="absolute right-4 top-3 rounded-full bg-custom-blue-primary p-1.5 text-xs sm:hidden"
          >
            <Image
              className=""
              src={IonEdit}
              alt="pen icon"
              width={12}
              height={12}
            />
          </button>
          <button
            type="button"
            className="absolute right-5 top-3 hidden rounded-full bg-custom-blue-primary px-2.5 py-1 text-xs sm:block"
          >
            Change Cover
          </button>
        </div>
        <div className="absolute left-2 top-20 flex items-end gap-5 sm:left-8 sm:top-16">
          <div className="">
            <Image
              className="h-24 w-24 sm:h-full sm:w-full"
              src={AccountAnim}
              width={120}
              height={120}
              alt="User profile image"
            />
            <button
              type="button"
              className="absolute left-[5.3rem] top-[4.8rem] rounded-full bg-custom-blue-primary p-1.5 sm:hidden"
            >
              <Image
                className=""
                src={IonEdit}
                alt="Pen icon"
                width={15}
                height={15}
              />
            </button>
            <div className="mt-1.5 hidden items-center justify-between sm:flex">
              <button type="button" className="text-xs text-red-600">
                Delete
              </button>
              <button type="button" className="text-xs">
                Change
              </button>
            </div>
          </div>
          <div className="mb-3 sm:mb-8">
            <h2 className="text-lg font-semibold tracking-wider lg:text-2xl xl:text-3xl">
              John Doe
            </h2>
            <div className="flex items-center gap-5 text-xs">
              <span>Talent</span>
              <p className="flex items-center gap-1">
                <Image
                  src={IonLocation}
                  alt="location icon"
                  width={12}
                  height={12}
                />
                <span>Dahok, Iraq</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-2 !mt-24 space-y-2 sm:mx-8 sm:!mt-28">
        <div className="mb-4 ">
          <h3 className="mb-1 text-2xl font-medium">Personal Information</h3>
          <hr className="border-custom-gray-primary" />
        </div>
        <PerosnalInfo />
      </div>

      <div className="mx-2 sm:mx-8">
        <div className="mb-4 sm:mt-10">
          <h3 className="mb-1 text-2xl font-medium">Skills</h3>
          <hr className="border-custom-gray-primary" />
        </div>
        <div className="mt-4 flex items-start justify-between gap-5">
          <Skills />
        </div>
      </div>
      <div className="mx-2 sm:mx-8">
        <div className="mb-4 sm:mt-10">
          <h3 className="mb-1 text-2xl font-medium">Interests</h3>
          <hr className="border-custom-gray-primary" />
        </div>
        <div className="mt-4 flex items-start justify-between gap-5 sm:mb-8">
          <Interest />
        </div>
      </div>
    </section>
  );
}
export default AccountPage;
