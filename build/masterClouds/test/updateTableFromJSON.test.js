"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../index");
const loginUser_1 = require("../../cloud/Plataforma_Tecnol-gica_para_el_Entrenamiento_de_Habilidades_Directivas_a_Trav-s_de_Realidad_Vir/Test/utils/loginUser");
const cleanTable_1 = require("./utils/cleanTable");
const node_1 = __importDefault(require("parse/node"));
describe('Update Table', () => {
    let sessionToken;
    let createTable;
    let updateTable;
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
    describe('Pots /server/functions/updateTableFromJSON', () => {
        beforeAll(async () => {
            updateTable = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/updateTableFromJSON')
                .set('X-Parse-Application-Id', '001')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                tableName: 'Test10',
                tableFromJSONId: createTable.body.result.store.objectId,
                data: {
                    plate_name: 'nombre_del_pla',
                },
            });
        });
        it('El estado de la respuesta es "success', async () => {
            expect(updateTable.body.result.status).toBe('success');
        });
        it('La petición debería retornar un objeto store', async () => {
            expect(updateTable.body.result).toHaveProperty('store');
        });
        it('La respuesta contiene un objeto result', async () => {
            expect(updateTable.body.result.result).toBe(true);
        });
    });
    afterEach(async () => {
        // Llama a la función de utilidad para limpiar la base de datos
        if (createTable.body.result) {
            await (0, cleanTable_1.cleanTable)(node_1.default, 'Test10');
        }
    });
});
//# sourceMappingURL=updateTableFromJSON.test.js.map