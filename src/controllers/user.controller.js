import UserService from "../services/user.service.js";
import mongoose from "mongoose";

const create = async (req, res) => {
  try {
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
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const users = await UserService.findAllService();

    if (users.length === 0) {
      return res.status(400).send({ message: "Nenhum usuario encontrado." });
    }

    res.send(users);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findById = async (req, res) => {
  try {
    const { user } = req;

    res.send(user);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { name, username, email, password, avatar, background } = req.body;

    if (!name && !username && !email && !password && !avatar && !background) {
      return res.status(400).send({
        message: "pelo menos um campo deve ser preenchidos para atualizar.",
      });
    }

    const { id } = req;

    await UserService.updateService(
      id,
      name,
      username,
      email,
      password,
      avatar,
      background
    );

    res.send({ message: "Usuario atualizado com sucesso." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { create, findAll, findById, update };
