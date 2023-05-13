import React, { useEffect, useState } from "react";
import jwt from "jsonwebtoken";
import { useRouter } from "next/router";
import HomeTeacher from "./components/HomeTeacher";
import HomeStudent from "./components/HomeStudent";
import { redirect } from "next/navigation";
const Dashboard = () => {
  const router = useRouter();
  const [userr, setUser] = useState("");
  //shidelt
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
  // const [tempQuote, setTempQuote] = useState();
  async function populate() {
    const token = localStorage.getItem("token");
    const req = await fetch("http://localhost:8000/api/userData", {
      method: "POST",
      headers: {
        authorization: `
        Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const data = await req.json();
    console.log(data.data);
    // console.log(data.password);
    setUser(data.data);
  }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwt.decode(token);
      if (!user) {
        localStorage.removeItem("token");
        router.push("/LoginAsTeacher");
      } else {
        populate();
      }
    }
  }, []);
  if (userrr.role == "student") {
    return (
      <div>
        <HomeStudent />
      </div>
    );
  } else {
    return (
      <div>
        <HomeTeacher />
      </div>
    );
  }
};

export default Dashboard;
