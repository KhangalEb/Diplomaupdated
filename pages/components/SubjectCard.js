import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
const SubjectCard = () => {
  const router = useRouter();
  const [dataa, setData] = useState([]);
  console.log(dataa);
  const fetchData = async () => {
    return fetch("http://localhost:8000/api/subjectData")
      .then((response) => response.json())
      .then((data) => setData(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleClick = async (e) => {
    try {
      const response = await fetch("http://localhost:8000/api/teacherListBySubjects", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          { subject: e }
        ),
      });
      const data = await response.json();
      localStorage.setItem("FilteredTeachers", JSON.stringify(data));
      localStorage.setItem("selectedCourse", JSON.stringify(e));
      if (data.status === "ok") {
        console.log("ok");
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }


    router.push(`/subject/${e}`);
  };

  return (
    <div>
      <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {dataa.map((i, ind) => {
          return (

            <div className="bg-white dark:bg-gray-800 rounded py-5 pl-6 shadow">
              <motion.div initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}>
                <div className="text-gray-700 dark:text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-dashboard"
                    width={32}
                    height={32}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={12} cy={13} r={2} />
                    <line x1="13.45" y1="11.55" x2="15.5" y2="9.5" />
                    <path d="M6.4 20a9 9 0 1 1 11.2 0Z" />
                  </svg>
                </div>
                <div className="pl-3 pr-10 mt-1">
                  <h3 className="break-words font-normal leading-4  text-900 dark:text-gray-100 text-base">
                    {i.category}
                  </h3>
                  <div className="flex items-end mt-4">
                    <h2 className="break-all text-900 dark:text-indigo-600 leading-normal font-roboto text-l">
                      {i.title}
                    </h2>


                  </div>
                  <div className="flex items-end mt-4 ">
                    <p className="truncate w-64  text-900">
                      {i.description}
                    </p>


                  </div>
                  <div className="flex items-end mt-4">
                    <h3 className="break-words font-normal leading-4 text-gray-800 dark:text-gray-100 text-base  text-900">
                      Анги: {i.range}
                    </h3>
                  </div>
                  <div className="float-right mt-5">
                    <div className="bg-500 p-3 border text-0 rounded-2xl">
                      <button onClick={() => handleClick(i.title)}>Нээх</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          );
        })}
      </div>
    </div>
  );
};

export default SubjectCard;
