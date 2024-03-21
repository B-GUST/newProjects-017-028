"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const personControllers_1 = require("../controllers/personControllers");
node_1.default.Cloud.define('getAllPeople', (0, personControllers_1.getAllPersons)(node_1.default));
node_1.default.Cloud.define('getPersonById', (0, personControllers_1.getPersonById)(node_1.default));
node_1.default.Cloud.define('createPerson', (0, personControllers_1.createPerson)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('updatePerson', (0, personControllers_1.updatePerson)(node_1.default), { requireUser: true });
node_1.default.Cloud.define('deletePerson', (0, personControllers_1.deletePerson)(node_1.default), { requireUser: true });
//# sourceMappingURL=personClouds.js.map