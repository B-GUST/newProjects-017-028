"use strict";
/* eslint-disable no-console */
/* eslint-disable guard-for-in */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-inline-comments */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-throw-literal */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTableFromJSONData = exports.updateTableFromJSONData = exports.registerTableFromJSONData = exports.getTableFromJSONByIdData = exports.getAllTableFromJSONData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllTableFromJSONData(page, tableName) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Table = node_1.default.Object.extend(tableName);
        const query = new node_1.default.Query(Table);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta las tablas de las páginas anteriores
        const tables = await query.find();
        if (!tables || tables.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No ${tableName} found.`);
        }
        return tables;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllTableFromJSONData = getAllTableFromJSONData;
async function getTableFromJSONByIdData(tableFromJSONId, tableName) {
    try {
        // Verificar si tableFromJSONId es nulo o indefinido
        if (!tableFromJSONId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Table ID is missing.');
        }
        const Table = node_1.default.Object.extend(tableName);
        const query = new node_1.default.Query(Table);
        query.equalTo('objectId', tableFromJSONId);
        const table = await query.first();
        if (!table) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Table with ID ${tableFromJSONId} does not exist.`);
        }
        return table;
    }
    catch (error) {
        throw error;
    }
}
exports.getTableFromJSONByIdData = getTableFromJSONByIdData;
async function registerTableFromJSONData(tablename, data) {
    try {
        // Verificar si data existe
        if (!data) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'Data is missing.',
            };
        }
        const Table = node_1.default.Object.extend(tablename);
        const table = new Table();
        for (const key in data) {
            if (data.hasOwnProperty(key)) {
                table.set(key, data[key]);
            }
        }
        await table.save();
        return table;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.registerTableFromJSONData = registerTableFromJSONData;
async function updateTableFromJSONData(tableFromJSONId, data, tableName) {
    try {
        // Verificar si tableFromJSONId y data existen
        if (!tableFromJSONId || !data) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Table ID or data is missing.');
        }
        const Table = node_1.default.Object.extend(tableName);
        const query = new node_1.default.Query(Table);
        query.equalTo('objectId', tableFromJSONId);
        const table = await query.first();
        if (!table) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Table with ID ${tableFromJSONId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in data) {
            table.set(key, data[key]);
        }
        await table.save(null, { useMasterKey: true });
        return table;
    }
    catch (error) {
        throw error;
    }
}
exports.updateTableFromJSONData = updateTableFromJSONData;
async function deleteTableFromJSONData(tableFromJSONId, tableName) {
    try {
        // Verificar si tableFromJSONId es nulo o indefinido
        if (!tableFromJSONId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Table ID is missing.');
        }
        const Table = node_1.default.Object.extend(tableName);
        const query = new node_1.default.Query(Table);
        query.equalTo('objectId', tableFromJSONId);
        const table = await query.first();
        if (!table) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Table with ID ${tableFromJSONId} does not exist.`);
        }
        await table.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteTableFromJSONData = deleteTableFromJSONData;
//# sourceMappingURL=tableFromJSON.js.map