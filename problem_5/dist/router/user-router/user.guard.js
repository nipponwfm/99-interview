"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValid = exports.putUserRouterGuard = exports.getUsersRouterGuard = exports.createRouterGuard = void 0;
const express_validator_1 = require("express-validator");
function createRouterGuard() {
    return [
        (0, express_validator_1.body)("fullName").isString().notEmpty(),
        (0, express_validator_1.body)("sex").isBoolean(),
        (0, express_validator_1.body)("phoneNumber").isString().optional(),
        (0, express_validator_1.body)("address").isString().optional(),
    ];
}
exports.createRouterGuard = createRouterGuard;
function getUsersRouterGuard() {
    return [
        (0, express_validator_1.body)("fullName").isString().notEmpty().optional(),
        (0, express_validator_1.body)("sex").isBoolean().optional(),
        (0, express_validator_1.body)("phoneNumber").isString().optional(),
        (0, express_validator_1.body)("address").isString().optional(),
    ];
}
exports.getUsersRouterGuard = getUsersRouterGuard;
function putUserRouterGuard() {
    return [
        (0, express_validator_1.body)("fullName").isString().notEmpty().optional(),
        (0, express_validator_1.body)("sex").isBoolean().optional(),
        (0, express_validator_1.body)("phoneNumber").isString().optional(),
        (0, express_validator_1.body)("address").isString().optional(),
    ];
}
exports.putUserRouterGuard = putUserRouterGuard;
function isValid(req, res, next) {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}
exports.isValid = isValid;
