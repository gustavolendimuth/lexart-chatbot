"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conversationsController_1 = require("../controllers/conversationsController");
const conversationsRouter = express_1.default.Router();
conversationsRouter.post('/', conversationsController_1.createConversationController);
conversationsRouter.get('/', conversationsController_1.getConversationsController);
conversationsRouter.get('/:id', conversationsController_1.getConversationController);
exports.default = conversationsRouter;
//# sourceMappingURL=conversationsRoute.js.map