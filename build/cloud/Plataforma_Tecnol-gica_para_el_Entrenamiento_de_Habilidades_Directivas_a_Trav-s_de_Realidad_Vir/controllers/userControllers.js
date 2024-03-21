"use strict";
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUserNew = exports.getUserById = exports.getAllUsers = void 0;
const userService_1 = require("../services/userService");
function getAllUsers(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const users = await (0, userService_1.getAllUsersService)(page);
            return {
                status: 'success',
                result: true,
                users,
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
exports.getAllUsers = getAllUsers;
function getUserById(Parse) {
    return async (request) => {
        try {
            const { userId } = request.params;
            const user = await (0, userService_1.getUserService)(userId);
            return {
                status: 'success',
                result: true,
                user,
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
exports.getUserById = getUserById;
function createUserNew(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const user = await (0, userService_1.createUserService)(objectData);
            return {
                status: 'success',
                result: true,
                user,
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
exports.createUserNew = createUserNew;
function updateUser(Parse) {
    return async (request) => {
        try {
            const { userId, objectData } = request.params;
            const user = await (0, userService_1.updateUserService)(userId, objectData);
            return {
                status: 'success',
                result: true,
                user,
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
exports.updateUser = updateUser;
function deleteUser(Parse) {
    return async (request) => {
        console.log(request);
        try {
            const { userId } = request.params;
            const sessionToken = request.headers['x-parse-session-token'];
            await (0, userService_1.deleteUserService)(userId, sessionToken);
            return {
                status: 'success',
                result: true,
                message: 'User deleted successfully',
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
exports.deleteUser = deleteUser;
//# sourceMappingURL=userControllers.js.map