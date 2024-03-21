"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubsidiesData = exports.updateSubsidiesData = exports.createSubsidiesData = exports.getSubsidiesByIdData = exports.getAllSubsidiesData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllSubsidiesData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Subsidies = node_1.default.Object.extend('subsidies');
        const query = new node_1.default.Query(Subsidies);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
        const subsidies = await query.find();
        if (!subsidies || subsidies.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No subsidies found.`);
        }
        return subsidies;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllSubsidiesData = getAllSubsidiesData;
async function getSubsidiesByIdData(subsidiesId) {
    try {
        // Verificar si subsidiesId es nulo o indefinido
        if (!subsidiesId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Subsidies ID is missing.');
        }
        const Subsidies = node_1.default.Object.extend('subsidies');
        const query = new node_1.default.Query(Subsidies);
        query.equalTo('objectId', subsidiesId);
        const subsidies = await query.first();
        if (!subsidies) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `subsidies with ID ${subsidiesId} does not exist.`);
        }
        return subsidies;
    }
    catch (error) {
        throw error;
    }
}
exports.getSubsidiesByIdData = getSubsidiesByIdData;
async function createSubsidiesData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const Subsidies = node_1.default.Object.extend('subsidies');
        const subsidies = new Subsidies();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                subsidies.set(key, objectData[key]);
            }
        }
        await subsidies.save();
        return subsidies;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createSubsidiesData = createSubsidiesData;
async function updateSubsidiesData(subsidiesId, objectData) {
    try {
        // Verificar si subsidiesId y objectData existen
        if (!subsidiesId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'subsidies ID or objectData is missing.');
        }
        const Subsidies = node_1.default.Object.extend('subsidies');
        const query = new node_1.default.Query(Subsidies);
        query.equalTo('objectId', subsidiesId);
        const subsidies = await query.first();
        if (!subsidies) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `subsidies with ID ${subsidiesId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            subsidies.set(key, objectData[key]);
        }
        await subsidies.save(null, { useMasterKey: true });
        return subsidies;
    }
    catch (error) {
        throw error;
    }
}
exports.updateSubsidiesData = updateSubsidiesData;
async function deleteSubsidiesData(subsidiesId) {
    try {
        // Verificar si subsidiesId es nulo o indefinido
        if (!subsidiesId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'subsidies ID is missing.');
        }
        const Subsidies = node_1.default.Object.extend('subsidies');
        const query = new node_1.default.Query(Subsidies);
        query.equalTo('objectId', subsidiesId);
        const subsidies = await query.first();
        if (!subsidies) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `subsidies with ID ${subsidiesId} does not exist.`);
        }
        await subsidies.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteSubsidiesData = deleteSubsidiesData;
//# sourceMappingURL=subsidies.js.map