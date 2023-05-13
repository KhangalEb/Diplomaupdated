import React from "react";
import Image from "next/image";
import DropDownHome from "./Navbar-drop-down-home";
export default function NavbarMainHome() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-500 mb-3 shadow-lg">
        <div className="container top-0 px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full top-0 flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/" className="flex items-center">
              <Image
                src="/Logo eteacher.png"
                alt="Logo"
                width={50}
                height={30}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap text-0 pl-2">
                E-Teacher
              </span>
            </a>

            <button
              className="text-0 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <div className="flex items-center ml-auto">
              <DropDownHome />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
