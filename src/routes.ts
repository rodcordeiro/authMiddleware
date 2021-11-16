import { Router } from "express";
import { readFileSync } from "fs";
import { resolve } from "path";

const routes = Router();
const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "../package.json"), "utf8")
);

import Authenticate from "./controllers/auth";

const auth = new Authenticate();

routes.get("/", function (req, res) {
  return res.status(200).json({
    version: pkg.version,
  });
});

routes.post("/auth", auth.index);

export default routes;
