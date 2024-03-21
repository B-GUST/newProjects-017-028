"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePersonData = exports.updatePersonData = exports.createPersonData = exports.getPersonByIdData = exports.getAllPersonsData = void 0;
const node_1 = __importDefault(require("parse/node"));
async function getAllPersonsData(page) {
    try {
        // Verificar si la página es nula o indefinida
        if (page === null || page === undefined) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Page number is missing.');
        }
        const Person = node_1.default.Object.extend('person');
        const query = new node_1.default.Query(Person);
        query.limit(5); // Limita los resultados a 5 por página
        query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
        const person = await query.find();
        if (!person || person.length === 0) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `No persons found.`);
        }
        return person;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllPersonsData = getAllPersonsData;
async function getPersonByIdData(personId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!personId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Person ID is missing.');
        }
        const Person = node_1.default.Object.extend('person');
        const query = new node_1.default.Query(Person);
        query.equalTo('objectId', personId);
        const person = await query.first();
        if (!person) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Person with ID ${personId} does not exist.`);
        }
        return person;
    }
    catch (error) {
        throw error;
    }
}
exports.getPersonByIdData = getPersonByIdData;
async function createPersonData(objectData) {
    try {
        // Verificar si objectData existe
        if (!objectData) {
            throw {
                code: node_1.default.Error.OBJECT_NOT_FOUND,
                message: 'objectData is missing.',
            };
        }
        const Person = node_1.default.Object.extend('person');
        const person = new Person();
        for (const key in objectData) {
            if (objectData.hasOwnProperty(key)) {
                person.set(key, objectData[key]);
            }
        }
        await person.save();
        return person;
    }
    catch (error) {
        throw {
            code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
            message: error.message,
        };
    }
}
exports.createPersonData = createPersonData;
async function updatePersonData(personId, objectData) {
    try {
        // Verificar si personId y objectData existen
        if (!personId || !objectData) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Person ID or objectData is missing.');
        }
        const Person = node_1.default.Object.extend('person');
        const query = new node_1.default.Query(Person);
        query.equalTo('objectId', personId);
        const person = await query.first();
        if (!person) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Person with ID ${personId} does not exist.`);
        }
        // Actualizar los campos permitidos
        for (const key in objectData) {
            person.set(key, objectData[key]);
        }
        await person.save(null, { useMasterKey: true });
        return person;
    }
    catch (error) {
        throw error;
    }
}
exports.updatePersonData = updatePersonData;
async function deletePersonData(personId) {
    try {
        // Verificar si personId es nulo o indefinido
        if (!personId) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_QUERY, 'Person ID is missing.');
        }
        const Person = node_1.default.Object.extend('person');
        const query = new node_1.default.Query(Person);
        query.equalTo('objectId', personId);
        const person = await query.first();
        if (!person) {
            throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Person with ID ${personId} does not exist.`);
        }
        await person.destroy();
    }
    catch (error) {
        throw error;
    }
}
exports.deletePersonData = deletePersonData;
//# sourceMappingURL=person.js.map