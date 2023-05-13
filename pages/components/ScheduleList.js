import { useState, useEffect, useCallback } from "react";
import { DatePicker, Space, Table, Column, Input, Button } from "antd";
import { useRouter } from "next/router";
const ScheduleList = () => {
  const [userrr, setUserrr] = useState("");
  const [dataatable, setDatatable] = useState([]);
  useEffect(() => {
    setUserrr(JSON.parse(localStorage.getItem("user")));
  }, []);
  const fetchData = useCallback(async () => {
    const response = await fetch("http://localhost:8000/api/order")
      .then((response) => response.json())
      .then(async (data) => filterData(data));
  }, [userrr]);
  useEffect(() => {
    if (userrr) {
      fetchData();
    }
  }, [userrr]);
  const filterData = (data) => {
    const filteredData = data.filter((i) => {
      console.log(i);
      console.log(userrr._id);
      return i.user === userrr._id;
    });
    console.log(filteredData);
    setDatatable(filteredData);
  };
  console.log("saihn ", dataatable);
  return (
    <div className="py-16 pl-8 ml-6">
      <p className="text-3xl font-semibold leading-none text-gray-800 ml-1">
        Хуваарь
      </p>
      <ol className=" py-5 items-center sm:flex table-auto overflow-scroll w-full">
        {dataatable && dataatable.map(i => {
          return <li className="relative mb-6 sm:mb-0">
            <div className="flex items-center">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-200 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg
                  aria-hidden="true"
                  className="w-3 h-3 text-blue-600 dark:text-blue-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <div className="hidden sm:flex w-full bg-500 h-0.5 dark:bg-gray-700"></div>
            </div>
            <div className="mt-3 sm:pr-8">
              <h3 className="text-lg font-semibold dark:text-white">{i && i.subject}</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                Эхлэх: {i && i.sdate}
              </time>
              Линк:
              <a href={i && i.link} className="font-normal text-700">
                {i && i.link}
              </a>
            </div>
          </li>
        })}

      </ol>
    </div>
  );
};

export default ScheduleList;
