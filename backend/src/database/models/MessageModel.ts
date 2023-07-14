import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';

class MessageModel extends Model {
  declare id: number;
  declare conversationId: number;
  declare message: string;
}

MessageModel.init(
  {
    id: {
      allowNull: false,
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    conversationId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'conversations',
        key: 'id',
      },
    },
    message: {
      type: STRING,
      allowNull: false,
    },
    role: {
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
