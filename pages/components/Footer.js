import Image from "next/image";
const Footer = () => {
  return (
    <>
      <div className="pt-12 xl:pt-14 px-6 bg-100">
        <div
          tabIndex="0"
          aria-label="footer"
          className="focus:outline-none w-full border-gray-300 dark:border-gray-700 border-t lg:w-11/12 md:w-11/12 lg:mx-auto md:mx-auto "
        >
          <div className="container mx-auto ">
            <div className="xl:flex lg:flex md:flex pt-6">
              <div className="w-11/12 xl:w-3/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 mr-56">
                <div className="flex items-center mb-6 xl:mb-0 lg:mb-0">
                  <div aria-label="logo" role="img">
                    <Image
                      src="/Logo eteacher.png"
                      alt="logo footer"
                      width={80}
                      height={80}
                    />
                  </div>
                  <p
                    tabIndex="0"
                    className="focus:outline-none ml-3 dark:text-white font-bold text-xl"
                  >
                    E-Teacher
                  </p>
                </div>
              </div>
              <div className="w-11/12 xl:w-1/6 lg:w-2/5 mx-auto lg:mx-0 xl:mx-0 pt-3 xl:flex flex-col xl:justify-start pl-3 sm:pl-0">
                <h2
                  tabIndex="0"
                  className="focus:outline-none text-gray-800 dark:text-white font-bold text-xl mb-6"
                >
                  Манай сайт
                </h2>
                <ul>
                  <li className="text-base text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-4">
                    <a
                      tabIndex="0"
                      className="focus:underline focus:outline-none"
                      href="#"
                    >
                      Бидний тухай
                    </a>
                  </li>
                  <li className="text-base text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-4">
                    <a
                      tabIndex="0"
                      className="focus:underline focus:outline-none"
                      href="#"
                    >
                      Бидэнтэй холбогдох
                    </a>
                  </li>
                  <li className="text-base text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-4">
                    <a
                      tabIndex="0"
                      className="focus:underline focus:outline-none"
                      href="#"
                    >
                      Багш нар
                    </a>
                  </li>
                  <li className="text-base text-gray-800 dark:text-gray-200 hover:text-gray-700 mb-4">
                    <a
                      tabIndex="0"
                      className="focus:underline focus:outline-none"
                      href="#"
                    >
                      Хичээлүүд
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:flex flex-wrap justify-between xl:mt-24 mt-8 pb-6 pl-3 sm:pl-0">
              <div className="w-11/12 xl:w-2/6 mx-auto lg:mx-0 xl:mx-0 mb-6 xl:mb-0">
                <p
                  tabIndex="0"
                  className="focus:outline-none text-gray-800 dark:text-white text-base"
                >
                  2020 E-teacher
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
