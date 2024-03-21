"use strict";
/* eslint-disable no-console */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignRoleToUser = void 0;
const node_1 = __importDefault(require("parse/node"));
async function assignRoleToUser(user, roleName) {
    const query = new node_1.default.Query(node_1.default.Role);
    query.equalTo('name', roleName);
    const role = await query.first();
    console.log('rolessssssss', role);
    if (!role) {
        throw new node_1.default.Error(node_1.default.Error.OBJECT_NOT_FOUND, `Role ${roleName} not found.`);
    }
    const relation = role.relation('users');
    //Agregar el usuario a la relacion
    relation.add(user);
    await role.save(null, { useMasterKey: true });
}
exports.assignRoleToUser = assignRoleToUser;
//# sourceMappingURL=assignRoles.js.map