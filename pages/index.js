import Head from "next/head";
import Image from "next/image";
import Footer from "./components/Footer";
import TeachersList from "./components/TeachersList";
import NavbarMainHome from "./components/NavbarMainHome";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { PageWrapper } from "./components/page-warapper";
import AboutUs from "./components/AboutUs";
import { motion } from "framer-motion";
import Contactus from "./components/ContactUs";
export default function Home() {

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      router.push("/dashboard");
    }
  });
  return (
    <div>
      <PageWrapper>
        <Head>
          <title>E-Teacher</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <NavbarMainHome></NavbarMainHome>

        <div className="container mx-auto">
          <div className=" h-screen w-full">
            <Image
              src="/OnlineSchool.jpg"
              alt="Background home"
              quality={100}
              fill
              className="absolute brightness-50 object-cover"
            />

            <h1 className=" mt-72 absolute xl:text-4xl my-auto  text-3xl text-gray-800 text-0 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto pt-4 z-10 font-roboto">
              Өнөөдрөөс эхлэхэд хэзээ ч оройтохгүй
            </h1>

          </div>
        </div>

        <AboutUs />
        <Contactus />
        <div>

          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 dark:text-white font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto pt-4 font-roboto">
            Багш нар
          </h1>

          <TeachersList />
        </div>
        <Footer></Footer>
      </PageWrapper >
    </div >
  );
}