import { Sequelize } from "sequelize";

const conn = new Sequelize({
  dialect: "sqlite",
  storage: "path/to/database.sqlite",
});

export default conn;
