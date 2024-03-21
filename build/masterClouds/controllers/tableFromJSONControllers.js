"use strict";
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTableFromJSON = exports.updateTableFromJSON = exports.registerTableFromJSON = exports.getTableFromJSONById = exports.getAllTableFromJSON = void 0;
const tableFromJSONServices_1 = require("../services/tableFromJSONServices");
function getAllTableFromJSON(Parse) {
    return async (request) => {
        try {
            const { page, tableName } = request.params;
            const sessionToken = request.headers['x-parse-session-token'];
            const store = await (0, tableFromJSONServices_1.getAllTableFromJSONService)(page, tableName, sessionToken);
            return {
                status: 'success',
                result: true,
                store,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.getAllTableFromJSON = getAllTableFromJSON;
function getTableFromJSONById(Parse) {
    return async (request) => {
        try {
            const { tableFromJSONId, tableName } = request.params;
            const sessionToken = request.headers['x-parse-session-token'];
            const store = await (0, tableFromJSONServices_1.getTableFromJSONByIdService)(tableFromJSONId, tableName, sessionToken);
            return {
                status: 'success',
                result: true,
                store,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.getTableFromJSONById = getTableFromJSONById;
function registerTableFromJSON(Parse) {
    return async (request) => {
        try {
            const { tableName, data } = request.params;
            const sessionToken = request.headers['x-parse-session-token'];
            const store = await (0, tableFromJSONServices_1.registerTableFromJSONService)(tableName, data, sessionToken);
            return {
                status: 'success',
                result: true,
                message: 'Table created successfully',
                store,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.registerTableFromJSON = registerTableFromJSON;
function updateTableFromJSON(Parse) {
    return async (request) => {
        try {
            const { tableFromJSONId, data, tableName } = request.params;
            const sessionToken = request.headers['x-parse-session-token'];
            const store = await (0, tableFromJSONServices_1.updateTableFromJSONService)(tableFromJSONId, data, tableName, sessionToken);
            return {
                status: 'success',
                result: true,
                store,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.updateTableFromJSON = updateTableFromJSON;
function deleteTableFromJSON(Parse) {
    return async (request) => {
        try {
            const { tableFromJSONId, tableName } = request.params;
            const sessionToken = request.headers['x-parse-session-token'];
            await (0, tableFromJSONServices_1.deleteTableFromJSONService)(tableFromJSONId, tableName, sessionToken);
            return {
                status: 'success',
                result: true,
            };
        }
        catch (error) {
            console.error(`Error code: ${error.code}, Error message: ${error.message}`);
            return {
                status: 'error',
                result: false,
                errorDetails: {
                    code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
                    message: error.message,
                },
            };
        }
    };
}
exports.deleteTableFromJSON = deleteTableFromJSON;
//# sourceMappingURL=tableFromJSONControllers.js.map