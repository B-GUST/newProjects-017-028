"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifySignature = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const web3_1 = __importDefault(require("web3"));
const verifySignature = (req, secret) => {
    const providedSignature = req.headers['x-signature'];
    if (!providedSignature) {
        throw new Error('Signature not provided');
    }
    const generatedSignature = web3_1.default.utils.sha3(JSON.stringify(req.body) + secret);
    if (generatedSignature !== providedSignature) {
        throw new Error('Invalid Signature');
    }
};
exports.verifySignature = verifySignature;
//# sourceMappingURL=verifySignature.js.map