const mongoose = require("mongoose");

const Student = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, required: true },
        fname: { type: String },
        lname: { type: String },
        pnum1: { type: String },
        pnum2: { type: String },
        province: { type: String },
        bag: { type: String },
        sum: { type: String },
        delgerengui: { type: String },
        gender: { type: String },
        year: { type: String },
        day: { type: String },
        month: { type: String },
    },
    { collection: "student-data" }
);

const model = mongoose.model("Student", Student);
module.exports = model;
