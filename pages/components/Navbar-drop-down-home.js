import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
export default function DropDownHome() {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/LoginAs");
  };
  const handleClick1 = (e) => {
    e.preventDefault();
    router.push("/info");
  };
  return (
    <div className="w-26">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-300 bg-opacity-40 px-4 py-2 text-sm font-medium text-0 hover:bg-opacity-30 focus:outline-none  focus-visible:ring-0 focus-visible:ring-opacity-75 font-roboto">
            Эхлэх
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-1000 rounded-md bg-0 shadow-lg  focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  className="bg-0 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-400 hover:text-0 font-roboto"
                  onClick={handleClick}
                >
                  Нэвтрэх
                </button>
              </Menu.Item>
              <Menu.Item>
                <button
                  className="bg-0 text-white group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-500 hover:text-0 font-roboto"
                  onClick={handleClick1}
                >
                  Бүртгүүлэх
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
