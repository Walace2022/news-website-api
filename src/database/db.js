import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Esperando conectar com o Banco de dados.");

  mongoose
    .connect(process.env.MONGODB_URI)
    .then(console.log("Conectado ao Banco de dados com Sucesso."))
    .catch((error) => {
      console.log(error);
    });
};

export default connectDatabase;
