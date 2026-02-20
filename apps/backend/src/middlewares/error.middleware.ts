import type { NextFunction, Request, Response } from "express";
import { HttpError } from "../utils/http-error.js";

export const errorMiddleware = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof HttpError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message
    });
  }

  const message = err instanceof Error ? err.message : "Internal server error";

  return res.status(500).json({
    success: false,
    message
  });
};
