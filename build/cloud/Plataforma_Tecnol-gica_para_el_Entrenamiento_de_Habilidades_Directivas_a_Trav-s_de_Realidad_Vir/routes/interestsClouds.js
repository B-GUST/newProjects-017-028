"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const interestsControllers_1 = require("../controllers/interestsControllers");
node_1.default.Cloud.define('getAllInterests', (0, interestsControllers_1.getAllInterests)(node_1.default));
node_1.default.Cloud.define('getInterestsById', (0, interestsControllers_1.getInterestsById)(node_1.default));
node_1.default.Cloud.define('createInterests', (0, interestsControllers_1.createInterests)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('updateInterests', (0, interestsControllers_1.updateInterests)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteInterests', (0, interestsControllers_1.deleteInterests)(node_1.default), { requireUser: true });
//# sourceMappingURL=interestsClouds.js.map