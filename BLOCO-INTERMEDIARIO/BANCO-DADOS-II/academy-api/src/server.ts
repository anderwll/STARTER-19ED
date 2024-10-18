import "dotenv/config";
import express from "express";
import cors from "cors";

import { CreateStudentMiddleware } from "./middlewares/create-student.middleware";
import { StudentController } from "./controllers/student.controller";
import { StudentRoutes } from "./routes/student.routes";

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

// app.VERBO ( "rota", MIDDLEWARES[] ,CONTROLLER )
// ROTAS
app.use(StudentRoutes.execute());
// app.use(AssessmentsRoutes.execute());

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
