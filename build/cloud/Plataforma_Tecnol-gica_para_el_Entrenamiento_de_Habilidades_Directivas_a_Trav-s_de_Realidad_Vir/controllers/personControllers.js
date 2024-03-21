"use strict";
/* eslint-disable prefer-destructuring */
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePerson = exports.updatePerson = exports.createPerson = exports.getPersonById = exports.getAllPersons = void 0;
const personService_1 = require("../services/personService");
const sendToIaEndpoint_1 = require("../utils/sendToIaEndpoint");
const adviceControllers_1 = require("./adviceControllers");
function getAllPersons(Parse) {
    return async (request) => {
        try {
            const { page } = request.params;
            const persons = await (0, personService_1.getAllPersonsService)(page);
            return {
                status: 'success',
                result: true,
                persons,
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
exports.getAllPersons = getAllPersons;
function getPersonById(Parse) {
    return async (request) => {
        try {
            const { personId } = request.params;
            const person = await (0, personService_1.getPersonByIdService)(personId);
            return {
                status: 'success',
                result: true,
                person,
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
exports.getPersonById = getPersonById;
function createPerson(Parse) {
    return async (request) => {
        try {
            const { objectData } = request.params;
            const person = await (0, personService_1.createPersonService)(objectData);
            //obtengo el objectId de person
            const objectIdPerson = person.id;
            (0, sendToIaEndpoint_1.sendToIaEndpoint)(objectData, Parse, objectIdPerson);
            return {
                status: 'success',
                result: true,
                person,
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
exports.createPerson = createPerson;
function updatePerson(Parse) {
    return async (request) => {
        try {
            const { personId, objectData } = request.params;
            const person = await (0, personService_1.updatePersonService)(personId, objectData);
            return {
                status: 'success',
                result: true,
                person,
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
exports.updatePerson = updatePerson;
function deletePerson(Parse) {
    return async (request) => {
        try {
            const { personId } = request.params;
            //const sessionToken = request.headers.authorization;
            await (0, personService_1.deletePersonService)(personId);
            // Llama a deleteAdvice después de eliminar la Persona
            await (0, adviceControllers_1.deleteAdvice)(Parse)({ params: { objectIdPerson: personId } });
            return {
                status: 'success',
                result: true,
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
exports.deletePerson = deletePerson;
//# sourceMappingURL=personControllers.js.map