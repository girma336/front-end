import React, { useState } from "react";

import SearchIcon from "@public/icons/search-icon-light.svg";
import ImageWrapper from "@/atoms/ImageWrapper";
import { roboto } from "@/atoms/fonts";
import { users } from "@/data/SettingPagesData";
import { StaticImageData } from "next/image";

interface User {
  id: number;
  name: string;
  image: StaticImageData;
}

const SearchBar: React.FC = () => {
  const [activeSearch, setActiveSearch] = useState<User[]>(users);
  const [selectedUsers, setSelectedUsers] = useState<number[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value.toLowerCase();

    if (searchValue === "") {
      setActiveSearch([]);
      return;
    }

    setActiveSearch(
      users
        .filter((u) => u.name.toLowerCase().includes(searchValue))
        .slice(0, 7)
    );
  };

  const handleCheckboxChange = (userId: number) => {
    setSelectedUsers((prevSelectedUsers) =>
      prevSelectedUsers.includes(userId)
        ? prevSelectedUsers.filter((id) => id !== userId)
        : [...prevSelectedUsers, userId]
    );
  };

  const handleSaveChanges = () => {
    setSelectedUsers([]);
  };

  const handleCancel = () => {
    setSelectedUsers([]);
  };

  return (
    <div className="relative w-full">
      <div className="relative mx-8 mb-5 ">
        <input
          type="search"
          placeholder="Type Here"
          className="my-3 h-4 w-full rounded-lg border-none bg-custom-search-bar px-8 py-6 text-sm placeholder:pl-2 md:text-base lg:h-8"
          onChange={(e) => handleSearch(e)}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <ImageWrapper
            src={SearchIcon}
            alt="Search icon"
            imageSizes="h-4 w-4 lg:h-5 w-5"
          />
        </div>
      </div>
      {activeSearch.length > 0 && (
        <div>
          <div className="flex max-h-72 flex-col gap-2 overflow-y-scroll bg-custom-blue-dark p-4 text-custom-white  md:overflow-y-scroll">
            {activeSearch.map((user) => (
              <div className="flex px-2 hover:bg-custom-popup" key={user.id}>
                <div className="flex h-16 w-full items-center gap-4">
                  <ImageWrapper
                    src={user.image}
                    alt="user"
                    imageSizes="h-[45px] w-[45px]"
                  />
                  <span> {user.name}</span>
                </div>
                <input
                  type="checkbox"
                  className="bg-custom-blue-dark accent-custom-blue-primary"
                  checked={selectedUsers.includes(user.id)}
                  onChange={() => handleCheckboxChange(user.id)}
                />
              </div>
            ))}
          </div>
          <div className="my-6 flex  w-full justify-center gap-4 border-none bg-custom-blue-dark p-4 pl-6 text-sm  md:justify-end md:text-base lg:h-14">
            <button
              type="button"
              className={`flex items-center justify-center rounded-full bg-custom-blue-primary px-4 py-2 text-sm font-medium text-custom-white md:px-8 md:py-3 md:text-lg lg:py-5 ${roboto.className}`}
              onClick={handleSaveChanges}
            >
              Save Changes
            </button>
            <button
              type="button"
              className={`flex items-center justify-center rounded-full bg-custom-cancel-button px-8 py-2 font-medium text-custom-white md:px-14 md:py-3 md:text-lg lg:py-5 ${roboto.className}`}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
