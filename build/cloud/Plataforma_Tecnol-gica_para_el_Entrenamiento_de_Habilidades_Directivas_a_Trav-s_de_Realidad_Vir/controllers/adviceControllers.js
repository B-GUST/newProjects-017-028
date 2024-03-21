"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdvice = exports.updateAdvice = exports.createAdvice = exports.getAdviceById = exports.getAllAdvices = void 0;
const adviceService_1 = require("../services/adviceService");
function getAllAdvices(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const data = await (0, adviceService_1.getAllAdvicesService)(page);
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
exports.getAllAdvices = getAllAdvices;
function getAdviceById(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            const data = await (0, adviceService_1.getAdviceByIdService)(objectId);
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
exports.getAdviceById = getAdviceById;
function createAdvice(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const data = await (0, adviceService_1.createAdviceService)(objectData);
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
exports.createAdvice = createAdvice;
function updateAdvice(Parse) {
    return async (request) => {
        try {
            const { objectId, objectData } = request.params;
            const data = await (0, adviceService_1.updateAdviceService)(objectId, objectData);
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
exports.updateAdvice = updateAdvice;
function deleteAdvice(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            await (0, adviceService_1.deleteAdviceService)(objectId);
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
exports.deleteAdvice = deleteAdvice;
//# sourceMappingURL=adviceControllers.js.map