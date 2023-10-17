import express from "express";
//Banco de dados
import connectDatabase from "./src/database/db.js";
//Routes
import userRoute from "./src/routes/user.route.js";

import dotenv from "dotenv";
const app = express();
const port = process.env.PORT || 3000;
dotenv.config();

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(port);
