"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createData = void 0;
/* eslint-disable no-throw-literal */
/* eslint-disable guard-for-in */
/* eslint-disable no-new */
/* eslint-disable no-prototype-builtins */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-useless-catch */
const node_1 = __importDefault(require("parse/node"));
async function createData(data2) {
    const { tableName, data } = data2;
    //* const arreglo = [];
    let result;
    data.forEach(async (jsonData) => {
        try {
            const saveTable = node_1.default.Object.extend(tableName);
            const query = new saveTable();
            for (const key in jsonData) {
                if (jsonData.hasOwnProperty(key)) {
                    query.set(key, jsonData[key]);
                }
            }
            result = await query.save(null, { useMasterKey: true });
            // eslint-disable-next-line no-promise-executor-return
            await new Promise((resolve) => setTimeout(resolve, 2000));
        }
        catch (error) {
            throw {
                code: error.code || node_1.default.Error.INTERNAL_SERVER_ERROR,
                message: error.message,
            };
        }
    });
    return result;
}
exports.createData = createData;
//# sourceMappingURL=seeder.js.map