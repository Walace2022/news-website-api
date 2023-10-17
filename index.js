import express from "express";
const app = express();

//Banco de dados
import connectDatabase from "./src/database/db.js";

//Routes
import userRoute from "./src/routes/user.route.js";

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);

app.listen(3000);
