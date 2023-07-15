"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversation = exports.getConversations = exports.createConversation = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const ConversationModel_1 = __importDefault(require("../database/models/ConversationModel"));
const MessageModel_1 = __importDefault(require("../database/models/MessageModel"));
async function createConversation(body) {
    try {
        await ConversationModel_1.default.create({ ...body }, {
            include: [{ model: MessageModel_1.default, as: 'messages' }],
        });
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.createConversation = createConversation;
async function getConversations(userId) {
    try {
        const response = await ConversationModel_1.default.findAll({
            where: { userId },
        });
        return response;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.getConversations = getConversations;
async function getConversation({ id, userId }) {
    try {
        const response = await ConversationModel_1.default.findOne({
            where: { id, userId },
        });
        return response;
    }
    catch (error) {
        throw new Error(error.message);
    }
}
exports.getConversation = getConversation;
//# sourceMappingURL=conversationService.js.map