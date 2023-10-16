const express = require("express");
const app = express();

//Banco de dados
const connectDatabase = require("./src/database/db");

//Routes
const userRoute = require("./src/routes/user.route");

connectDatabase();
app.use(express.json());
app.use("/", userRoute);

app.listen(3000);
