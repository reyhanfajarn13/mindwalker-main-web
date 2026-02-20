import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import { env } from "./config/env.js";
import { healthRouter } from "./modules/health/health.route.js";
import { newsRouter } from "./modules/news/news.route.js";
import { productRouter } from "./modules/product/product.route.js";
import { notFoundMiddleware } from "./middlewares/not-found.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

export const app = express();

app.use(helmet());
app.use(cors({ origin: env.CORS_ORIGIN }));
app.use(express.json({ limit: "1mb" }));
app.use(morgan(env.NODE_ENV === "production" ? "combined" : "dev"));

app.get("/", (_req, res) => {
  res.status(200).json({ success: true, message: "Mindwalker API" });
});

app.use("/api", healthRouter);
app.use("/api/news", newsRouter);
app.use("/api/products", productRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);
