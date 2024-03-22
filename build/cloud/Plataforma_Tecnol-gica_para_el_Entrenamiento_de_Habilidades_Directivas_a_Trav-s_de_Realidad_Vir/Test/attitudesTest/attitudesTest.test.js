"use strict";
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = require("../../../../index");
const loginUser_1 = require("../utils/loginUser");
describe('Attitudes tests', () => {
    let sessionToken;
    let createAttitudesResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createAttitudesResponse = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/createAttitudes')
            .set('X-Parse-Application-Id', '018')
            .set('X-Parse-Session-Token', sessionToken)
            .send({
            objectData: {
                rou_name: "Nombre de la Rutina",
                rou_descrip: "Descripción de la rutina",
                rou_type: "Tipo de Ejercicio (Cardiovascular, Entrenamiento de Fuerza, Flexibilidad, etc.)",
                rou_time: "Duración de la rutina",
                rou_intensity: "Intensidad de la rutina",
                rou_level: "nivel de Dificultad",
                rou_objectives: "Objetivos (Adelgazar, Incrementar Masa Muscular, Mantener Rutina)"
            },
        });
    });
    describe('Create Attitudes', () => {
        it('The response status is "success"', async () => {
            expect(createAttitudesResponse.body.result.status).toBe('success');
        });
        it('The request should bring a Attitudes object', async () => {
            expect(createAttitudesResponse.body.result).toHaveProperty('attitudes');
        });
        it('The response contains a result object', async () => {
            expect(createAttitudesResponse.body.result.result).toBe(true);
        });
    });
    describe('getAllAttitudes', () => {
        let getAllAttitudesResponse;
        beforeAll(async () => {
            getAllAttitudesResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllAttitudes')
                .set('X-Parse-Application-Id', '018')
                .send({
                page: 1,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAllAttitudesResponse.body.result.status).toBe('success');
        });
        it('should return an array of Attitudes', async () => {
            expect(getAllAttitudesResponse.body.result).toHaveProperty('attitudes');
        });
        it('the response from getAllAttitudes should contain an array of Attitudes', async () => {
            expect(Array.isArray(getAllAttitudesResponse.body.result.attitudes)).toBe(true);
        });
    });
    describe('getAttitudesById', () => {
        let getAttitudesResponse;
        beforeAll(async () => {
            getAttitudesResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAttitudesById')
                .set('X-Parse-Application-Id', '018')
                .set('X-Parse-Session-Token', sessionToken)
                .query({
                personId: createAttitudesResponse.body.result.attitudes.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAttitudesResponse.body.result.status).toBe('success');
        });
        it('should return a Attitudes object', async () => {
            expect(getAttitudesResponse.body.result).toHaveProperty('attitudes');
        });
        it('the response contains a Attitudes object', async () => {
            expect(getAttitudesResponse.body.result.attitudes).toBeInstanceOf(Object);
        });
    });
    describe('Delete Attitudes', () => {
        let deleteAttitudesResponse;
        beforeAll(async () => {
            deleteAttitudesResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteAttitudes')
                .set('X-Parse-Application-Id', '018')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                personId: createAttitudesResponse.body.result.attitudes.objectId,
            });
        });
        it('The response status is "success"', async () => {
            expect(deleteAttitudesResponse.body.result.status).toBe('success');
        });
        it('The response contains a result object', async () => {
            expect(deleteAttitudesResponse.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=attitudesTest.test.js.map