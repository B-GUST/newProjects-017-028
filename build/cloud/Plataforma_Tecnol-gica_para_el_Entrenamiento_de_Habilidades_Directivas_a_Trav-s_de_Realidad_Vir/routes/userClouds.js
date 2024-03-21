"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const userControllers_1 = require("../controllers/userControllers");
node_1.default.Cloud.define('getAllUsers', (0, userControllers_1.getAllUsers)(node_1.default));
node_1.default.Cloud.define('getUserById', (0, userControllers_1.getUserById)(node_1.default));
node_1.default.Cloud.define('createUser', (0, userControllers_1.createUserNew)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteUser', (0, userControllers_1.deleteUser)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('updateUser', (0, userControllers_1.updateUser)(node_1.default), { requireUser: true });
//# sourceMappingURL=userClouds.js.map