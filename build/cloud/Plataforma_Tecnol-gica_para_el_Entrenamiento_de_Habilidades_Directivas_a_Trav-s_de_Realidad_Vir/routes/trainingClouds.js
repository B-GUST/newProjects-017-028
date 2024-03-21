"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const trainingControllers_1 = require("../controllers/trainingControllers");
node_1.default.Cloud.define('getAllTraining', (0, trainingControllers_1.getAllTraining)(node_1.default));
node_1.default.Cloud.define('getTrainingById', (0, trainingControllers_1.getTrainingById)(node_1.default));
node_1.default.Cloud.define('createTraining', (0, trainingControllers_1.createTraining)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('updateTraining', (0, trainingControllers_1.updateTraining)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deleteTraining', (0, trainingControllers_1.deleteTraining)(node_1.default), { requireUser: true });
//# sourceMappingURL=trainingClouds.js.map