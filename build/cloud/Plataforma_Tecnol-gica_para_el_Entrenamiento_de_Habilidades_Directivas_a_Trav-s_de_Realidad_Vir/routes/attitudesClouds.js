"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const attitudesControllers_1 = require("../controllers/attitudesControllers");
node_1.default.Cloud.define('getAllAttitudes', (0, attitudesControllers_1.getAllAttitudes)(node_1.default));
node_1.default.Cloud.define('getAttitudesById', (0, attitudesControllers_1.getAttitudesById)(node_1.default));
node_1.default.Cloud.define('createAttitudes', (0, attitudesControllers_1.createAttitudes)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('updateAttitudes', (0, attitudesControllers_1.updateAttitudes)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteAttitudes', (0, attitudesControllers_1.deleteAttitudes)(node_1.default), { requireUser: true });
//# sourceMappingURL=attitudesClouds.js.map