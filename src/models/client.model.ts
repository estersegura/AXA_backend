import { DataTypes, Model, ModelAttributes } from "sequelize";

export const Client: ModelAttributes<Model<any, any>> = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  rol: {
    type: DataTypes.STRING,
  }
};
