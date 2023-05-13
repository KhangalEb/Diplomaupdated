import NavbarrTeacher from "./components/NavbarrTeacher";
import Footer from "./components/Footer";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt from "jsonwebtoken";
import BackButton from "./components/BackButton";
import { PageWrapper } from "./components/page-warapper"
const Profile = () => {
  const router = useRouter();
  const [userrr, setUserrr] = useState("");
  const [dataa, setData] = useState([]);
  const [datateacher, setDataTeacher] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:8000/api/teacherList");
      const data = await response.json();
      filterData(data);
    };

    const user = JSON.parse(localStorage.getItem("user"));
    setUserrr(user);
    fetchData();
  }, []);

  const filterData = (data) => {
    const filteredData = data.filter((teacher) => {
      return teacher._id === userrr._id;
    });
    setDataTeacher(filteredData[0]);
  };

  return (
    <>
      <NavbarrTeacher />
      <BackButton />
      <PageWrapper>
        <div className="container mx-auto my-10 p-5">
          <div className="md:flex no-wrap md:-mx-2 ">
            <div className="w-full md:w-3/12 md:mx-2">
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
                <h3 className="text-gray-600 font-lg text-semibold leading-6">
                  {datateacher && datateacher.subject && datateacher.subject.map((e, i) => {
                    return (
                      <a className="cursor-pointer">
                        <div className="bg-100 p-3 mb-1 text-center rounded" key={i}>
                          {e}
                        </div>
                      </a>
                    );
                  })}
                </h3>
                <label>Товч танилцуулга</label>
                <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  {userrr.tovchtaniltsuulga}
                </p>

                <ul className="bg-50 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                  <li className="flex items-center py-3">
                    <span>Төлөв</span>
                    <span className="ml-auto">
                      <span className="bg-1 py-1 px-2 rounded text-white text-sm">
                        Идэвхитэй
                      </span>
                    </span>
                  </li>

                </ul>
                <button
                  className="bg-1 p-4 w-50 rounded-3xl mt-6"
                  onClick={() => router.push("/info/formTeacher")}
                >
                  Профайл засах
                </button>
              </div>
              {/* <!-- End of profile card --> */}
              <div className="my-4"></div>
              {/* <!-- Friends card --> */}
              <div className="bg-0 p-3 hover:shadow">
                <div className="flex items-center space-x-3 font-semibold text-900 text-xl leading-8"></div>
              </div>
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
                      <div className="px-4 py-2"> {userrr.fname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Овог</div>
                      <div className="px-4 py-2"> {userrr.lname}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Хүйс</div>
                      <div className="px-4 py-2"> {userrr.gender}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Утасны дугаар</div>
                      <div className="px-4 py-2"> {userrr.pnum1}</div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">
                        Одоогийн хаяг
                      </div>
                      <div className="px-4 py-2">
                        {userrr.province}, {userrr.sum}, {userrr.delgerengui}
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Имайл</div>
                      <div className="px-4 py-2">
                        <a className="text-blue-800" href={userrr.email}>
                          {userrr.email}
                        </a>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="px-4 py-2 font-semibold">Төрсөн өдөр</div>
                      <div className="px-4 py-2">
                        {userrr.month}, {userrr.day}, {userrr.year}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End of about section --> */}

              <div className="my-4"></div>

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
