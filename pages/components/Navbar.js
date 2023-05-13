import Image from "next/image";
import DropDown from "./Navbar-drop-down";
const Navbar = () => {
  return (
    <div>
      <nav className="bg-500 border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" className="flex items-center">
            <Image src="/Logo eteacher.png" alt="Logo" width={50} height={30} />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-0 pl-2">
              E-Teacher
            </span>
          </a>
          <div className="flex items-center md:order-2">
            <span className="sr-only">Open user menu</span>
            <div
              style={{
                borderRadius: "45px",
                overflow: "hidden",
                margin: "10px",
              }}
            >
              <Image
                src="/userpro.png"
                alt="user photo"
                width={30}
                height={30}
              />
            </div>
            <DropDown />
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <a
                  href="/about-us"
                  className="block py-2 pl-3 pr-4 text-0 bg-blue-700 rounded md:bg-transparent md:text-0 md:p-0"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-900 md:p-0 "
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="/Teachers"
                  className="block py-2 pl-3 pr-4 text-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-900 md:p-0"
                >
                  Teachers
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="block py-2 pl-3 pr-4 text-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-900 md:p-0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-0 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-900 md:p-0"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
