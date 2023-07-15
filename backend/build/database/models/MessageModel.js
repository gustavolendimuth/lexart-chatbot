"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class MessageModel extends sequelize_1.Model {
}
MessageModel.init({
    id: {
        allowNull: false,
        type: sequelize_1.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    conversationId: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        references: {
            model: 'conversations',
            key: 'id',
        },
    },
    message: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
    role: {
        type: sequelize_1.STRING,
        allowNull: false,
    },
}, {
    underscored: true,
    timestamps: false,
    modelName: 'messages',
    sequelize: _1.default,
    freezeTableName: true,
});
exports.default = MessageModel;
//# sourceMappingURL=MessageModel.js.map