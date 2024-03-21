"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSubsidieservice = exports.updateSubsidieservice = exports.createSubsidieservice = exports.getAdviceByIdService = exports.getAllSubsidiesService = void 0;
const subsidies_1 = require("../database/subsidies");
async function getAllSubsidiesService(page) {
    try {
        const data = await (0, subsidies_1.getAllSubsidiesData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllSubsidiesService = getAllSubsidiesService;
async function getAdviceByIdService(objectId) {
    try {
        const data = await (0, subsidies_1.getSubsidiesByIdData)(objectId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAdviceByIdService = getAdviceByIdService;
async function createSubsidieservice(objectData) {
    try {
        const data = await (0, subsidies_1.createSubsidiesData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createSubsidieservice = createSubsidieservice;
async function updateSubsidieservice(objectId, objectData) {
    try {
        const data = await (0, subsidies_1.updateSubsidiesData)(objectId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateSubsidieservice = updateSubsidieservice;
async function deleteSubsidieservice(objectId) {
    try {
        await (0, subsidies_1.deleteSubsidiesData)(objectId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteSubsidieservice = deleteSubsidieservice;
//# sourceMappingURL=subsidiesService.js.map