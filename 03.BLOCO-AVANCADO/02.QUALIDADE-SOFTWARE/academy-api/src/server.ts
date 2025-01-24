import "dotenv/config";
import { createServer } from "./express.server";

const port = process.env.PORT;

// Sempre importa do `express.server`que criamos
const app = createServer();

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}!`);
});
