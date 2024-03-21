"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAttitudesService = exports.updateAttitudesService = exports.createAttitudesService = exports.getAttitudesByIdService = exports.getAllAttitudesService = void 0;
const attitudes_1 = require("../database/attitudes");
async function getAllAttitudesService(page) {
    try {
        const data = await (0, attitudes_1.getAllAttitudesData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAttitudesService = getAllAttitudesService;
async function getAttitudesByIdService(objectId) {
    try {
        const data = await (0, attitudes_1.getAttitudesByIdData)(objectId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAttitudesByIdService = getAttitudesByIdService;
async function createAttitudesService(objectData) {
    try {
        const data = await (0, attitudes_1.createAttitudesData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createAttitudesService = createAttitudesService;
async function updateAttitudesService(objectId, objectData) {
    try {
        const data = await (0, attitudes_1.updateAttitudesData)(objectId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateAttitudesService = updateAttitudesService;
async function deleteAttitudesService(objectId) {
    try {
        await (0, attitudes_1.deleteAttitudesData)(objectId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAttitudesService = deleteAttitudesService;
//# sourceMappingURL=attitudesService.js.map