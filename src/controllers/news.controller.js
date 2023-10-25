import { createService, findAllService } from "../services/news.service.js";

const create = async (req, res) => {
  try {
    const { title, text, banner } = req.body;
    if (!title || !text || !banner) {
      return res.status(400).send({
        message: "Preencha todos os campos para publicação da noticia.",
      });
    }

    await createService({
      title,
      text,
      banner,
      user: { _id: "652e1c1016b81295e789a722" },
    });
    res.send({ message: "Criado com sucesso." });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAll = async (req, res) => {
  try {
    const news = await findAllService();
    if (news.length === 0) {
      return res
        .status(404)
        .send({ message: "Nenhuma noticia publicada no momento." });
    }
    res.send(news);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export { create, findAll };
