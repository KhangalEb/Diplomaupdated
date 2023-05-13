import Image from "next/image";
import React from "react";
import Footer from "./components/Footer";
import PlainNavbar from "./components/PlainNavbar";
import { useRouter } from "next/router";
import { PageWrapper } from "./components/page-warapper";
import BackButton from "./components/BackButton";
const Info = () => {
  const router = useRouter();
  const handleClick = (e) => {
    e.preventDefault();
    router.push("/LoginAsStudent");
  };
  const handleClick1 = (e) => {
    e.preventDefault();
    router.push("/LoginAsTeacher");
  };
  return (
    <div>

      <PlainNavbar />
      <BackButton />
      <PageWrapper>
        <div className="flex flex-col items-center my-48">
          <h1 className="font-bold text-center">Нэвтрэх</h1>
          <div className="">
            <button
              className=" m-4 bg-transparent hover:bg-1 hover:border-1 text-700 font-semibold hover:text-0 py-10 px-14 border border-500 hover:border-transparent rounded"
              onClick={handleClick}
            >
              Сурагч
            </button>
            <button
              className=" m-4 bg-500 hover:bg-700 text-0 font-bold py-10 px-14 border border-700 rounded"
              onClick={handleClick1}
            >
              Багш
            </button>
          </div>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
};

export default Info;
