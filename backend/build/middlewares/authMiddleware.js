"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwtUtils_1 = require("../utils/jwtUtils");
const HttpException_1 = __importDefault(require("../utils/HttpException"));
const authMiddleware = (req, _res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        throw new HttpException_1.default(401, 'Você precisa estar logado para acessar essa rota');
    }
    req.body.login = (0, jwtUtils_1.validateJwtToken)(authorization);
    next();
};
exports.default = authMiddleware;
//# sourceMappingURL=authMiddleware.js.map