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
describe('Person tests', () => {
    let sessionToken;
    let createPersonResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createPersonResponse = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/createPerson')
            .set('X-Parse-Application-Id', '004')
            .set('X-Parse-Session-Token', sessionToken)
            .send({
            objectData: {
                per_user_id: 'jsFETsxuoU',
                per_interests: 'bandeja paisa',
                per_details: 'I like to',
                per_adress: 'Calle 123',
            },
        });
    });
    describe('Create Person', () => {
        it('The response status is "success"', async () => {
            expect(createPersonResponse.body.result.status).toBe('success');
        });
        it('The request should bring a person object', async () => {
            expect(createPersonResponse.body.result).toHaveProperty('person');
        });
        it('The response contains a result object', async () => {
            expect(createPersonResponse.body.result.result).toBe(true);
        });
    });
    describe('getAllPeople', () => {
        let getAllPeopleResponse;
        beforeAll(async () => {
            getAllPeopleResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllPeople')
                .set('X-Parse-Application-Id', '004')
                .send({
                page: 1,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAllPeopleResponse.body.result.status).toBe('success');
        });
        it('should return an array of people', async () => {
            expect(getAllPeopleResponse.body.result).toHaveProperty('persons');
        });
        it('the response from getAllPeople should contain an array of people', async () => {
            expect(Array.isArray(getAllPeopleResponse.body.result.persons)).toBe(true);
        });
    });
    describe('getPersonById', () => {
        let getPersonResponse;
        beforeAll(async () => {
            getPersonResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getPersonById')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .query({
                personId: createPersonResponse.body.result.person.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getPersonResponse.body.result.status).toBe('success');
        });
        it('should return a person object', async () => {
            expect(getPersonResponse.body.result).toHaveProperty('person');
        });
        it('the response contains a person object', async () => {
            expect(getPersonResponse.body.result.person).toBeInstanceOf(Object);
        });
    });
    describe('Delete person', () => {
        let deletePersonResponse;
        beforeAll(async () => {
            deletePersonResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deletePerson')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                personId: createPersonResponse.body.result.person.objectId,
            });
        });
        it('The response status is "success"', async () => {
            expect(deletePersonResponse.body.result.status).toBe('success');
        });
        it('The response contains a result object', async () => {
            expect(deletePersonResponse.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=personTest.test.js.map