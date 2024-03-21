"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuthentication = void 0;
async function requireAuthentication(request) {
    console.log('*************', request);
    if (!request.user) {
        throw 'Debe estar autenticado para realizar esta operación';
    }
}
exports.requireAuthentication = requireAuthentication;
//# sourceMappingURL=authHelpers.js.map