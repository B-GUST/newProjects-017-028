"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttitudes = exports.updateAttitudes = exports.createAttitudes = exports.getAttitudesById = exports.getAllAttitudes = void 0;
const attitudesService_1 = require("../services/attitudesService");
function getAllAttitudes(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const data = await (0, attitudesService_1.getAllAttitudesService)(page);
            return {
                status: 'success',
                result: true,
                data,
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
exports.getAllAttitudes = getAllAttitudes;
function getAttitudesById(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            const data = await (0, attitudesService_1.getAttitudesByIdService)(objectId);
            return {
                status: 'success',
                result: true,
                data,
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
exports.getAttitudesById = getAttitudesById;
function createAttitudes(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const data = await (0, attitudesService_1.createAttitudesService)(objectData);
            return {
                status: 'success',
                result: true,
                data,
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
exports.createAttitudes = createAttitudes;
function updateAttitudes(Parse) {
    return async (request) => {
        try {
            const { objectId, objectData } = request.params;
            const data = await (0, attitudesService_1.updateAttitudesService)(objectId, objectData);
            return {
                status: 'success',
                result: true,
                data,
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
exports.updateAttitudes = updateAttitudes;
function deleteAttitudes(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            await (0, attitudesService_1.deleteAttitudesService)(objectId);
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
exports.deleteAttitudes = deleteAttitudes;
//# sourceMappingURL=attitudesControllers.js.map