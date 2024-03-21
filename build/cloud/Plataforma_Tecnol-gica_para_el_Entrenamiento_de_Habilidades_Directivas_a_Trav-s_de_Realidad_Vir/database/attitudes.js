"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttitudesData = exports.updateAttitudesData = exports.createAttitudesData = exports.getAttitudesByIdData = exports.getAllAttitudesData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllAttitudesData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const attitudes = node_1.default.Object.extend('attitudes');
        const query = new node_1.default.Query(attitudes);
        query.limit(5); // Limitar los resultados a 5 por página
        query.skip((page - 1) * 5); // Saltar los planes de comida de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No attitudes plans found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAttitudesData = getAllAttitudesData;
async function getAttitudesByIdData(objectId) {
    try {
        // Verificar si el ID es nulo o indefinido
        if (!objectId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Attitudes plan ID is missing.');
        }
        const attitudes = node_1.default.Object.extend('attitudes');
        const query = new node_1.default.Query(attitudes);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Attitudes plan with ID ${objectId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAttitudesByIdData = getAttitudesByIdData;
async function createAttitudesData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'Object data is missing.',
            };
        }
        const attitudes = node_1.default.Object.extend('attitudes');
        const data = new attitudes();
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
exports.createAttitudesData = createAttitudesData;
async function updateAttitudesData(objectId, objectData) {
    try {
        // Verificar si el ID y los datos del objeto existen
        if (!objectId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'attitudes plan ID or object data is missing.');
        }
        const attitudes = node_1.default.Object.extend('attitudes');
        const query = new node_1.default.Query(attitudes);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `attitudes plan with ID ${objectId} does not exist.`);
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
exports.updateAttitudesData = updateAttitudesData;
async function deleteAttitudesData(objectId) {
    try {
        // Verificar si el ID es nulo o indefinido
        if (!objectId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'attitudes plan ID is missing.');
        }
        const attitudes = node_1.default.Object.extend('blattitudesog');
        const query = new node_1.default.Query(attitudes);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `attitudes plan with ID ${objectId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAttitudesData = deleteAttitudesData;
//# sourceMappingURL=attitudes.js.map