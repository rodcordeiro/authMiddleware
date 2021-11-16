import { Sequelize } from 'sequelize';
import config from './config/config.json';
import { config as Enviroment } from 'dotenv';
Enviroment();

const conn = new Sequelize(config[process.env!.NODE_ENV]);

export default conn;
