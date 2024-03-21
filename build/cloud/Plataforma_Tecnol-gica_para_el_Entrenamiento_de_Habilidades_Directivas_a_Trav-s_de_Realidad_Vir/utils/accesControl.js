"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserRole = void 0;
/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
const node_1 = __importDefault(require("parse/node"));
async function checkUserRole(sessionToken, allowedRoles) {
    try {
        // Obtener la sesión del usuario autenticado
        const sessionQuery = new node_1.default.Query(node_1.default.Session);
        sessionQuery.equalTo('sessionToken', sessionToken);
        const session = await sessionQuery.first({ useMasterKey: true });
        if (!session) {
            throw new node_1.default.Error(node_1.default.Error.INVALID_SESSION_TOKEN, 'Invalid session token.');
        }
        // Obtener el usuario autenticado a partir de la sesión
        const user = session.get('user');
        // Verificar el rol del usuario
        const query = new node_1.default.Query(node_1.default.Role);
        query.equalTo('users', user);
        const roles = await query.find();
        const userRoles = roles.map((role) => role.getName());
        return userRoles.some((role) => allowedRoles.includes(role));
    }
    catch (error) {
        console.error(`Error: ${error.message}`);
        throw error;
    }
}
exports.checkUserRole = checkUserRole;
//# sourceMappingURL=accesControl.js.map