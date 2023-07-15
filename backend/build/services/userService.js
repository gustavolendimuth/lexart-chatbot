"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserService = void 0;
/* eslint-disable import/prefer-default-export */
const bcrypt_1 = __importDefault(require("bcrypt"));
const UserModel_1 = __importDefault(require("../database/models/UserModel"));
const HttpException_1 = __importDefault(require("../utils/HttpException"));
async function createUserService(createUserRequest) {
    const { email, password, ...rest } = createUserRequest;
    const saltOrRounds = 10;
    if (!email || !password) {
        throw new HttpException_1.default(400, 'Invalid email or password');
    }
    const userExists = await UserModel_1.default.findOne({
        where: { email },
    });
    if (userExists) {
        throw new HttpException_1.default(400, 'User already exists');
    }
    const hashedPassword = await bcrypt_1.default.hash(password, saltOrRounds);
    const user = UserModel_1.default.create({ email, password: hashedPassword, ...rest });
    return user;
}
exports.createUserService = createUserService;
//# sourceMappingURL=userService.js.map