"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const MessageModel_1 = __importDefault(require("./MessageModel"));
const UserModel_1 = __importDefault(require("./UserModel"));
class ConversationModel extends sequelize_1.Model {
}
ConversationModel.init({
    id: {
        allowNull: false,
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    userId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'id',
        },
    },
}, {
    underscored: true,
    modelName: 'conversations',
    sequelize: _1.default,
    timestamps: true,
    freezeTableName: true,
});
UserModel_1.default.hasMany(ConversationModel, { foreignKey: 'userId', as: 'conversations' });
ConversationModel.belongsTo(UserModel_1.default, { foreignKey: 'userId' });
ConversationModel.hasMany(MessageModel_1.default, { foreignKey: 'conversationId', as: 'messages' });
MessageModel_1.default.belongsTo(ConversationModel, { foreignKey: 'conversationIdId' });
exports.default = ConversationModel;
//# sourceMappingURL=ConversationModel.js.map