import { Router } from "express";
import { CreateStudentMiddleware } from "../middlewares/create-student.middleware";
import { StudentController } from "../controllers/student.controller";
import { FindAllStudentMidlleware } from "../middlewares/find-all-student.middleware";

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

    return router;
  }
}

// StudentRoutes.execute()

// an
// 112
