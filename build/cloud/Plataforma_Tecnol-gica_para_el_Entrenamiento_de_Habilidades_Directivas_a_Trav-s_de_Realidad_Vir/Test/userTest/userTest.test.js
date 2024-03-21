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
describe('User tests', () => {
    let sessionToken;
    let createUserResponse;
    beforeAll(async () => {
        sessionToken = await (0, loginUser_1.loginUser)(supertest_1.default, index_1.app);
        createUserResponse = await (0, supertest_1.default)(index_1.app)
            .post('/server/functions/createUser')
            .set('X-Parse-Application-Id', '004')
            .send({
            objectData: {
                username: 'usertest20test125678n',
                password: 'password123',
                email: 'usertest20test125678n@example.com',
            },
        });
    });
    describe('Create User', () => {
        it('The response status is "success"', async () => {
            expect(createUserResponse.body.result.status).toBe('success');
        });
        it('The request should bring a user object', async () => {
            expect(createUserResponse.body.result).toHaveProperty('user');
        });
        it('The response contains a result object', async () => {
            expect(createUserResponse.body.result.result).toBe(true);
        });
        it('The response contains a sessionToken', async () => {
            expect(createUserResponse.body.result.user).toHaveProperty('sessionToken');
        });
    });
    describe('Update User', () => {
        let updateUserResponse;
        beforeAll(async () => {
            updateUserResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/updateUser')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                userId: createUserResponse.body.result.user.objectId,
                objectData: {
                    user_interests: [
                        {
                            category: 'Basquet',
                        },
                    ],
                },
            });
        });
        it('The response status is "success"', async () => {
            expect(updateUserResponse.body.result.status).toBe('success');
        });
        it('The response should contain a user object', async () => {
            expect(updateUserResponse.body.result).toHaveProperty('user');
        });
        it('The response contains a result object', async () => {
            expect(updateUserResponse.body.result.result).toBe(true);
        });
    });
    describe('getAllUsers', () => {
        let getAllUsersResponse;
        beforeAll(async () => {
            getAllUsersResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getAllUsers')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                page: 1,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getAllUsersResponse.body.result.status).toBe('success');
        });
        it('should return an array of users', async () => {
            expect(getAllUsersResponse.body.result).toHaveProperty('users');
        });
        it('the response from getAllUsers should contain an array of users', async () => {
            expect(Array.isArray(getAllUsersResponse.body.result.users)).toBe(true);
        });
    });
    describe('getUserById', () => {
        let getUserResponse;
        beforeAll(async () => {
            getUserResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/getUserById')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .query({
                userId: createUserResponse.body.result.user.objectId,
            });
        });
        it('should have a response status of "success"', async () => {
            expect(getUserResponse.body.result.status).toBe('success');
        });
        it('should return a user object', async () => {
            expect(getUserResponse.body.result).toHaveProperty('user');
        });
        it('the response contains a user object', async () => {
            expect(getUserResponse.body.result.user).toBeInstanceOf(Object);
        });
    });
    describe('Delete user', () => {
        let deleteUserResponse;
        beforeAll(async () => {
            deleteUserResponse = await (0, supertest_1.default)(index_1.app)
                .post('/server/functions/deleteUser')
                .set('X-Parse-Application-Id', '004')
                .set('X-Parse-Session-Token', sessionToken)
                .send({
                userId: createUserResponse.body.result.user.objectId,
            });
        });
        it('The response status is "success"', async () => {
            expect(deleteUserResponse.body.result.status).toBe('success');
        });
        it('The response contains a result object', async () => {
            expect(deleteUserResponse.body.result.result).toBe(true);
        });
    });
    afterAll(() => {
        index_1.httpServer.close();
    });
});
//# sourceMappingURL=userTest.test.js.map