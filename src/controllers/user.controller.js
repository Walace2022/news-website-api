const UserService = require("../services/user.service");

const create = async (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({
      message: "Todos campos devem ser preenchidos para o cadastro.",
    });
  }

  const user = await UserService.create(req.body);

  if (!user) {
    return res.status(400).send({ message: "Erro ao criar o usuario." });
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

module.exports = { create };
