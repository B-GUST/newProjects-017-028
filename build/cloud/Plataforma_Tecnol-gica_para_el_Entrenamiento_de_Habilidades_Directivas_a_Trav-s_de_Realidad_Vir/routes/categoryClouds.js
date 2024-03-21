"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const categoryControllers_1 = require("../controllers/categoryControllers");
node_1.default.Cloud.define('getAllCategory', (0, categoryControllers_1.getAllCategory)(node_1.default));
node_1.default.Cloud.define('getCategoryById', (0, categoryControllers_1.getCategoryById)(node_1.default));
node_1.default.Cloud.define('createCategory', (0, categoryControllers_1.createCategory)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('updateCategory', (0, categoryControllers_1.updateCategory)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteCategory', (0, categoryControllers_1.deleteCategory)(node_1.default), { requireUser: true });
//# sourceMappingURL=categoryClouds.js.map