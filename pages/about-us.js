import AboutUs from "./components/AboutUs";
import NavbarrTeacher from "./components/NavbarrTeacher";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import NavbarMainHome from "./components/NavbarMainHome";
const Aboutus = () => {
  const [userrr, setUserrr] = useState("");
  useEffect(() => {
    setUserrr(JSON.parse(localStorage.getItem("user")));
  }, []);
  if (userrr.role == "student") {
    return (
      <div>
        <Navbarr />
        <AboutUs />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <NavbarrTeacher />
        <AboutUs />
        <Footer />
      </div>
    );
  }

}

export default Aboutus;