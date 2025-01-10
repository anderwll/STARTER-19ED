import { Router } from "express";
import { AssessmentController } from "../controllers/assessment.controller";
import { CreateAssessmentMiddleware } from "../middlewares/assessments/create-assessment-middleware";
import { AuthMiddleware } from "../middlewares/auth/auth.middleware";
import { ValidateUuidMiddleware } from "../middlewares/validate-uuid.middleware";
import { UpdateAssessmentMiddleware } from "../middlewares/assessments/update-assessment.middleaware";
import { TypeMiddleware } from "../middlewares/type.middleware";
import { StudentType } from "@prisma/client";

export class AssessmentRoutes {
  public static execute(): Router {
    const router = Router();

    //CREATE - POST
    router.post(
      "/assessments",
      [
        AuthMiddleware.validate,
        TypeMiddleware.validate([StudentType.M, StudentType.T]),
        CreateAssessmentMiddleware.validateRequired,
        CreateAssessmentMiddleware.validateTypes,
        CreateAssessmentMiddleware.validateData,
      ],
      AssessmentController.create
    );

    router.get(
      "/assessments",
      AuthMiddleware.validate,
      TypeMiddleware.validate(),
      AssessmentController.findAll
    );

    router.get(
      "/assessments/:id",
      [AuthMiddleware.validate, ValidateUuidMiddleware.validate],
      AssessmentController.findOneById
    );

    router.put(
      "/assessments/:id",
      [
        AuthMiddleware.validate,
        TypeMiddleware.validate([StudentType.T]),
        ValidateUuidMiddleware.validate,
        UpdateAssessmentMiddleware.validateTypes,
        UpdateAssessmentMiddleware.validateData,
      ],
      AssessmentController.update
    );

    router.delete(
      "/assessments/:id",
      [
        AuthMiddleware.validate,
        TypeMiddleware.validate([StudentType.T]),
        ValidateUuidMiddleware.validate,
      ],
      AssessmentController.remove
    );

    return router;
  }
}
