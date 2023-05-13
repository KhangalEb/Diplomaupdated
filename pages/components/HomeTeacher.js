import moment from "moment";
import Head from "next/head";
import Footer from "./Footer";
import NavbarrTeacher from "./NavbarrTeacher";
import { useState, useEffect, useCallback } from "react";
import { DatePicker, Space, Table, Column, Input, Button } from "antd";
import { PageWrapper } from "./page-warapper";
import Notification from "./Notification";
import { useRouter } from "next/router";
export default function Home() {
  const { RangePicker } = DatePicker;
  const [userrr, setUserrr] = useState("");
  const [dataa, setData] = useState([]);
  const [dataatable, setDatatable] = useState([]);
  const [isOrdered, setIsOrdered] = useState(false);
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [notification, setNotification] = useState({
    message: "",
    success: false,
  });
  const [tableData, setTableData] = useState([]);
  const [dataTable, setDataTableee] = useState([]);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("user")));
    fetchData();
  }, []);
  const fetchDataa = async () => {
    await fetch("http://localhost:8000/api/order")
      .then((response) => response.json())
      .then(async (data) => setTableData(data));
  };
  console.log(tableData.link);
  console.log(dataTable);
  useEffect(() => {
    const matchingData = tableData.filter((e) => e.teacher === dataa._id);
    setDataTableee(matchingData);
  }, [tableData]);
  useEffect(() => {
    fetchDataa();
  }, []);
  const array = [];
  useEffect(() => {
    setUserrr(JSON.parse(localStorage.getItem("user")));
  }, []);
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
  const filterData = (data) => {
    const filteredData = data.filter((i) => {
      if (userrr._id) {
        return i.teacher === userrr._id;
      }
      return false;
    });

    console.log(filteredData);
    setDatatable(filteredData);
  };

  const fetchData = useCallback(async () => {
    const response = await fetch("http://localhost:8000/api/timetableData");
    const data = await response.json();
    console.log(data);

    filterData(data);
  }, [userrr]);

  useEffect(() => {
    if (userrr) {
      fetchData();
    }
  }, [userrr]);
  const onChange = async (value, dateString) => {
    const h1 = moment(dateString[0]).format("HH");
    const h2 = moment(dateString[1]).format("HH");
    const year1 = moment(dateString[0]).format("YYYY");
    const year2 = moment(dateString[1]).format("YYYY");
    const day1 = moment(dateString[0]).format("DD");
    const day2 = moment(dateString[1]).format("DD");
    const n = h2 - h1;
    console.log(h1, h2);
    if (n > 1 || n < 0 || year2 !== year1 || day2 !== day1) {
      setNotification({
        message: "Нэмэгдэж буй цагийн дээд хэмжээ 1 цаг байна.",
        success: false,
      });
    } else {
      try {
        const response = await fetch(
          "http://localhost:8000/api/timetableData",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              sdate: moment(dateString[0]).format("YYYY-MM-DD HH:mm"),
              edate: moment(dateString[1]).format("YYYY-MM-DD HH:mm"),
              teacher: userrr._id,
              isOrdered: isOrdered,
            }),
          }
        );
        const data = await response.json();
        if (data.status === "ok") {
          setNotification({
            message: "Амжилттай Нэмэгдлээ",
            success: true,
          });
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleDelete = async (id) => {
    try {
      fetch(`http://localhost:8000/api/timetableDataDelete/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setNotification({
            message: "Амжилттай устгагдлаа",
            success: true,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleDeleteOrder = async (id) => {

    try {
      fetch(`http://localhost:8000/api/order/${id}`, {
        method: "DELETE",
      })
        .then(() => {
          setNotification({
            message: "Амжилттай устгагдлаа",
            success: true,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = async (record) => {
    await fetch(
      `http://localhost:8000/api/order/${record._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          link: inputValue,
        }),
      }
    );
  };
  const columns = [
    {
      title: "Эхлэх Цаг",
      dataIndex: "sdate",
      key: "sdate",
    },
    {
      title: "Дуусах Цаг",
      dataIndex: "edate",
      key: "edate",
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <button
            onClick={() => {
              handleDelete(record._id);
            }}
            className=" text-3"
          >
            Delete
          </button>
        </Space>
      ),
    },
  ];

  const columnsOrder = [
    {
      title: "Хичээлийн нэр",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Сурагчийн нэр",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Сурагчийн И-мэйл",
      dataIndex: "userEmail",
      key: "userEmail",
    },
    {
      title: "Сурагчийн утасны дугаар 1",
      dataIndex: "userPnum1",
      key: "userPnum1",
    },
    {
      title: "Сурагчийн утасны дугаар 2",
      dataIndex: "userPnum2",
      key: "userPnum2",
    },
    {
      title: "Захиалга Он сар өдөр",
      dataIndex: "dateCreated",
      key: "dateCreated",
    },
    {
      title: "Цагийн хуваарь Эхлэх",
      dataIndex: "sdate",
      key: "sdate",
    },
    {
      title: "Цагийн хуваарь Дуусах",
      dataIndex: "edate",
      key: "edate",
    },
    {
      title: "Link",
      key: "link",
      render: (text, record, index) => (
        <div className="flex align-middle">
          <Input defaultValue={tableData[index].link} onChange={handleInputChange} />
          <Button
            style={{ backgroundColor: "green", color: "white" }}
            onClick={() => handleSubmit(record)}
          >

            Илгээх
          </Button>
          <Button
            style={{ backgroundColor: "red", color: "white" }}
            onClick={() => {
              record.edate <= moment().format("YYYY-MM-DD HH:mm") ? handleDeleteOrder(record._id) : setNotification({
                message: "Амжилтгүй: Тухайн хичээл нь заагдаж дуусаагүй байна.",
                success: false,
              });
            }}
          >Устгах</Button>
        </div>
      ),
    }
  ];
  return (
    <div>
      <Head>
        <title>E-Teacher</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavbarrTeacher />
      <Notification
        message={notification.message}
        success={notification.success}
      />
      <PageWrapper>
        <div className="container mx-auto">
          <h1 className=" my-4 font-bold">Цагийн хуваарь оруулах</h1>
          <Space direction="vertical" size={12}>
            <RangePicker
              showTime={{
                format: "HH:00",
              }}
              format="YYYY-MM-DD HH:00"
              onChange={onChange}
            />
          </Space>
          <h1 className=" my-4 font-bold">Цагийн хуваарь</h1>
          <Table columns={columns} dataSource={dataatable} />
          <h1 className=" my-4 font-bold">Захиалга</h1>
          <Table
            columns={columnsOrder}
            dataSource={dataTable}
            scroll={{
              x: 500,
            }}
          ></Table>
        </div>
      </PageWrapper>
      <Footer />
    </div>
  );
}
