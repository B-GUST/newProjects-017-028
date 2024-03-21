"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInterestsData = exports.updateInterestsData = exports.createInterestsData = exports.getInterestsByIdData = exports.getAllInterestsData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllInterestsData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const interests = node_1.default.Object.extend('interests');
        const query = new node_1.default.Query(interests);
        query.limit(5); // Limitar los resultados a 5 por página
        query.skip((page - 1) * 5); // Saltar los planes de comida de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No interests plans found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllInterestsData = getAllInterestsData;
async function getInterestsByIdData(objectId) {
    try {
        // Verificar si el ID es nulo o indefinido
        if (!objectId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'interests plan ID is missing.');
        }
        const interests = node_1.default.Object.extend('interests');
        const query = new node_1.default.Query(interests);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `interests plan with ID ${objectId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getInterestsByIdData = getInterestsByIdData;
async function createInterestsData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'Object data is missing.',
            };
        }
        const interests = node_1.default.Object.extend('interests');
        const data = new interests();
        // Establecer los datos del objeto
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                data.set(key, objectData[key]);
            }
        }
        await data.save();
        return data;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createInterestsData = createInterestsData;
async function updateInterestsData(objectId, objectData) {
    try {
        // Verificar si el ID y los datos del objeto existen
        if (!objectId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'interests plan ID or object data is missing.');
        }
        const interests = node_1.default.Object.extend('interests');
        const query = new node_1.default.Query(interests);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `interests plan with ID ${objectId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                data.set(key, objectData[key]);
            }
        }
        await data.save(null, { useMasterKey: true });
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateInterestsData = updateInterestsData;
async function deleteInterestsData(objectId) {
    try {
        // Verificar si el ID es nulo o indefinido
        if (!objectId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'interests plan ID is missing.');
        }
        const interests = node_1.default.Object.extend('interests');
        const query = new node_1.default.Query(interests);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `interests plan with ID ${objectId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteInterestsData = deleteInterestsData;
//# sourceMappingURL=interests.js.map