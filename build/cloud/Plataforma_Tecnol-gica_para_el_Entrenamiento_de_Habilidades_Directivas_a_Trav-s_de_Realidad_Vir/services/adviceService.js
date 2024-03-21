"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdviceService = exports.updateAdviceService = exports.createAdviceService = exports.getAdviceByIdService = exports.getAllAdvicesService = void 0;
const advices_1 = require("../database/advices");
async function getAllAdvicesService(page) {
    try {
        const data = await (0, advices_1.getAllAdvicesData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllAdvicesService = getAllAdvicesService;
async function getAdviceByIdService(objectId) {
    try {
        const data = await (0, advices_1.getAdviceByIdData)(objectId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAdviceByIdService = getAdviceByIdService;
async function createAdviceService(objectData) {
    try {
        const data = await (0, advices_1.createAdviceData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createAdviceService = createAdviceService;
async function updateAdviceService(objectId, objectData) {
    try {
        const data = await (0, advices_1.updateAdviceData)(objectId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateAdviceService = updateAdviceService;
async function deleteAdviceService(objectId) {
    try {
        await (0, advices_1.deleteAdviceData)(objectId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteAdviceService = deleteAdviceService;
//# sourceMappingURL=adviceService.js.map