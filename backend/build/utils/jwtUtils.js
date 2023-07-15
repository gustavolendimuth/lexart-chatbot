"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateJwtToken = exports.createJwtToken = void 0;
require("dotenv/config");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function createJwtToken({ password, ...rest }) {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret)
        throw new Error('JWT_SECRET not found');
    const token = jsonwebtoken_1.default.sign({ rest }, jwtSecret, {
        expiresIn: '15d',
        algorithm: 'HS256',
    });
    return token;
}
exports.createJwtToken = createJwtToken;
function validateJwtToken(token) {
    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret)
        throw new Error('JWT_SECRET not found');
    const response = jsonwebtoken_1.default.verify(token, jwtSecret);
    return response;
}
exports.validateJwtToken = validateJwtToken;
//# sourceMappingURL=jwtUtils.js.map