import { DataTypes, Model, ModelAttributes } from "sequelize";

export const Policy: ModelAttributes<Model<any, any>> = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
  },
  amountInsured: {
    type: DataTypes.DOUBLE,
  },
  email: {
    type: DataTypes.STRING,
  },
  inceptionDate: {
    type: DataTypes.DATE,
  },
  installmentPayment: {
    type: DataTypes.BOOLEAN,
  },
  clientId: {
    type: DataTypes.UUID,
  }
};
