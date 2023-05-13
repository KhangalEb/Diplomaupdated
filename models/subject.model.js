const mongoose = require("mongoose");

const Subject = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    range: { type: String, required: true },
    category: { type: String, required: true },
  },
  { collection: "subjects" }
);

const model = mongoose.model("Subject", Subject);
// const model2 = mongoose.model("UserDetails", UserDetails);
module.exports = model;
// module.exports = model2;
