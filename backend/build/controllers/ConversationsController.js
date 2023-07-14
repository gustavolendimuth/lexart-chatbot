"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversation = exports.getConversations = exports.createConversation = void 0;
const conversationService = __importStar(require("../services/ConversationService"));
const createConversation = async (req, res) => {
    const { body } = req;
    try {
        const conversation = await conversationService.createConversation(body);
        res.status(201).json(conversation);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.createConversation = createConversation;
const getConversations = async (req, res) => {
    const { userId } = req.params;
    try {
        const conversations = await conversationService.getConversations(Number(userId));
        res.status(200).json(conversations);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getConversations = getConversations;
const getConversation = async (req, res) => {
    const { id } = req.params;
    try {
        const conversation = await conversationService.getConversation(id);
        res.status(200).json(conversation);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getConversation = getConversation;
//# sourceMappingURL=ConversationsController.js.map