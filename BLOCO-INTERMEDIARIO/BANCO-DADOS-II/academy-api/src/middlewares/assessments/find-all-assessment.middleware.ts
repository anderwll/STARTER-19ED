import { NextFunction, Request, Response } from "express";

export class FindAllAssessmentMiddleware {
    public static validateTypes(req: Request, res: Response, next: NextFunction): void {
        const { } = req.body

        next()
    }
}