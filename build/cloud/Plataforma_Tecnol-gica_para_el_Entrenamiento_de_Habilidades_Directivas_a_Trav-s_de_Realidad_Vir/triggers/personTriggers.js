"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_1 = __importDefault(require("parse/node"));
const validatePerson_1 = require("../validators/validatePerson");
const authHelpers_1 = require("../utils/authHelpers");
node_1.default.Cloud.beforeSave('Person', async (request) => {
    try {
        // verificando si el usuario esta autenticado
        (0, authHelpers_1.requireAuthentication)(request);
        // Convertimos el objeto Parse a un objeto JavaScript
        const data = request.object.toJSON();
        // Si request.original es undefined, entonces el objeto es nuevo
        const isNew = !request.original;
        const error = await (0, validatePerson_1.validatePerson)(data, isNew);
        if (error) {
            const errorObject = JSON.stringify(error);
            throw new node_1.default.Error(node_1.default.Error.VALIDATION_ERROR, JSON.parse(errorObject));
        }
    }
    catch (error) {
        console.error('Error while saving the person:', error);
        throw error;
    }
});
//# sourceMappingURL=personTriggers.js.map