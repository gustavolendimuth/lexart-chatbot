import { INTEGER, Model } from 'sequelize';
import db from '.';
import MessageModel from './MessageModel';
import UserModel from './UserModel';

class ChatModel extends Model {
  declare id: number;
  declare userId: number;
}

ChatModel.init(
  {
    id: {
      allowNull: false,
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    underscored: true,
    modelName: 'chats',
    sequelize: db,
    timestamps: true,
    freezeTableName: true,
  },
);

UserModel.hasMany(ChatModel, { foreignKey: 'userId', as: 'chats' });
ChatModel.belongsTo(UserModel, { foreignKey: 'userId' });
ChatModel.hasMany(MessageModel, { foreignKey: 'chatId', as: 'messages' });
MessageModel.belongsTo(ChatModel, { foreignKey: 'chatId' });

export default ChatModel;
