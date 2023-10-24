import { loginService, generateToken } from "../services/auth.service.js";
import bcrypt from "bcrypt";

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await loginService(email);
    if (!user) {
      return res
        .status(404)
        .send({ message: "Usuario ou Senha não encontrados." });
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      return res
        .status(404)
        .send({ message: "Usuario ou Senha não encontrados." });
    }

    const token = generateToken(user.id);

    res.send({ token });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

export { login };
