import { newsService } from "./news.service.js";
import { apiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";

export const listNews = asyncHandler(async (_req, res) => {
  const data = await newsService.listNews();
  return res.status(200).json(apiResponse(data));
});

export const getNewsById = asyncHandler(async (req, res) => {
  const data = await newsService.getNewsById(req.params.id);
  return res.status(200).json(apiResponse(data));
});
