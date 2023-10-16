const mongoose = require("mongoose");

const connectDatabase = () => {
  console.log("Esperando conectar com o Banco de dados.");

  mongoose
    .connect(
      "mongodb+srv://BrazLibrary:KmqbfCN0OBSm5M50@cluster0.50wburc.mongodb.net/?retryWrites=true&w=majority"
    )
    .then(console.log("Conectado ao Banco de dados com Sucesso."))
    .catch((error) => {
      console.log(error);
    });
};

module.exports = connectDatabase;
