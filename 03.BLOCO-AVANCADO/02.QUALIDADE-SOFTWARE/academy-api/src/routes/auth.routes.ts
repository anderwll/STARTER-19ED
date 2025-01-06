import { Router } from "express";
import { LoginMiddleware } from "../middlewares/auth/login.middleware";
import { AuthController } from "../controllers/auth.controller";

export class AuthRoutes {
  public static execute(): Router {
    const router = Router();

    router.post(
      "/login",
      [LoginMiddleware.validateRequired, LoginMiddleware.validateTypes],
      AuthController.login
    );

    return router;
  }
}
