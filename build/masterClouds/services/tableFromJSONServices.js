"use strict";
/* eslint-disable no-console */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTableFromJSONService = exports.updateTableFromJSONService = exports.registerTableFromJSONService = exports.getTableFromJSONByIdService = exports.getAllTableFromJSONService = void 0;
const node_1 = __importDefault(require("parse/node"));
const tableFromJSON_1 = require("../database/tableFromJSON");
const accesControl_1 = require("../../cloud/Plataforma_Tecnol-gica_para_el_Entrenamiento_de_Habilidades_Directivas_a_Trav-s_de_Realidad_Vir/utils/accesControl");
async function getAllTableFromJSONService(page, tableName, sessionToken) {
    try {
        const permission = await (0, accesControl_1.checkUserRole)(sessionToken, ['superuser', 'admin', 'ia']);
        if (!permission) {
            throw new node_1.default.Error(node_1.default.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
        }
        const tables = await (0, tableFromJSON_1.getAllTableFromJSONData)(page, tableName);
        return tables;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllTableFromJSONService = getAllTableFromJSONService;
async function getTableFromJSONByIdService(tableFromJSONId, tableName, sessionToken) {
    try {
        const permission = await (0, accesControl_1.checkUserRole)(sessionToken, ['superuser', 'admin', 'ia']);
        if (!permission) {
            throw new node_1.default.Error(node_1.default.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
        }
        const table = await (0, tableFromJSON_1.getTableFromJSONByIdData)(tableFromJSONId, tableName);
        return table;
    }
    catch (error) {
        throw error;
    }
}
exports.getTableFromJSONByIdService = getTableFromJSONByIdService;
async function registerTableFromJSONService(tablename, data, sessionToken) {
    try {
        const permission = await (0, accesControl_1.checkUserRole)(sessionToken, ['superuser', 'admin', 'ia']);
        if (!permission) {
            throw new node_1.default.Error(node_1.default.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
        }
        const store = await (0, tableFromJSON_1.registerTableFromJSONData)(tablename, data);
        return store;
    }
    catch (error) {
        throw error;
    }
}
exports.registerTableFromJSONService = registerTableFromJSONService;
async function updateTableFromJSONService(tableFromJSONId, data, tableName, sessionToken) {
    try {
        const permission = await (0, accesControl_1.checkUserRole)(sessionToken, ['superuser', 'admin', 'ia']);
        if (!permission) {
            throw new node_1.default.Error(node_1.default.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
        }
        const table = await (0, tableFromJSON_1.updateTableFromJSONData)(tableFromJSONId, data, tableName);
        return table;
    }
    catch (error) {
        throw error;
    }
}
exports.updateTableFromJSONService = updateTableFromJSONService;
async function deleteTableFromJSONService(tableFromJSONId, tableName, sessionToken) {
    try {
        const permission = await (0, accesControl_1.checkUserRole)(sessionToken, ['superuser', 'admin', 'ia']);
        if (!permission) {
            throw new node_1.default.Error(node_1.default.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
        }
        await (0, tableFromJSON_1.deleteTableFromJSONData)(tableFromJSONId, tableName);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteTableFromJSONService = deleteTableFromJSONService;
//# sourceMappingURL=tableFromJSONServices.js.map