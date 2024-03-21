"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteInterestsService = exports.updateInterestsService = exports.createInterestsService = exports.getInterestsByIdService = exports.getAllInterestsService = void 0;
const interests_1 = require("../database/interests");
async function getAllInterestsService(page) {
    try {
        const data = await (0, interests_1.getAllInterestsData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllInterestsService = getAllInterestsService;
async function getInterestsByIdService(objectId) {
    try {
        const data = await (0, interests_1.getInterestsByIdData)(objectId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getInterestsByIdService = getInterestsByIdService;
async function createInterestsService(objectData) {
    try {
        const data = await (0, interests_1.createInterestsData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createInterestsService = createInterestsService;
async function updateInterestsService(objectId, objectData) {
    try {
        const data = await (0, interests_1.updateInterestsData)(objectId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateInterestsService = updateInterestsService;
async function deleteInterestsService(objectId) {
    try {
        await (0, interests_1.deleteInterestsData)(objectId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteInterestsService = deleteInterestsService;
//# sourceMappingURL=interestsService.js.map