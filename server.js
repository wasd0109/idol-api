const express = require("express");
const dotenv = require("dotenv");
const { handleGetGroups } = require("./controllers/groups");

const app = express();

app.get("/", () => console.log("Success"));

app.get("/groups", handleGetGroups);

app.listen(3000);
