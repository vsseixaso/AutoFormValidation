const express = require("express");
const cors = require("cors");

const index = require("./routes/index");
const metadataRoute = require("./routes/metadata");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", index);
app.use("/metadata", metadataRoute);

module.exports = app;
