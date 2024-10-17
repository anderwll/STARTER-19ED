import "dotenv/config";
import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    ok: true,
    message: "Api Academy",
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
