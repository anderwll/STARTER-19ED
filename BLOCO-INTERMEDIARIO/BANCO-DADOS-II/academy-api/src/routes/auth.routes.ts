import { Router } from "express";

export class AuthRoutes {
  public static execute(): Router {
    const router = Router();

    router.post("/login", (req, res) => {
      res.status(200).json("Login aushduashdusa");
    });

    return router;
  }
}
