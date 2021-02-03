"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const catalog_1 = require("./src/catalog");
const payment_1 = require("./src/payment");
const auth_1 = require("./src/auth");
const account_1 = require("./src/account");
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use("/api/catalog", catalog_1.catalogController);
app.use("/api/payment", payment_1.paymentController);
app.use("/api/auth", auth_1.authController);
app.use("/api/account", account_1.accountController);
const port = 8080;
app.listen(port, () => console.log("Server started. Port:", port));
