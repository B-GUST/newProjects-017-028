"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const seederControllers_1 = require("../controllers/seederControllers");
node_1.default.Cloud.define('createData', (0, seederControllers_1.createDataController)(node_1.default));
//# sourceMappingURL=seederClouds.js.map