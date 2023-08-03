import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class MessageModel extends Model {
  declare id: number;
  declare chatId: number;
  declare content: string;
  declare sender: string;
}

MessageModel.init(
  {
    id: {
      allowNull: false,
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    chatId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'chat',
        key: 'id',
      },
    },
    content: {
      type: STRING,
      allowNull: false,
    },
    sender: {
      type: STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
    timestamps: false,
    modelName: 'messages',
    sequelize: db,
    freezeTableName: true,
  },
);

export default MessageModel;
