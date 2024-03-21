"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const subsidiesControllers_1 = require("../controllers/subsidiesControllers");
node_1.default.Cloud.define('getAllSubsidies', (0, subsidiesControllers_1.getAllSubsidies)(node_1.default));
node_1.default.Cloud.define('getSubsidiesById', (0, subsidiesControllers_1.getSubsidiesById)(node_1.default));
node_1.default.Cloud.define('createSubsidies', (0, subsidiesControllers_1.createSubsidies)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('updateSubsidies', (0, subsidiesControllers_1.updateSubsidies)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteSubsidies', (0, subsidiesControllers_1.deleteSubsidies)(node_1.default), { requireUser: true });
//# sourceMappingURL=subsidiesClouds.js.map