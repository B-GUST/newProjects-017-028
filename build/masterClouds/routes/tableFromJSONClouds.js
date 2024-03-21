"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const tableFromJSONControllers_1 = require("../controllers/tableFromJSONControllers");
node_1.default.Cloud.define('registerTableFromJSON', (0, tableFromJSONControllers_1.registerTableFromJSON)(node_1.default));
node_1.default.Cloud.define('getAllTableFromJSON', (0, tableFromJSONControllers_1.getAllTableFromJSON)(node_1.default));
node_1.default.Cloud.define('getTableFromJSONById', (0, tableFromJSONControllers_1.getTableFromJSONById)(node_1.default));
node_1.default.Cloud.define('updateTableFromJSON', (0, tableFromJSONControllers_1.updateTableFromJSON)(node_1.default));
node_1.default.Cloud.define('deleteTableFromJSON', (0, tableFromJSONControllers_1.deleteTableFromJSON)(node_1.default));
//# sourceMappingURL=tableFromJSONClouds.js.map