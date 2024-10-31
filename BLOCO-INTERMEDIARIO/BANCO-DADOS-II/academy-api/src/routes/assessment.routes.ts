import { Router } from "express";
import { AssessmentController } from "../controllers/assessment.controller";
import { CreateAssessmentMiddleware } from "../middlewares/assessments/create-assessment-middleware";
import { AuthMiddleware } from "../middlewares/auth/auth.middleware";
import { ValidateUuidMiddleware } from "../middlewares/validate-uuid.middleware";

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

    router.get(
      "/assessments",
      AuthMiddleware.validate,
      AssessmentController.findAll
    );

    router.get(
      "/assessments/:id",
      [AuthMiddleware.validate, ValidateUuidMiddleware.validate],
      AssessmentController.findOneById
    );

    return router;
  }
}
