import type { Request, Response } from "express";
import { healthService } from "./health.service.js";
import { apiResponse } from "../../utils/api-response.js";

export const getHealth = (_req: Request, res: Response) => {
  return res.status(200).json(apiResponse(healthService.getHealth(), "Service healthy"));
};
