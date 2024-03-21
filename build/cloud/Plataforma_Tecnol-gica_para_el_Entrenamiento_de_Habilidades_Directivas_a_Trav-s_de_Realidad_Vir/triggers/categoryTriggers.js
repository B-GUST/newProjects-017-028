"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
const node_1 = __importDefault(require("parse/node"));
const validateCategory_1 = require("../validators/validateCategory");
// import { requireAuthentication } from '../utils/authHelpers';
node_1.default.Cloud.beforeSave('category', async (request) => {
    try {
        // verificando si el usuario esta autenticado
        // requireAuthentication(request);
        // Convertimos el objeto Parse a un objeto JavaScript
        const data = request.object.toJSON();
        // Si request.original es undefined, entonces el objeto es nuevo
        const isNew = !request.original;
        const error = await (0, validateCategory_1.validateCategory)(data, isNew);
        if (error) {
            const errorObject = JSON.stringify(error);
            throw new node_1.default.Error(node_1.default.Error.VALIDATION_ERROR, JSON.parse(errorObject));
        }
    }
    catch (error) {
        console.error('Error while saving the lesiones:', error);
        throw error;
    }
});
//# sourceMappingURL=categoryTriggers.js.map