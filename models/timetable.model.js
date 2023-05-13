const mongoose = require("mongoose");

const Timetable = new mongoose.Schema(
  {
    sdate: { type: Date, required: true },
    edate: { type: Date, required: true },
    teacher: { type: String, required: true },
    isOrdered: { type: String, required: true },
  },
  { collection: "timetable" }
);

const model = mongoose.model("Timetable", Timetable);
// const model2 = mongoose.model("UserDetails", UserDetails);
module.exports = model;
// module.exports = model2;
