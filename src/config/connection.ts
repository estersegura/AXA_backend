import { Sequelize } from "sequelize";

import { Policy } from "../models/policy.model";
import { Client } from "../models/client.model";

import environmentVariable from "../services/env.service";

const connection = new Sequelize(
    environmentVariable().MYSQL_DB as string,
    environmentVariable().MYSQL_UNAME as string,
    environmentVariable().MYSQL_UPASS as string,
  {
    host: environmentVariable().MYSQL_HOST,
    dialect: "mysql",
    port: Number(environmentVariable().MYSQL_PORT)
  }
);

export const User = connection.define("User", Client);
export const Products = connection.define("Products", Policy);

User.hasMany(Products, {
  foreignKey: "fk_user_id",
});
export default connection;
