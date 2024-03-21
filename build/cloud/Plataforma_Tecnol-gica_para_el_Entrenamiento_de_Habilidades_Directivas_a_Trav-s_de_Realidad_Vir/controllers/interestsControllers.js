"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInterests = exports.updateInterests = exports.createInterests = exports.getInterestsById = exports.getAllInterests = void 0;
const interestsService_1 = require("../services/interestsService");
function getAllInterests(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const data = await (0, interestsService_1.getAllInterestsService)(page);
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
exports.getAllInterests = getAllInterests;
function getInterestsById(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            const data = await (0, interestsService_1.getInterestsByIdService)(objectId);
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
exports.getInterestsById = getInterestsById;
function createInterests(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const data = await (0, interestsService_1.createInterestsService)(objectData);
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
exports.createInterests = createInterests;
function updateInterests(Parse) {
    return async (request) => {
        try {
            const { objectId, objectData } = request.params;
            const data = await (0, interestsService_1.updateInterestsService)(objectId, objectData);
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
exports.updateInterests = updateInterests;
function deleteInterests(Parse) {
    return async (request) => {
        try {
            const { objectId } = request.params;
            await (0, interestsService_1.deleteInterestsService)(objectId);
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
exports.deleteInterests = deleteInterests;
//# sourceMappingURL=interestsControllers.js.map