"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = void 0;
async function loginUser(request, app) {
    const loginResponse = await request(app).post('/server/login').set('X-Parse-Application-Id', '001').send({
        username: 'superuser1',
        password: 'test6',
    });
    const { sessionToken } = loginResponse.body;
    return sessionToken;
}
exports.loginUser = loginUser;
//# sourceMappingURL=loginUser.js.map