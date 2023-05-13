import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";
import { PageWrapper } from "./components/page-warapper";
import PlainNavbar from "./components/PlainNavbar";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [pnum1, setpnum1] = useState("");
  const [pnum2, setpnum2] = useState("");
  const [province, setprovince] = useState("");
  const [bag, setbag] = useState("");
  const [sum, setsum] = useState("");
  const [delgerengui, setdelgerengui] = useState("");
  const [gender, setgender] = useState("");
  const [surguuli, setsurguuli] = useState("");
  const [year, setyear] = useState("");
  const [day, setday] = useState("");
  const [month, setmonth] = useState("");

  const router = useRouter();
  // const router = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/LoginAs");
  };
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/registerStudent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
          fname,
          lname,
          pnum1,
          pnum2,
          province,
          bag,
          sum,
          delgerengui,
          gender,
          year,
          day,
          month,
        }),
      });
      const data = await response.json();
      if (data.status === "ok") {
        router.push("/LoginAsStudent");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    // router.push("/info/formTeacher");
  };
  return (
    <div>
      <PlainNavbar />
      <PageWrapper>
        <section className="h-screen">
          <div className="flex justify-center items-center flex-wrap  text-gray-800">
            <div className="lg:w-3/12">

              <form>
                <h1 className="text-center text-xl  uppercase font-semibold leading-snug m-4">Сурагчаар бүртгүүлэх</h1>
                <Image
                  src="/Logo eteacher.png"
                  alt="Logo"
                  width={80}
                  height={80}
                  style={{
                    margin: "auto",
                    marginBottom: "20px",
                  }}
                />
                <div className="mb-6">
                  <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-1000 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-500 focus:outline-none"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-1000 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-500 focus:outline-none"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-between items-center mb-6 float-right">
                  <a
                    href="#!"
                    className=" hover:text-700 focus:text-blue-700 active:text-blue-800 duration-200 transition ease-in-out text-right"
                  >
                    Нууц үгээ мартсан уу?
                  </a>
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-500 text-0 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleSubmit1}
                >
                  Бүртгүүлэх
                </button>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                {/* <a
            className="px-7 py-3 text-0 font-medium text-sm leading-snug uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full flex justify-center items-center mb-3 bg-600"
            href="#!"
            role="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="w-3.5 h-3.5 mr-2"
            >
              <path
                fill="currentColor"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
            Continue with Facebook
          </a> */}
                {/* <div className="mt-2 ">Don't have account?</div> */}
                <button
                  type="submit"
                  className="inline-block px-7 mt-2 py-3 bg-1 text-0 font-medium text-sm leading-snug rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleSubmit}
                >
                  Эсвэл бүртгэлтэй юу?
                </button>
              </form>
            </div>
          </div>
        </section>
      </PageWrapper>
    </div>
  );
};

export default SignUp;
