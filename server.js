const express = require("express");
const dotenv = require("dotenv");

const app = express();

app.get("/", () => console.log("Success"));

app.listen(3000);
