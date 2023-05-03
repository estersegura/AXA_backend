import { Sequelize } from "sequelize";
import * as dotenv from 'dotenv';

import { Policy } from "../models/policy.model";
import { Client } from "../models/client.model";

dotenv.config({path: `${__dirname}/../.env`});

const connection = new Sequelize(
    process.env.MYSQL_DB as string,
    process.env.MYSQL_UNAME as string,
    process.env.MYSQL_UPASS as string,
  {
    host: process.env.MYSQL_HOST,
    dialect: "mysql",
    port: Number(process.env.MYSQL_PORT)
  }
);

export const User = connection.define("User", Client);
export const Products = connection.define("Products", Policy);

User.hasMany(Products, {
  foreignKey: "fk_user_id",
});
export default connection;
