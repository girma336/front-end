import React from "react";

type AccountItemsProps = {
  description: string;
  subdescriptions: { description: string }[];
};

const AccountItems = ({ description, subdescriptions }: AccountItemsProps) => (
  <div>
    <button
      type="button"
      className="text-md mb-2 mr-2 rounded-3xl border border-gray-600 bg-transparent px-6 py-2 capitalize text-custom-white hover:bg-gray-700 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-700"
    >
      {description}
    </button>

    <div className="mb-10 lg:mb-0">
      {subdescriptions?.map((sub, i) => (
        <button
          key={i}
          type="button"
          className="mb-2 mr-2 rounded-3xl border border-gray-600 bg-transparent px-3 py-1.5 text-left text-xs capitalize text-custom-white hover:bg-gray-700 hover:text-white focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-700"
        >
          {sub.description}
        </button>
      ))}
    </div>
  </div>
);

export default AccountItems;
