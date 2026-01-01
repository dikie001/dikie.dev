import express from "express";
import { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { config } from "./config";
import routes from "./routes";
import { errorHandler } from "./middleware/errorHandler";
import morgan from "morgan";

const app: Express = express();

if (process.env.NODE_ENV === "production") {
  app.use(helmet());
  app.use(morgan("combined"));
} else {
  app.use(morgan("dev"));
}


// CORS configuration
app.use(
  cors({
    origin: config.corsOrigin,
    credentials: true,
  })
);

// Body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use("/api", routes);

// Error handling
app.use(errorHandler);



export default app;
