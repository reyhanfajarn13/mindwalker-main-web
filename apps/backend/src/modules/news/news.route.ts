import { Router } from "express";
import { getNewsById, listNews } from "./news.controller.js";

export const newsRouter = Router();

newsRouter.get("/", listNews);
newsRouter.get("/:id", getNewsById);
