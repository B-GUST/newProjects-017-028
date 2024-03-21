"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable no-inline-comments */
/* eslint-disable no-console */
const node_1 = __importDefault(require("parse/node"));
const validateUser_1 = require("../validators/validateUser");
node_1.default.Cloud.beforeSave(node_1.default.User, async (request) => {
    try {
        const user = request.object.toJSON();
        const isNew = !request.original;
        const error = await (0, validateUser_1.validateUser)(user, isNew);
        if (error) {
            const errorObject = JSON.stringify(error);
            throw new node_1.default.Error(node_1.default.Error.VALIDATION_ERROR, JSON.parse(errorObject));
        }
    }
    catch (error) {
        console.error('Error while saving the user:', error);
        throw error;
    }
});
node_1.default.Cloud.afterDelete(node_1.default.User, async (request) => {
    try {
        const user = request.object; // This is the user that has just been deleted
        // Get the roles of the user
        const roleQuery = new node_1.default.Query(node_1.default.Role);
        roleQuery.equalTo('users', user);
        const roles = await roleQuery.find({ useMasterKey: true });
        // Remove the user from the roles
        const promises = roles.map((role) => {
            role.getUsers().remove(user);
            return role.save(null, { useMasterKey: true });
        });
        await Promise.all(promises);
    }
    catch (error) {
        console.error('Error while deleting the user:', error);
        throw error;
    }
});
//# sourceMappingURL=userTriggers.js.map