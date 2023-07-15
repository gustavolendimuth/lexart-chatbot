"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const loginService_1 = require("../services/loginService");
async function loginController(req, res) {
    const response = await (0, loginService_1.loginService)(req.body);
    return res.status(200).json(response);
}
exports.loginController = loginController;
//# sourceMappingURL=loginController.js.map