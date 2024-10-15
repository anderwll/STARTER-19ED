import "dotenv/config";
import cors from "cors";
import express, { Request, Response } from "express";

// Criando o servidor com express
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rota padrão
app.get("/", (request: Request, response: Response) => {
  response.status(200).json({ mensagem: "Api Prisma 🚀" });
});

// Iniciar o servidor
app.listen(process.env.PORTA, () => {
  console.log("Servidor rodando na porta:", process.env.PORTA, "🚀");
});
