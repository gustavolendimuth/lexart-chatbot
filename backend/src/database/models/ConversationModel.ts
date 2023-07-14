import { INTEGER, Model } from 'sequelize';
import db from '.';
import MessageModel from './MessageModel';
import UserModel from './UserModel';

class ConversationModel extends Model {
  declare id: number;
  declare userId: number;
  declare message: string;
}

ConversationModel.init(
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
    modelName: 'conversations',
    sequelize: db,
    timestamps: true,
    freezeTableName: true,
  },
);

UserModel.hasMany(ConversationModel, { foreignKey: 'userId', as: 'conversations' });
ConversationModel.belongsTo(UserModel, { foreignKey: 'userId' });
ConversationModel.hasMany(MessageModel, { foreignKey: 'conversationId', as: 'messages' });
MessageModel.belongsTo(ConversationModel, { foreignKey: 'conversationIdId' });

export default ConversationModel;
