// third party modules
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import logger from "morgan";

import "./lib/db";
// routes
import routes from "./routes/index";

// config
import AppConfig from "./config/app";
import path from "path";

// middlewares


class App {
  public app: express.Application;
  public mongoUrl: string = AppConfig.db.mongo_connection_string;
  public mongoOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  };

  constructor() {
    this.app = express();
    this.config();
    // Remove the line that adds errorHandlerMiddleware
    this.initializeErrorHandling();
    this.app.use("/" + AppConfig.app.api_version, routes);
    // Remove the line that adds errorMiddleware
    // this.app.use(errorMiddleware);
    this.app.use((req, res, next) => {
      return res.status(404).send();
    });
    this.handlingUnCaughtRejections();
  }

  private config(): void {
    this.app.use(express.static("public"));
    this.app.set("views", path.join(__dirname, "views"));
    this.app.set("view engine", "ejs");
    this.app.use(logger("dev"));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(bodyParser.json({ limit: "5mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
  }

  private initializeErrorHandling() {
    // Remove the line that adds errorHandlerMiddleware
    // this.app.use(errorHandlerMiddleware);
  }

  private handlingUnCaughtRejections() {
    process.on("unhandledRejection", function (err) {
      // Todo - add sentry log here
      console.log("unhandledRejection", err);
      process.exit(1);
    });

    process.on("uncaughtException", function (err) {
      // Todo - add sentry log here
      console.log("uncaughtException", err);
      process.exit(1);
    });
  }
}

export default new App().app;
