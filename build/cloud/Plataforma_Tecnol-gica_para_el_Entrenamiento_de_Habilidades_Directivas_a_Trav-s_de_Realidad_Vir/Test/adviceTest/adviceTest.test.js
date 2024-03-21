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
describe('Advice tests', () => {
    let sessionToken;
    let createAdviceResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createAdviceResponse = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/createAdvice')
            .set('X-Parse-Application-Id', '004')
            .set('X-Parse-Session-Token', sessionToken)
            .send({
            adv_interaction_Id: '',
            adv_interaction_type: '',
            adv_user_id: 'jsFETsxuoU',
            adv_recommendations: 'hello world',
            adv_user_feedback: '',
            objectIdPerson: 'jsFETsxuoUs',
        });
    });
    describe('Create Advice', () => {
        it('The response status is "success"', async () => {
            expect(createAdviceResponse.body.result.status).toBe('success');
        });
        it('The request should bring an advice object', async () => {
            expect(createAdviceResponse.body.result).toHaveProperty('adviceResponse');
        });
        it('The response contains a result object', async () => {
            expect(createAdviceResponse.body.result.result).toBe(true);
        });
    });
    describe('Update Advice', () => {
        let updateAdviceResponse;
        beforeAll(async () => {
            updateAdviceResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/updateAdvice')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                objectId: createAdviceResponse.body.result.adviceResponse.objectId,
                objectData: {
                    adv_interaction_type: 'asfaadsasddsa',
                },
            });
        });
        it('The response status is "success"', async () => {
            expect(updateAdviceResponse.body.result.status).toBe('success');
        });
        it('The response should contain an advice object', async () => {
            expect(updateAdviceResponse.body.result).toHaveProperty('data');
        });
        it('The response contains a result object', async () => {
            expect(updateAdviceResponse.body.result.result).toBe(true);
        });
    });
    describe('getAllAdvices', () => {
        let getAllAdviceResponse;
        beforeAll(async () => {
            getAllAdviceResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllAdvices')
                .set('X-Parse-Application-Id', '004')
                .send({
                page: 1,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAllAdviceResponse.body.result.status).toBe('success');
        });
        it('should return an array of advice', async () => {
            expect(getAllAdviceResponse.body.result).toHaveProperty('data');
        });
        it('the response from getAllAdvice should contain an array of advice', async () => {
            expect(Array.isArray(getAllAdviceResponse.body.result.data)).toBe(true);
        });
    });
    describe('getAdviceById', () => {
        let getAdviceResponse;
        beforeAll(async () => {
            getAdviceResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAdviceById')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .query({
                objectId: createAdviceResponse.body.result.adviceResponse.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAdviceResponse.body.result.status).toBe('success');
        });
        it('should return an advice object', async () => {
            expect(getAdviceResponse.body.result).toHaveProperty('data');
        });
        it('the response contains an advice object', async () => {
            expect(getAdviceResponse.body.result.data).toBeInstanceOf(Object);
        });
    });
    describe('Delete advice', () => {
        let deleteAdviceResponse;
        beforeAll(async () => {
            deleteAdviceResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteAdvice')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                objectIdPerson: 'jsFETsxuoUs',
            });
        });
        it('The response status is "success"', async () => {
            expect(deleteAdviceResponse.body.result.status).toBe('success');
        });
        it('The response contains a result object', async () => {
            expect(deleteAdviceResponse.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=adviceTest.test.js.map