const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Student = require("../models/student.model");
const Category = require("../models/category.model");
const Subject = require("../models/subject.model");
const Timetable = require("../models/timetable.model");
const Order = require("../models/order.model");
const jwt = require("jsonwebtoken");
const middleware = require("../pages/middleware");
const { Buffer } = require('buffer/');
app.use(cors());
app.use(express.json());
const util = require('util/');

const uri =
  "mongodb+srv://admin:admin@cluster0.4r1xcih.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Database connected!!!");
  } catch (error) {
    console.log(error);
  }
}
connect();
app.post("/api/registerStudent", async (req, res) => {
  console.log(req.body);
  try {
    const student = await Student.create({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      fname: req.body.fname,
      lname: req.body.lname,
      pnum1: req.body.pnum1,
      pnum2: req.body.pnum2,
      province: req.body.province,
      bag: req.body.bag,
      sum: req.body.sum,
      delgerengui: req.body.delgerengui,
      gender: req.body.gender,
      surguuli: req.body.surguuli,
      year: req.body.year,
      day: req.body.day,
      month: req.body.month,
    }).exec();
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/register", async (req, res) => {
  console.log(req.body);
  try {
    const user = await User.create({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
      fname: req.body.fname,
      lname: req.body.lname,
      pnum1: req.body.pnum1,
      pnum2: req.body.pnum2,
      province: req.body.province,
      bag: req.body.bag,
      sum: req.body.sum,
      delgerengui: req.body.delgerengui,
      gender: req.body.gender,
      surguuli: req.body.surguuli,
      year: req.body.year,
      day: req.body.day,
      month: req.body.month,
      angi: req.body.angi,
      tovchtaniltsuulga: req.body.tovchtaniltsuulga,
      price: req.body.price,
      subject: req.body.subject,
    }).exec();
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/login", async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    }).exec();
    if (user) {
      const token = jwt.sign(
        {
          email: user.email,
          _id: user._id,
        },
        "secret123"
      );
      return res.json({ status: "ok", user: token, role: user.role });
    } else {
      return res.json({ status: "error", user: false });
    }
    // res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/loginStudent", async (req, res) => {
  try {
    const user = await Student.findOne({
      email: req.body.email,
      password: req.body.password,
      role: req.body.role,
    }).exec();
    if (user) {
      const token = jwt.sign(
        {
          email: user.email,
          _id: user._id,
        },
        "secret123"
      );
      return res.json({ status: "ok", user: token, role: user.role });
    } else {
      return res.json({ status: "error", user: false });
    }
    // res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.post("/api/userData", middleware, async (req, res) => {
  try {
    const useremail = req.user.email;
    const data = await User.findOne({ email: useremail });
    res.send({ status: "ok", data: data });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "userData error" });
  }
});
app.post("/api/studentData", middleware, async (req, res) => {
  try {
    const useremail = req.user.email;
    Student.findOne({ email: useremail }).exec()
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (error) {
    console.log(error);
    res.json({ status: "error", error: "userData error" });
  }
});
app.post("/api/order", async (req, res) => {
  try {
    await Order.create({
      subject: req.body.subject,
      user: req.body.user,
      price: req.body.price,
      teacher: req.body.teacher,
      sdate: req.body.sdate,
      edate: req.body.edate,
      dateCreated: req.body.dateCreated,
      userEmail: req.body.userEmail,
      userName: req.body.userName,
      userPnum1: req.body.userPnum1,
      userPnum2: req.body.userPnum2,
      link: req.body.link,
      datatable: req.body.datatable,
    });
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});

app.get("/api/order", async (req, res) => {
  try {
    const orders = await Order.find({}).exec();
    res.send(orders);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error retrieving orders");
  }
});

app.delete("/api/order/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    await Order.findByIdAndDelete(userId).exec();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete category.' });
  }
})
app.put("/api/order/:id", async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      { link: req.body.link },
      { new: true }
    ).exec();

    if (!updatedOrder) {
      return res.status(404).json({ message: 'Timetable not found' });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/orderwindowData/:id", async (req, res) => {
  try {
    const updatedTimetable = await Timetable.findByIdAndUpdate(
      req.params.id,
      { isOrdered: req.body.isOrdered },
      { new: true }
    ).exec();

    if (!updatedTimetable) {
      return res.status(404).json({ message: 'Timetable not found' });
    }

    res.status(200).json(updatedTimetable);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.post("/api/categoryData", async (req, res) => {
  try {
    await Category.create({
      title: req.body.title,
      description: req.body.description,
    }).exec();
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/categoryData", async (req, res) => {
  Category.find({ id: req.params.id }, function (err, obj) {
    res.send(obj);
  }).exec();
});
app.delete("/api/categoryDataDelete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    await Category.findByIdAndDelete(userId).exec();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete category.' });
  }
})

app.post("/api/timetableData", async (req, res) => {
  try {
    await Timetable.create({
      sdate: req.body.sdate,
      edate: req.body.edate,
      teacher: req.body.teacher,
      isOrdered: req.body.isOrdered,
    }).exec();
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/timetableData", async (req, res) => {
  try {
    const timetableData = await Timetable.find({ id: req.params.id }).exec();
    return res.send(timetableData);
  } catch (err) {
    console.error(err);
    return res.status(500).send("Error retrieving timetable data");
  }
});
app.delete("/api/timetableDataDelete/:id", async (req, res) => {
  const dataId = req.params.id;
  try {
    await Timetable.findOneAndDelete(dataId).exec();
    res.json({ status: "deleted successfully" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Failed to delete data.' });
  }
})


// app.post("/api/timetableDataByTeacher", (req, res) => {
//   console.log(req.body);
//   Timetable.find({ teacher: req.body.teacher }, function (err, users) {
//     var userMap = [];

//     users.forEach(function (user, i) {
//       userMap.push(user);
//     });

//     res.send(userMap);
//   });
// });

app.post("/api/subjectData", async (req, res) => {
  try {
    await Subject.create({
      title: req.body.title,
      description: req.body.description,
      range: req.body.range,
      category: req.body.category,
    }).exec();
    res.json({ status: "ok" });
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/subjectData", async (req, res) => {
  try {
    const subjects = await Subject.find({ id: req.params.id }).exec();
    res.send(subjects);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

app.delete("/api/subjectDataDelete/:id", async (req, res) => {
  const userId = req.params.id;
  try {
    await Subject.findByIdAndDelete(userId).exec();
    res.status(204).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to delete category.' });
  }
})

app.put('/api/userData/:id', async (req, res) => {
  try {
    const user = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
app.put('/api/teacherData/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// app.put("/api/userData", middleware, async (req, res) => {
//   try {
//     const _id = req.user._id;
//     console.log(req.user._id, req.body)
//     User.findByIdAndUpdate(_id, req.body, { new: true })
//     res.json({ success: true, data: req.body });
//   } catch (error) {
//     console.log(error);
//     res.json({ status: "error", error: "userData error" });
//   }
// });
// app.put("/api/updateStudent", middleware, async (req, res) => {
//   try {
//     const _id = req.user._id;
//     console.log(req.body)
//     Student.findByIdAndUpdate(_id, req.body);
//     res.json({ success: true, data: req.body });
//   } catch (error) {
//     console.log(error);
//     res.json({ status: "error", error: "userData error" });
//   }
// });

// app.get("/api/teacherListBySubjects", function (req, res) {

//   // var dbsubjects = [];
//   // Subject.find({ title: "Монгол хэл" }).then((data) => {
//   //   res.send({ status: "ok", data: data });
//   //   data.map((d, k) => {
//   //     dbsubjects.push(d._id);

//   //   })
//   //   console.log(dbsubjects)
//   // })
//   //   .catch((error) => {
//   //     res.send({ status: "error", data: error });
//   //   });

//   // User.find({ subject: "Монгол хэл" }, function (err, users) {
//   //   var userMap = [];

//   //   users.forEach(function (user, i) {
//   //     userMap.push(user);
//   //   });

//   //   res.send(userMap);
//   // });
// });
app.get("/api/teacherList", function (req, res) {
  User.find({ role: "teacher" })
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ message: "Server error" });
    });
});


app.get("/api/studentList", function (req, res) {
  Student.find({}, function (err, users) {
    var userMap = [];

    users.forEach(function (user) {
      if (user.role === "student") {
        userMap.push(user);
      }
    });

    res.send(userMap);
  }).exec();
});

app.post("/api/teacherListBySubjects", async (req, res) => {
  console.log(req.body);
  try {
    const users = await User.find({ subject: req.body.subject }).exec();
    const userMap = users.map(user => user.toObject());
    res.send(userMap);
  } catch (err) {
    console.error(err);
    res.status(500).send({ error: "Error occurred while fetching users" });
  }
});


app.get("/api/allUsers", async (req, res) => {
  User.find({ id: req.params.id }, function (err, obj) {
    res.send(obj);
  }).exec();
});

const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
