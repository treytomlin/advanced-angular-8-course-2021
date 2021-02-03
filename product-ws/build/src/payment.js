"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentController = void 0;
const express_1 = require("express");
exports.paymentController = express_1.Router();
exports.paymentController.post("/validate", (req, res) => {
    let ccNumber = req.body.ccNumber;
    res.send({ valid: luhn_check(ccNumber) });
});
exports.paymentController.post("/", (req, res) => {
    setTimeout(_ => res.send({ success: true }), 5000);
});
function luhn_check(ccNumber) {
    let sum = 0;
    let alternate = false;
    for (let i = ccNumber.length - 1; i >= 0; i--) {
        let n = parseInt(ccNumber.substring(i, i + 1));
        if (alternate) {
            n *= 2;
            if (n > 9) {
                n = (n % 10) + 1;
            }
        }
        sum += n;
        alternate = !alternate;
    }
    return (sum % 10 == 0);
}
