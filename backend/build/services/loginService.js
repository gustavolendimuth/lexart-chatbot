"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginService = void 0;
/* eslint-disable import/prefer-default-export */
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
const HttpException_1 = __importDefault(require("../utils/HttpException"));
const jwtUtils_1 = require("../utils/jwtUtils");
async function loginService({ email, password }) {
    if (!email || !password) {
        throw new HttpException_1.default(400, 'All fields must be filled');
    }
    const user = await UserModel_1.default.findOne({ where: { email } });
    const userError = new HttpException_1.default(401, 'Incorrect email or password');
    if (!user) {
        throw userError;
    }
    const passwordMatch = await bcrypt_1.default.compare(password, user.password);
    if (!passwordMatch) {
        throw userError;
    }
    const token = (0, jwtUtils_1.createJwtToken)(user);
    return token;
}
exports.loginService = loginService;
//# sourceMappingURL=loginService.js.map