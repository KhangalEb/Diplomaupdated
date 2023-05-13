import Navbarr from "./components/Navbarr"
import { useState, useEffect } from "react";
const TeachersProfile = () => {
    useEffect(() => {
        if (localStorage.getItem("token") === null) {
            router.push("/");
        } else {
            //show validation message
        }
    });
    const [userrr, setUserrr] = useState("");
    useEffect(() => {
        setUserrr(JSON.parse(localStorage.getItem("user")));
    }, []);
    return (<Navbarr />);
}

export default TeachersProfile;