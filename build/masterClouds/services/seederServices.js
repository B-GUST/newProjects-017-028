"use strict";
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
/* eslint-disable no-undef */
//*  import Parse from 'parse';
//*  import { Grant } from './Grant'; // Assuming you have a Grant interface/class
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDataService = void 0;
const accesControl_1 = require("../../cloud/Plataforma_Tecnol-gica_para_el_Entrenamiento_de_Habilidades_Directivas_a_Trav-s_de_Realidad_Vir/utils/accesControl");
const seeder_1 = require("../database/seeder");
async function createDataService(request, sessionToken) {
    try {
        const permission = await (0, accesControl_1.checkUserRole)(sessionToken, ['superuser', 'admin', 'ia']);
        if (!permission) {
            throw new Parse.Error(Parse.Error.OPERATION_FORBIDDEN, `User does not have permission to delete users.`);
        }
        const data = await (0, seeder_1.createData)(request);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createDataService = createDataService;
//# sourceMappingURL=seederServices.js.map