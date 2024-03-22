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
describe('Category tests', () => {
    let sessionToken;
    let createCategoryResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createCategoryResponse = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/createCategory')
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
    describe('Create Category', () => {
        it('The response status is "success"', async () => {
            expect(createCategoryResponse.body.result.status).toBe('success');
        });
        it('The request should bring a Category object', async () => {
            expect(createCategoryResponse.body.result).toHaveProperty('category');
        });
        it('The response contains a result object', async () => {
            expect(createCategoryResponse.body.result.result).toBe(true);
        });
    });
    describe('getAllCategory', () => {
        let getAllCategoryResponse;
        beforeAll(async () => {
            getAllCategoryResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllCategory')
                .set('X-Parse-Application-Id', '018')
                .send({
                page: 1,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAllCategoryResponse.body.result.status).toBe('success');
        });
        it('should return an array of Category', async () => {
            expect(getAllCategoryResponse.body.result).toHaveProperty('category');
        });
        it('the response from getAllCategory should contain an array of Category', async () => {
            expect(Array.isArray(getAllCategoryResponse.body.result.category)).toBe(true);
        });
    });
    describe('getCategoryById', () => {
        let getCategoryResponse;
        beforeAll(async () => {
            getCategoryResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getCategoryById')
                .set('X-Parse-Application-Id', '018')
                .set('X-Parse-Session-Token', sessionToken)
                .query({
                personId: createCategoryResponse.body.result.category.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getCategoryResponse.body.result.status).toBe('success');
        });
        it('should return a Category object', async () => {
            expect(getCategoryResponse.body.result).toHaveProperty('category');
        });
        it('the response contains a Category object', async () => {
            expect(getCategoryResponse.body.result.category).toBeInstanceOf(Object);
        });
    });
    describe('Delete Category', () => {
        let deleteCategoryResponse;
        beforeAll(async () => {
            deleteCategoryResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteCategory')
                .set('X-Parse-Application-Id', '018')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                personId: createCategoryResponse.body.result.category.objectId,
            });
        });
        it('The response status is "success"', async () => {
            expect(deleteCategoryResponse.body.result.status).toBe('success');
        });
        it('The response contains a result object', async () => {
            expect(deleteCategoryResponse.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=categoryTest.test.js.map