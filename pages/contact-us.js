import Contactus from "./components/ContactUs";
import { useState, useEffect } from "react";
import NavbarrTeacher from "./components/NavbarrTeacher";
import Navbarr from "./components/Navbarr";
import Footer from "./components/Footer";
const ContactUsPage = () => {
  const [userrr, setUserrr] = useState("");
  useEffect(() => {
    setUserrr(JSON.parse(localStorage.getItem("user")));
  }, []);
  if (userrr.role == "student") {
    return (
      <div>
        <Navbarr />
        <Contactus />
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <NavbarrTeacher />
        <Contactus />
        <Footer />
      </div>
    );
  }
}

export default ContactUsPage;