"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-explicit-any */
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../index");
const loginUser_1 = require("../../cloud/Plataforma_Tecnol-gica_para_el_Entrenamiento_de_Habilidades_Directivas_a_Trav-s_de_Realidad_Vir/Test/utils/loginUser");
describe('Delete Table', () => {
    let sessionToken;
    let createTable;
    let deleteTable;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createTable = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/registerTableFromJSON')
            .set('X-Parse-Application-Id', '001')
            .set('X-Parse-Session-Token', sessionToken)
            .send({
            tableName: 'Test10',
            data: {
                plate_name: 'nombre_del_plato_',
                plate_description: 'descripcion_del_plato',
                plate_img: 'url_del_plato',
                plate_type: 'tipo_de_plato',
                plate_state: 'estado_del_plato',
            },
        });
    });
    describe('Pots /server/functions/deleteTableFromJSON', () => {
        beforeAll(async () => {
            deleteTable = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteTableFromJSON')
                .set('X-Parse-Application-Id', '001')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                tableName: 'Test10',
                tableFromJSONId: createTable.body.result.store.objectId,
            });
        });
        it('El estado de la respuesta es "success', async () => {
            expect(deleteTable.body.result.status).toBe('success');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(deleteTable.body.result.result).toBe(true);
        });
    });
});
//# sourceMappingURL=deleteTableFromJSON.test.js.map