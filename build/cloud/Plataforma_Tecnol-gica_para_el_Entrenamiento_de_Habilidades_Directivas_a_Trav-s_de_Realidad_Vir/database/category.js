"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryData = exports.updateCategoryData = exports.createCategoryData = exports.getCategoryByIdData = exports.getAllCategoryData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllCategoryData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const category = node_1.default.Object.extend('category');
        const query = new node_1.default.Query(category);
        query.limit(5); // Limitar los resultados a 5 por página
        query.skip((page - 1) * 5); // Saltar los planes de comida de las páginas anteriores
        const data = await query.find();
        if (!data || data.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No category plans found.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllCategoryData = getAllCategoryData;
async function getCategoryByIdData(objectId) {
    try {
        // Verificar si el ID es nulo o indefinido
        if (!objectId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'category plan ID is missing.');
        }
        const category = node_1.default.Object.extend('category');
        const query = new node_1.default.Query(category);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `category plan with ID ${objectId} does not exist.`);
        }
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getCategoryByIdData = getCategoryByIdData;
async function createCategoryData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'Object data is missing.',
            };
        }
        const category = node_1.default.Object.extend('category');
        const data = new category();
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
exports.createCategoryData = createCategoryData;
async function updateCategoryData(objectId, objectData) {
    try {
        // Verificar si el ID y los datos del objeto existen
        if (!objectId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'category plan ID or object data is missing.');
        }
        const category = node_1.default.Object.extend('category');
        const query = new node_1.default.Query(category);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `category plan with ID ${objectId} does not exist.`);
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
exports.updateCategoryData = updateCategoryData;
async function deleteCategoryData(objectId) {
    try {
        // Verificar si el ID es nulo o indefinido
        if (!objectId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'category plan ID is missing.');
        }
        const category = node_1.default.Object.extend('category');
        const query = new node_1.default.Query(category);
        query.equalTo('objectId', objectId);
        const data = await query.first();
        if (!data) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `category plan with ID ${objectId} does not exist.`);
        }
        await data.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deleteCategoryData = deleteCategoryData;
//# sourceMappingURL=category.js.map