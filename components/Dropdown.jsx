"use client";
import { useState } from "react";

export default function Dropdown({
  iconImg = "",
  title = "title",
  contents = [],
}) {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    console.log(contents);
    setDropdown((prevState) => !prevState);
  };
  return (
    <div className="flex flex-col my-4">
      <div
        onClick={toggleDropdown}
        className="bg-transparent flex rounded-md  items-center ml-6 mr-2  py-1.5 px-3.5 hover:bg-green_B active:bg-green_B hover:font-semibold active:font-semibold cursor-pointer"
      >
        <img src={iconImg} alt="link-icon" className="inline" />
        <p className="px-2.5 inline">{title}</p>
        <img
          src="../dropdown-icon.svg"
          alt="dropdown icon"
          className={!dropdown && "rotate-180 fill-green_A stroke-green_A"}
        />
      </div>
      <div className={dropdown ? "block" : "hidden"}>
        {" "}
        {contents.map((content) => {
          return (
            <p key={content} className="w-full pl-16 py-2.5 hover:bg-gray_B active:bg-gray_B text-gray_C">
              {content}
            </p>
          );
        })}
      </div>
    </div>
  );
}
