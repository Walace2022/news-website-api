import express from "express";
//Banco de dados
import connectDatabase from "./src/database/db.js";
//Rotas
import userRoute from "./src/routes/user.route.js";
import authRoute from "./src/routes/auth.route.js";
import newsRoute from "./src/routes/news.route.js";

//Variaveis de ambiente
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();
app.use(express.json());
app.use("/user", userRoute);
app.use("/login", authRoute);
app.use("/news", newsRoute);

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
