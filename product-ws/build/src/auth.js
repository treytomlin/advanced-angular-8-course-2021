"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.veriyToken = exports.User = exports.authController = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = require("jsonwebtoken");
exports.authController = express_1.Router();
class User {
}
exports.User = User;
let userList = {
    "daffy": {
        email: 'daffy@wb.com',
        name: 'Daffy Duck'
    },
    "sam": {
        email: 'sam@wb.com',
        name: 'Yosemite Sam'
    }
};
let secret = "happy-man";
exports.authController.post("/login", (req, res) => {
    let userId = req.body.userId;
    let user = userList[userId];
    if (user !== undefined) {
        let token = jsonwebtoken_1.sign(user, secret);
        res.send({ token: token });
    }
    else {
        res.status(403).send();
    }
});
function veriyToken(req) {
    let token = "" + req.headers['authorization'];
    if (!token) {
        return false;
    }
    let preamble = 'Bearer ';
    if (token.startsWith(preamble)) {
        // Remove Bearer from string
        token = token.slice(preamble.length, token.length);
        try {
            let user = jsonwebtoken_1.verify(token, secret);
            return true;
        }
        catch (e) {
        }
    }
    return false;
}
exports.veriyToken = veriyToken;
