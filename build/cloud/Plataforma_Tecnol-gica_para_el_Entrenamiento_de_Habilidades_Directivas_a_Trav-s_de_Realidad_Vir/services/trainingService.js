"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTrainingService = exports.updateTrainingService = exports.createTrainingService = exports.getTrainingByIdService = exports.getAllTrainingService = void 0;
const training_1 = require("../database/training");
async function getAllTrainingService(page) {
    try {
        const data = await (0, training_1.getAllTrainingsData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllTrainingService = getAllTrainingService;
async function getTrainingByIdService(objectId) {
    try {
        const data = await (0, training_1.getTrainingByIdData)(objectId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getTrainingByIdService = getTrainingByIdService;
async function createTrainingService(objectData) {
    try {
        const data = await (0, training_1.createTrainingData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createTrainingService = createTrainingService;
async function updateTrainingService(objectId, objectData) {
    try {
        const data = await (0, training_1.updateTrainingData)(objectId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateTrainingService = updateTrainingService;
async function deleteTrainingService(objectId) {
    try {
        await (0, training_1.deleteTrainingData)(objectId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteTrainingService = deleteTrainingService;
//# sourceMappingURL=trainingService.js.map