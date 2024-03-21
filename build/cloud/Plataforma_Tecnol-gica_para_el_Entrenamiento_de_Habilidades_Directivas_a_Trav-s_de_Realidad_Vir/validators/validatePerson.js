"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePerson = void 0;
const personSchema_1 = require("../schemas/personSchema");
const Yup = __importStar(require("yup"));
async function validatePerson(person, isNew) {
    try {
        // Si la persona es nueva, validamos todos los campos
        if (isNew) {
            // !La opción { abortEarly: false } en Yup permite continuar la validación después del primer error,
            // !recogiendo todos los errores en lugar de detenerse en el primero. Esto es útil para mostrar todos
            // !!los errores de una vez, especialmente en formularios de usuario, permitiendo corregir todos los errores en una sola pasada.
            await personSchema_1.PersonSchema.validate(person, { abortEarly: false });
        }
        else {
            // Si la persona no es nueva, validamos solo los campos presentes
            const schemaKeys = Object.keys(personSchema_1.PersonSchema.fields);
            const validations = schemaKeys.map((key) => {
                if (key in person) {
                    const schema = Yup.reach(personSchema_1.PersonSchema, key);
                    const personKey = key;
                    return schema.validate(person[personKey]);
                }
            });
            await Promise.all(validations);
        }
        // Si todo está bien, no devolvemos nada
        return null;
    }
    catch (error) {
        if (error instanceof Yup.ValidationError) {
            //? Este es un error de validación de Yup
            //! solo selecciono las propiedades del error que quiero ver porque si
            //! retornamos el objeto error completo trae informacion que no es necesario
            return {
                errors: error.errors,
                value: error.value,
            };
        }
        else {
            //? Esto sirve para lanzar el error personalizado
            return {
                message: error.message,
            };
        }
    }
}
exports.validatePerson = validatePerson;
//# sourceMappingURL=validatePerson.js.map