"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = exports.accountController = void 0;
const express_1 = require("express");
const auth_1 = require("./auth");
exports.accountController = express_1.Router();
class Order {
}
exports.Order = Order;
let orders = [
    {
        date: "01-01-2019",
        status: "DELIVERED",
        total: 1500.00
    },
    {
        date: "15-02-2019",
        status: "SHIPPED",
        total: 990.00
    },
    {
        date: "23-10-2019",
        status: "RECEIVED",
        total: 2500.00
    },
];
exports.accountController.get("/order", (req, res) => {
    if (!auth_1.veriyToken(req)) {
        res.status(403).send();
    }
    else {
        res.send(orders);
    }
});
