const UserService = require("../services/user.service");
const mongoose = require("mongoose");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({
      message: "Todos campos devem ser preenchidos para o cadastro.",
    });
  }

  const user = await UserService.createService(req.body);

  if (!user) {
    res.status(400).send({ message: "Erro ao criar o usuario." });
  }

  res.status(201).send({
    message: "Usuario cadastrado com sucesso.",
    user: {
      id: user._id,
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

const findAll = async (req, res) => {
  const users = await UserService.findAllService();

  if (users.length === 0) {
    return res.status(400).send({ message: "Nenhum usuario encontrado." });
  }

  res.send(users);
};

const findById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id invalido." });
  }

  const user = await UserService.findByIdService(id);

  if (!user) {
    return res.status(400).send("Usuario não encontrado");
  }

  res.send(user);
};

module.exports = { create, findAll, findById };
