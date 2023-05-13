import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import BackButton from "./components/BackButton";
import { useRouter } from "next/router"
import { redirect } from 'next/navigation';
import { PageWrapper } from "./components/page-warapper"
const Profile = () => {
  const router = useRouter();
  const [userrr, setUserrr] = useState("");
  useEffect(() => {
    setUserrr(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <Navbarr />
      <PageWrapper>
        <BackButton />
        <div className="container mx-auto my-10 p-5">

          <div className="md:flex no-wrap md:-mx-2 ">

            {/* <!-- Left Side --> */}
            <div className="w-full md:w-3/12 md:mx-2">
              {/* <!-- Profile Card --> */}
              <div className="bg-0 p-3 border-t-4 border-1">
                <div className="image overflow-hidden">
                  <img
                    className="h-auto w-full mx-auto"
                    src="https://lavinephotography.com.au/wp-content/uploads/2017/01/PROFILE-Photography-112.jpg"
                    alt=""
                  />
                </div>
                <h1 className="text-900 font-bold text-xl leading-8 my-1">
                  {userrr.fname} {userrr.lname}
                </h1>

              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
              {/* <!-- Friends card --> */}

              <button
                className="bg-1 p-4 w-50 rounded-3xl mt-6"
                onClick={() => router.push("/info/formStudent")}
              >
                Профайл шинэчлэх
              </button>
              {/* <!-- End of friends card --> */}
            </div>
            {/* <!-- Right Side --> */}
            <div className="w-full md:w-9/12 mx-2">
              {/* <!-- Profile tab --> */}
              {/* <!-- About Section --> */}
              <div className="bg-50 p-3 shadow-sm rounded-sm">
                <div className="flex items-center space-x-2 font-semibold text-900 leading-8">
                  <span clas="text-1">
                    <svg
                      className="h-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </span>
                  <span className="tracking-wide">Хувийн мэдээлэл</span>
                </div>
                <div className="text-gray-700">
                  <div className="grid md:grid-cols-2 text-sm">
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Нэр</div>
                      <div className="px-4 py-2">{userrr.fname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Овог</div>
                      <div className="px-4 py-2">{userrr.lname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Хүйс</div>
                      <div className="px-4 py-2">{userrr.gender}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Утасны дугаар 1</div>
                      <div className="px-4 py-2">{userrr.pnum1}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Одоогийн хаяг
                      </div>
                      <div className="px-4 py-2">
                        {userrr.province} {userrr.bag} {userrr.sum} {userrr.delgerengui}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Утасны дугаар 2</div>
                      <div className="px-4 py-2">{userrr.pnum2}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">И-мэйл</div>
                      <div className="px-4 py-2">
                        <a className="text-blue-800" href="mailto:ex@example.com">
                          {userrr.email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Төрсөн өдөр</div>
                      <div className="px-4 py-2">{userrr.day}, {userrr.month}, {userrr.year}</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

              {/* <!-- Experience and education --> */}
              <div className="bg-50 p-3 shadow-sm rounded-sm">

                {/* <!-- End of Experience and education grid --> */}
              </div>
              {/* <!-- End of profile tab --> */}
            </div>
          </div>
        </div>
      </PageWrapper>
      <Footer></Footer>
    </>
  );
};

export default Profile;
