"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable complexity */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserData = exports.updateUserData = exports.createNewUserData = exports.getUserData = exports.getAllUsersData = void 0;
/* eslint-disable no-inline-comments */
/* eslint-disable no-useless-catch */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-console */
const node_1 = __importDefault(require("parse/node"));
async function getAllUsersData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const User = node_1.default.Object.extend('User');
        const query = new node_1.default.Query(User);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los usuarios de las páginas anteriores
        const users = await query.find();
        if (!users || users.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No users found.`);
        }
        return users;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllUsersData = getAllUsersData;
async function getUserData(userId) {
    try {
        // Verificar si userId es nulo o indefinido
        if (!userId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'User ID is missing.');
        }
        const User = node_1.default.Object.extend('User');
        const query = new node_1.default.Query(User);
        query.equalTo('objectId', userId);
        const user = await query.first();
        if (!user) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `User with ID ${userId} does not exist.`);
        }
        return user;
    }
    catch (error) {
        throw error;
    }
}
exports.getUserData = getUserData;
async function createNewUserData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, 'objectData is missing.');
        }
        const User = node_1.default.Object.extend('User');
        const user = new User();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                user.set(key, objectData[key]);
            }
        }
        await user.signUp();
        return user;
    }
    catch (error) {
        throw error;
    }
}
exports.createNewUserData = createNewUserData;
async function updateUserData(userId, objectData) {
    try {
        // Verificar si userId y objectData existen
        if (!userId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'User ID or objectData is missing.');
        }
        const User = node_1.default.Object.extend('User');
        const query = new node_1.default.Query(User);
        query.equalTo('objectId', userId);
        const user = await query.first();
        if (!user) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `User with ID ${userId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            if (key !== 'username' && key !== 'email' && key !== 'password') {
                if (Array.isArray(objectData[key])) {
                    // Si el campo es un array, fusionamos con el array existente
                    const existingArray = user.get(key) || [];
                    user.set(key, [...existingArray, ...objectData[key]]);
                }
                else if (typeof objectData[key] === 'object' && objectData[key] !== null) {
                    // Si el campo es un objeto, fusionamos con el objeto existente
                    const existingObject = user.get(key) || {};
                    if (key === 'user_demographics' && 'location' in objectData[key]) {
                        // Si estamos actualizando 'location', fusionamos con el objeto 'location' existente
                        const existingLocation = existingObject.location || {};
                        objectData[key].location = Object.assign(Object.assign({}, existingLocation), objectData[key].location);
                    }
                    user.set(key, Object.assign(Object.assign({}, existingObject), objectData[key]));
                }
                else {
                    // Si no es un objeto ni un array, establecemos el valor directamente
                    user.set(key, objectData[key]);
                }
            }
        }
        await user.save(null, { useMasterKey: true });
        return user;
    }
    catch (error) {
        throw error;
    }
}
exports.updateUserData = updateUserData;
async function deleteUserData(userId) {
    try {
        //? Verificar si userId es nulo o indefinido
        if (!userId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'User ID is missing.');
        }
        const User = node_1.default.Object.extend('User');
        const query = new node_1.default.Query(User);
        query.equalTo('objectId', userId);
        const user = await query.first();
        if (!user) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `User with ID ${userId} does not exist.`);
        }
        await user.destroy({ useMasterKey: true });
    }
    catch (error) {
        throw error;
    }
}
exports.deleteUserData = deleteUserData;
//# sourceMappingURL=users.js.map