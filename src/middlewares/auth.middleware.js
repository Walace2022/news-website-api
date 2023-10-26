import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import userService from "../services/user.service.js";

dotenv.config();

export const authMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.sendStatus(401);
    }
    const parts = authorization.split(" ");

    if (parts.length !== 2) {
      return res.sendStatus(401);
    }

    const [schema, token] = parts;

    if (schema !== "Bearer") {
      return res.sendStatus(401);
    }

    jwt.verify(token, process.env.SECRET_JWT, async (error, decoded) => {
      if (error) {
        return res.status(401).send({ message: "Token Invalido." });
      }
      const user = await userService.findByIdService(decoded.id);

      if (!user) {
        return res.status(401).send({ message: "Token Invalido." });
      }
      req.userId = user._id;
      return next();
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};
