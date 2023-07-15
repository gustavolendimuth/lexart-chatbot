"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController_1 = require("../controllers/loginController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const conversationsRoute_1 = __importDefault(require("./conversationsRoute"));
const loginRoute_1 = __importDefault(require("./loginRoute"));
const router = express_1.default.Router();
router.get('/', (_req, res) => res.send('Lexart Chatbot'));
router.use('/login', loginRoute_1.default);
router.use('/user', loginController_1.loginController);
router.use(authMiddleware_1.default);
router.use('/conversations', conversationsRoute_1.default);
exports.default = router;
//# sourceMappingURL=routes.js.map