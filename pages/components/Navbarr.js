import React from "react";
import Image from "next/image";
import DropDown from "./Navbar-drop-down";
import { redirect } from "next/navigation";
import { motion } from "framer-motion";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <>
      <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between px-2 py-3 bg-500 mb-3 shadow-lg">
        <div className="container top-0 px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full top-0 flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a href="/dashboard" className="flex items-center">
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
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-0 hover:opacity-75"
                    href="/dashboard"
                  >
                    <i className="fab fa-facebook-square text-lg leading-lg text-0 opacity-75"></i>
                    <span className="font-serif ml-2">Нүүр</span>
                  </a>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-0 hover:opacity-75"
                    href="/courses"
                  >
                    <i className="fab fa-twitter text-lg leading-lg text-0 opacity-75"></i>
                    <span className="font-serif ml-2">Хичээлүүд</span>
                  </a>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-0 hover:opacity-75"
                    href="/Teachers"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-0 opacity-75"></i>
                    <span className="font-serif ml-2">Багш нар</span>
                  </a>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-0 hover:opacity-75"
                    href="/about-us"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-0 opacity-75"></i>
                    <span className="font-serif ml-2">Бидний тухай</span>
                  </a>
                </motion.div>
              </li>
              <li className="nav-item">
                <motion.div whileHover={{ scale: 1.2 }}>
                  <a
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-0 hover:opacity-75"
                    href="contact-us"
                  >
                    <i className="fab fa-pinterest text-lg leading-lg text-0 opacity-75"></i>
                    <span className="font-serif ml-2">Бидэнтэй холбогдох</span>
                  </a>
                </motion.div>
              </li>
            </ul>
            <div className="flex items-center ml-auto mr-20">
              <div
                style={{
                  borderRadius: "45px",
                  overflow: "hidden",
                  margin: "10px",
                }}
              ></div>
              <DropDown />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
