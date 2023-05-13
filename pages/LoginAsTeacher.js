import Image from "next/image";
import { useRouter } from "next/router";
import PlainNavbar from "./components/PlainNavbar";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import jwt from "jsonwebtoken";
import { PageWrapper } from "./components/page-warapper";
import Notification from "./components/Notification";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("teacher");
  const router = useRouter();
  const [notification, setNotification] = useState({
    message: "",
    success: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/info");
  };
  useEffect(() => {
    if (!notification.message) return;

    const timer = setTimeout(() => {
      setNotification({
        message: "",
        success: false,
      });
    }, 3000);


    return () => clearTimeout(timer);
  }, [notification]);
  const handleSubmit1 = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          role,
        }),
      });
      const data = await response.json();
      if (data.user) {
        localStorage.setItem("token", data.user);
        const req = await fetch("http://localhost:8000/api/userData", {
          method: "POST",
          headers: {
            authorization: `
              Bearer ${data.user}`,
            "Content-Type": "application/json",
          },
        });
        const dataa = await req.json();
        console.log(dataa.data);
        localStorage.setItem("user", JSON.stringify(dataa.data));
        setNotification({
          message: "Амжилттай",
          success: true,
        });
        if (dataa.data.fname == "") {
          router.push("/info/formTeacher");
        } else {
          router.push("/dashboard");
        }

      } else {
        setNotification({
          message: "Э-Майл эсвэл нууц үг буруу байна",
          success: false,
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <PlainNavbar />
      <Notification
        message={notification.message}
        success={notification.success}
      />
      <PageWrapper>
        <section className="h-auto">
          <div className="flex justify-center items-center flex-wrap mt-12 mb-28 text-gray-800">
            <div className="lg:w-3/12">
              <h1 className="text-center text-xl  uppercase font-semibold leading-snug">
                Багшаар нэвтрэх
              </h1>
              <form>
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
                    Нууц үгээ мартсан?
                  </a>
                </div>
                <button
                  type="submit"
                  className="inline-block px-7 py-3 bg-500 text-0 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  onClick={handleSubmit1}
                >
                  Нэвтрэх
                </button>
                <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                  <p className="text-center font-semibold mx-4 mb-0">OR</p>
                </div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="inline-block px-7 mt-2 py-3 bg-1 text-0 font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Бүртгүүлэх
                </button>
              </form>
            </div>
          </div>
        </section>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Login;
