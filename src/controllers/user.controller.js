const create = (req, res) => {
  const { name, username, email, password, avatar, background } = req.body;

  if (!name || !username || !email || !password || !avatar || !background) {
    res.status(400).send({
      message: "Todos campos devem ser preenchidos para o cadastro.",
    });
  }
  res.status(201).send({
    message: "Usuario cadastrado com sucesso.",
    user: {
      name,
      username,
      email,
      avatar,
      background,
    },
  });
};

module.exports = { create };
