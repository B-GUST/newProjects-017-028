"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToIaEndpoint = void 0;
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-else-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
const axios_1 = __importDefault(require("axios"));
const adviceControllers_1 = require("../controllers/adviceControllers");
async function sendToIaEndpoint(objectData, Parse, objectIdPerson) {
    const bodyIa = {
        UID: objectData.per_user_id.objectId,
        User: '',
        description: '',
        data: {
            id_params: '016',
            view_name: 'precio_metro',
            request: 'Solicitar localización de oportunidades de negocios según el área geográfica y el número de metros cuadrados deseados, y recibir como resultado el precio por metro cuadrado en las áreas seleccionadas, facilitando la identificación de oportunidades rentables para inversión o desarrollo comercial',
            prompt: objectData.per_interestss,
        },
    };
    const jsonString = JSON.stringify(bodyIa);
    try {
        // Realizar la solicitud POST a la API de recomendación
        const recommendationResponse = await axios_1.default.post('http://192.168.50.214:7101/api/v1/recommendation/', jsonString, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Verificar si la solicitud fue exitosa
        if (recommendationResponse.status === 200) {
            recommendationResponse.data.userId = objectData.per_user_id.objectId;
            // Agrega el objectIdPerson a los datos de la respuesta
            recommendationResponse.data.objectIdPerson = objectIdPerson;
            // Pasar la respuesta de la API de recomendación a createAdvice
            const adviceResponse = await (0, adviceControllers_1.createAdvice)(Parse)({ params: recommendationResponse.data });
            return adviceResponse;
        }
        else {
            // Devolver algún valor o lanzar un error en caso de que la solicitud no sea exitosa
            throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, 'The POST request to the recommendation API was not successful');
        }
    }
    catch (error) {
        console.error(`Error making the POST request to the recommendation API: ${error}`);
        // Puedes optar por devolver un valor específico en caso de error
        throw error;
    }
}
exports.sendToIaEndpoint = sendToIaEndpoint;
//# sourceMappingURL=sendToIaEndpoint.js.map