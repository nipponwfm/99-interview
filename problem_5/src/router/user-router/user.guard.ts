import { NextFunction, Request, Response } from "express";
import { body, param, validationResult } from "express-validator";

export function createRouterGuard() {
  return [
    body("fullName").isString().notEmpty(),
    body("sex").isBoolean(),
    body("phoneNumber").isString().optional(),
    body("address").isString().optional(),
  ];
}

export function getUsersRouterGuard() {
  return [
    body("fullName").isString().notEmpty().optional(),
    body("sex").isBoolean().optional(),
    body("phoneNumber").isString().optional(),
    body("address").isString().optional(),
  ];
}

export function putUserRouterGuard() {
  return [
    body("fullName").isString().notEmpty().optional(),
    body("sex").isBoolean().optional(),
    body("phoneNumber").isString().optional(),
    body("address").isString().optional(),
  ];
}

export function isValid(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}
