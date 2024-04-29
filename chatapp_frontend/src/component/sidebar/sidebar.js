import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
import "./sidebar.scss";
import classNames from "classnames";
import { IoIosSearch } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { FaArrowLeft } from "react-icons/fa6";
import { UserCards } from "../cards/userCards";

const styles = {
  users_cont: "sidebar__users_cont",
  header: "sidebar__users_cont__header",
};

const Sidebar = () => {
  const [isInputClicked, setInputClicked] = useState(false);

  const handleClick = () => {
    setInputClicked(!isInputClicked);
  };
  return (
    <div className="w-full h-full grid grid-cols-12">
      <div className="col-span-1 "></div>

      <div
        className={classNames({
          [styles.users_cont]: true,
          "col-span-11 flex flex-col": true,
        })}
      >
        <div
          className={classNames({
            "w-full h-40 flex flex-col justify-between border-b ": true,
            [styles.header]: true,
          })}
        >
          <div className="flex justify-between items-center">
            <div className="text-4xl font-bold text-[#111b21]">Chats</div>
            <div></div>
          </div>
          <div className="flex  items-center  gap-8 px-5 py-4 rounded-2xl bg-[#f0f2f5]">
            <Transition
              show={!isInputClicked}
              enter="transition-opacity duration-500"
              enterFrom="display-none"
              enterTo="opacity-100"
              leave="transition-opacity duration-500"
              leaveFrom="opacity-100 rotate-0 scale-100"
              leaveTo="opacity-0 rotate-45 scale-60"
            >
              <IoSearchSharp className="text-3xl text-[#88959e]" />
            </Transition>

            <Transition
              show={isInputClicked}
              enter="transition-opacity duration-1000"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-1000"
              leaveFrom="opacity-100 rotate-47"
              leaveTo="opacity-0 rotate-0"
            >
              <FaArrowLeft className="text-3xl text-[#06aa87]" />
            </Transition>
            {/* <IoSearchSharp className="text-3xl text-[#88959e]" /> */}
            <input
              placeholder="Search"
              className="text-2xl text-[#111b21] w-full bg-transparent border-none outline-none"
              onClick={() => handleClick()}
            />
            <IoSearchSharp className="text-3xl text-[#88959e]" />
          </div>
        </div>

        <div className="flex flex-col pr-4  overflow-y-auto flex-grow">
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
          <UserCards />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
