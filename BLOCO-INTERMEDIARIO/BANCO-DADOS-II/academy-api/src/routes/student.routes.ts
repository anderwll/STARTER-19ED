import { Router } from "express";
import { CreateStudentMiddleware } from "../middlewares/create-student.middleware";
import { StudentController } from "../controllers/student.controller";
import { FindAllStudentMidlleware } from "../middlewares/find-all-student.middleware";
import { ValidateUuidMiddleware } from "../middlewares/validate-uuid.middleware";
import { UpdateStudentMiddleware } from "../middlewares/update-student.middleware";

export class StudentRoutes {
  public static execute(): Router {
    const router = Router(); // Roteador

    // CREATE - POST
    router.post(
      "/students",
      [
        CreateStudentMiddleware.validateRequired,
        CreateStudentMiddleware.validateTypes,
        CreateStudentMiddleware.validateData,
      ],
      StudentController.create
    );

    // FIND ALL - GET
    router.get(
      "/students",
      [FindAllStudentMidlleware.validateTypes],
      StudentController.findAll
    );

    // FIND ONE - GET
    router.get(
      "/students/:id",
      ValidateUuidMiddleware.validate,
      StudentController.findOneById
    );

    // UPDATE - PUT
    router.put(
      "/students/:id",
      [
        ValidateUuidMiddleware.validate,
        UpdateStudentMiddleware.validateTypes,
        UpdateStudentMiddleware.validateData,
      ],
      StudentController.update
    );

    return router;
  }
}

// StudentRoutes.execute()

// an
// 112
