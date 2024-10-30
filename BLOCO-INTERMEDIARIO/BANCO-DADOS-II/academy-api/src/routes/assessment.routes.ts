import { Router } from "express";
import { AssessmentController } from "../controllers/assessment.controller";
import { CreateAssessmentMiddleware } from "../middlewares/assessments/create-assessment-middleware";

export class AssessmentRoutes {
  public static execute(): Router {
    const router = Router();

    //CREATE - POST
    router.post(
      "/assessments",
      [
        CreateAssessmentMiddleware.validateRequired,
        CreateAssessmentMiddleware.validateTypes,
        CreateAssessmentMiddleware.validateData,
      ],
      AssessmentController.create
    );

    return router;
  }
}
