"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
// const serverless = require("serverless-http");
const serverless_http_1 = __importDefault(require("serverless-http"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get("/", (req, res, next) => {
    return res.status(200).json({
        message: "Hello from root!",
    });
});
app.get("/hello", (req, res, next) => {
    return res.status(200).json({
        message: "Hello from path!",
    });
});
app.use((req, res, next) => {
    return res.status(404).json({
        error: "Not Found",
    });
});
exports.handler = (0, serverless_http_1.default)(app);
//# sourceMappingURL=handler.js.map