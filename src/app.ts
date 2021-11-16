import express from "express";
import cors from "cors";
import { createServer } from "http";
import { config as Enviroment } from "dotenv";
import morgan from "morgan";

Enviroment();

import routes from "./routes";
const app = express();
app.use(express.json());

if (process.env.NODE_ENV == "development") {
  app.use(morgan("dev"));
}

app.use(cors());
app.use(routes);

const http = createServer(app); // Criando o protocolo HTTP

export { http };
