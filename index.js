const express = require("express");
const app = express();

//Routes
const userRoute = require("./src/routes/user.route");

app.use(express.json());
app.use("/", userRoute);

app.listen(3000);
