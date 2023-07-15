import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class UserModel extends Model {
  declare id: number;
  declare email: string;
  declare name: string;
  declare password: string;
  declare role: string;
}

UserModel.init(
  {
    id: {
      allowNull: false,
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: STRING,
      allowNull: true,
    },
    email: {
      type: STRING,
      allowNull: false,
    },
    password: {
      type: STRING,
      allowNull: false,
    },
    role: {
      type: STRING,
      allowNull: false,
      defaultValue: 'user',
    },
  },
  {
    underscored: true,
    timestamps: false,
    modelName: 'users',
    sequelize: db,
    freezeTableName: true,
  },
);

export default UserModel;
