const mongoose = require("mongoose");

const Category = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
  },
  { collection: "categorys" }
);

const model = mongoose.model("Category", Category);
// const model2 = mongoose.model("UserDetails", UserDetails);
module.exports = model;
// module.exports = model2;
