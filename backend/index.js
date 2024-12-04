const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//database connection
mongoose.connect("mongodb+srv://murugan2004:8Y6XI5cpZS0a7VWl@cluster0.pb5sele.mongodb.net/e-commerce")

//API C