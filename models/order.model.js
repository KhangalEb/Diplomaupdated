// subject: subject, user: user._id, price: datatable[0].price, teacher: datatable[0]._id, sdate: moment(dataOrder[0].sdate).format("YYYY-MM-DD HH:mm"), edate: moment(dataOrder[0].edate).format("YYYY-MM-DD HH:mm"), dateCreated: moment(), cardNo: form.cardNo, exDate: form.exDate, cvv: form.cvv, name: form.name,

const mongoose = require("mongoose");

const Order = new mongoose.Schema(
  {
    subject: { type: String, required: true },
    user: { type: String, required: true },
    userEmail: { type: String, required: true },
    userPnum1: { type: String },
    userName: { type: String },
    userPnum2: { type: String },
    price: { type: String, required: true },
    teacher: { type: String, required: true },
    sdate: { type: String, required: true },
    edate: { type: String, required: true },
    dateCreated: { type: String, required: true },
    link: { type: String },
    datatable: { type: String },
  },
  { collection: "order" }
);

const model = mongoose.model("Order", Order);
module.exports = model;