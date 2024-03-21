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
describe('Subsidies tests', () => {
    let sessionToken;
    let createSubsidiesResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createSubsidiesResponse = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/createSubsidies')
            .set('X-Parse-Application-Id', '004')
            .set('X-Parse-Session-Token', sessionToken)
            .send({
            objectData: {
                sub_code_bdns: "string",
                sub_administrative_entities: "string",
                sub_registration_date: "string",
                sub_title: "string",
                sub_detail: "string",
                sub_url: "string"
            },
        });
    });
    describe('Create Subsidies', () => {
        it('The response status is "success"', async () => {
            expect(createSubsidiesResponse.body.result.status).toBe('success');
        });
        it('The request should bring a Subsidies object', async () => {
            expect(createSubsidiesResponse.body.result).toHaveProperty('subsidies');
        });
        it('The response contains a result object', async () => {
            expect(createSubsidiesResponse.body.result.result).toBe(true);
        });
    });
    describe('getAllSubsidies', () => {
        let getAllSubsidiesResponse;
        beforeAll(async () => {
            getAllSubsidiesResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllSubsidies')
                .set('X-Parse-Application-Id', '004')
                .send({
                page: 1,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAllSubsidiesResponse.body.result.status).toBe('success');
        });
        it('should return an array of Subsidies', async () => {
            expect(getAllSubsidiesResponse.body.result).toHaveProperty('subsidies');
        });
        it('the response from getAllSubsidies should contain an array of Subsidies', async () => {
            expect(Array.isArray(getAllSubsidiesResponse.body.result.subsidies)).toBe(true);
        });
    });
    describe('getSubsidiesById', () => {
        let getSubsidiesResponse;
        beforeAll(async () => {
            getSubsidiesResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getSubsidiesById')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .query({
                personId: createSubsidiesResponse.body.result.subsidies.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getSubsidiesResponse.body.result.status).toBe('success');
        });
        it('should return a Subsidies object', async () => {
            expect(getSubsidiesResponse.body.result).toHaveProperty('subsidies');
        });
        it('the response contains a Subsidies object', async () => {
            expect(getSubsidiesResponse.body.result.subsidies).toBeInstanceOf(Object);
        });
    });
    describe('Delete Subsidies', () => {
        let deleteSubsidiesResponse;
        beforeAll(async () => {
            deleteSubsidiesResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteSubsidies')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                personId: createSubsidiesResponse.body.result.subsidies.objectId,
            });
        });
        it('The response status is "success"', async () => {
            expect(deleteSubsidiesResponse.body.result.status).toBe('success');
        });
        it('The response contains a result object', async () => {
            expect(deleteSubsidiesResponse.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=subsidiesTest.test.js.map