import BackButton from "../components/BackButton";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import { Table, Space } from "antd";
import moment from "moment";
import { Collapse } from "antd";
import Navbarr from "../components/Navbarr";
import Footer from "../components/Footer";
import Notification from "../components/Notification";
const Checkout = () => {
  const router = useRouter();
  const { id } = router.query;
  const [datatable, setDataTable] = useState([]);
  const [dataOrder, setDataOrder] = useState([]);
  const [order, setOrder] = useState([]);
  const [orderTable, setOrderTable] = useState([]);
  const [subject, setSubject] = useState("");
  const [user, setUser] = useState("");
  const [teacher, setTeacher] = useState("");
  const [form, setForm] = useState([]);
  const [notification, setNotification] = useState({
    message: "",
    success: false,
  });
  // console.log(order);
  const fetchData = async (id) => {


    setSubject(localStorage.getItem("selectedCourse"));

    setUser(JSON.parse(localStorage.getItem("user")));
    setTeacher(localStorage.getItem("teachername"))
    // console.log(subject);
    await fetch("http://localhost:8000/api/order")
      .then((response) => response.json())
      .then(async (data) => {
        setDataOrder(data);
        filterDataaa(data, id);
        return await fetch("http://localhost:8000/api/teacherList")
          .then((response) => response.json())
          .then(async (teacherData) => {
            filterData(teacherData, order);
            return await fetch("http://localhost:8000/api/timetableData")
              .then((response) => response.json())
              .then((orderdata) => {
                filterDataa(orderdata, id);
              });
          });
      })
    // .catch((error) => console.log("Error fetching data:", error));

  };
  const filterDataaa = async (data, id) => {
    // console.log(data);
    const filteredDataTable = data.filter((i) => {
      // console.log(id);
      // console.log(i.datatable);
      return i.datatable === id;
    });
    // console.log("filteredDataTableeeeeeeeeeeeeeeeee:", filteredDataTable);
    setOrder(filteredDataTable);
  };

  const filterDataa = async (orderdata, id) => {
    // console.log(orderdata)
    const filteredDataTable = orderdata.filter((i) => {
      // console.log(id)
      // console.log(i._id)
      return i._id === id;
    });
    // console.log("filteredDataTable:", filteredDataTable);
    setOrderTable(filteredDataTable);
  };

  // console.log("ene :::::::", dataOrder);
  const filterData = async (teacherData, dataOrder) => {
    const filteredData = teacherData.filter((i) => {
      return i._id === order.teacher;
    });
    // console.log("filteredData:", filteredData);
    setDataTable(filteredData);
  };
  useEffect(() => {
    fetchData(id);
  }, [id]);
  console.log(orderTable);
  const handleClick = async (id) => {
    const response = await fetch(
      `http://localhost:8000/api/orderwindowData/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          isOrdered: true,
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Failed to update timetable");
    } else {
      setNotification({
        message: "Амжилттай",
        success: true,
      });
      router.push("/courses");
    }
    const data = await response.json();

  };
  return (
    <div>
      <Navbarr />
      <Notification
        message={notification.message}
        success={notification.success}
      />
      <section className="antialiased bg-gray-100 text-gray-600 min-h-screen p-4">
        <div className="h-full">
          <div>
            <div className="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto"></div>
            <div
              className="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto"
              x-data="{ card: true }"
            >
              <div className="bg-white px-8 pb-6 rounded-b shadow-lg">
                <h1 className="text-center w-full text-xl leading-snug text-gray-800 font-semibold mb-2">
                  Захиалга баталгаажуулалт
                </h1>
                <div className="text-left mb-6">
                  <div className="text-md">Хичээлийн нэр: {subject}</div>
                  <div className="text-md">
                    Үнэ: {order[0] && order[0].price}
                  </div>
                  <div className="text-md">
                    Багш: {teacher}
                  </div>
                  <div className="text-md">
                    Хичээлийн цаг:{" "}
                    {order[0] &&
                      moment(order[0].sdate).format(
                        "YYYY-MM-DD HH:mm"
                      )}{" "}
                    -{" "}
                    {order[0] &&
                      moment(order[0].edate).format("YYYY-MM-DD HH:mm")}
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <div className="relative flex w-full p-1 bg-gray-50 rounded">
                    <span
                      className="absolute inset-0 m-1 pointer-events-none"
                      aria-hidden="true"
                    >
                      <span className="absolute inset-0 w-1/2 bg-white rounded border border-gray-200 shadow-sm transform transition duration-150 ease-in-out"></span>
                    </span>
                  </div>
                </div>

                <div x-show="card">

                  <div className="mt-4">
                    <button
                      className="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2 bg-1 border-1"
                      onClick={() => handleClick(orderTable[0]._id)}
                    >
                      Баталгаажуулах
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Checkout;
