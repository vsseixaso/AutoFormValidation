const express = require("express");
const cors = require("cors");

const index = require("./routes/index");
const rulesRoute = require("./routes/rules");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", index);
app.use("/rules", rulesRoute);

module.exports = app;
