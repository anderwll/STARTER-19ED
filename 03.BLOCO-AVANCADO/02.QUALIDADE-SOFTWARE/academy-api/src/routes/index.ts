import { Express } from "express";
import { AuthRoutes } from "./auth.routes";
import { StudentRoutes } from "./student.routes";
import { AssessmentRoutes } from "./assessment.routes";

import swaggerUI from "swagger-ui-express";
import swaggerDoc from "../docs/swagger.json";

export const makeRoutes = (app: Express) => {
  app.get("/", (req, res) => {
    res.status(200).json({
      ok: true,
      message: "Api Academy",
    });
  });

  app.use("/docs", swaggerUI.serve);
  app.get("/docs", swaggerUI.setup(swaggerDoc));

  app.use(AuthRoutes.execute());
  app.use(StudentRoutes.execute());
  app.use(AssessmentRoutes.execute());
  // app.use(novoConjuntoDeRotas)
};
