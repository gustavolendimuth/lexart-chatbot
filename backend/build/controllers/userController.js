"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const userService_1 = require("../services/userService");
async function createUserController(req, res) {
    const user = await (0, userService_1.createUserService)(req.body);
    return res.status(201).json(user);
}
exports.createUserController = createUserController;
//# sourceMappingURL=userController.js.map