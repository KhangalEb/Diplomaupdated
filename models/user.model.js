const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    quote: { type: String },
    fname: { type: String },
    lname: { type: String },
    pnum1: { type: String },
    pnum2: { type: String },
    province: { type: String },
    bag: { type: String },
    sum: { type: String },
    delgerengui: { type: String },
    gender: { type: String },
    surguuli: { type: String },
    year: { type: String },
    day: { type: String },
    month: { type: String },
    angi: { type: String },
    tovchtaniltsuulga: { type: String },
    price: { type: Number },
    subject: { type: Object, required: true },
  },
  { collection: "user-data" }
);

const model = mongoose.model("User", User);
// const model2 = mongoose.model("UserDetails", UserDetails);
module.exports = model;
// module.exports = model2;
