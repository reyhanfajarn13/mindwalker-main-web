import { productService } from "./product.service.js";
import { apiResponse } from "../../utils/api-response.js";
import { asyncHandler } from "../../utils/async-handler.js";

export const listProducts = asyncHandler(async (_req, res) => {
  const data = await productService.listProducts();
  return res.status(200).json(apiResponse(data));
});

export const getProductBySlug = asyncHandler(async (req, res) => {
  const data = await productService.getProductBySlug(req.params.slug);
  return res.status(200).json(apiResponse(data));
});
