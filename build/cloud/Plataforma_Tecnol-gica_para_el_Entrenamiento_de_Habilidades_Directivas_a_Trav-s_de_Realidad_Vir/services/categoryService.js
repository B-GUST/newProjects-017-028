"use strict";
/* eslint-disable no-useless-catch */
/* eslint-disable no-throw-literal */
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryService = exports.updateCategoryService = exports.createCategoryService = exports.getCategoryByIdService = exports.getAllCategoryService = void 0;
const category_1 = require("../database/category");
async function getAllCategoryService(page) {
    try {
        const data = await (0, category_1.getAllCategoryData)(page);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getAllCategoryService = getAllCategoryService;
async function getCategoryByIdService(objectId) {
    try {
        const data = await (0, category_1.getCategoryByIdData)(objectId);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.getCategoryByIdService = getCategoryByIdService;
async function createCategoryService(objectData) {
    try {
        const data = await (0, category_1.createCategoryData)(objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.createCategoryService = createCategoryService;
async function updateCategoryService(objectId, objectData) {
    try {
        const data = await (0, category_1.updateCategoryData)(objectId, objectData);
        return data;
    }
    catch (error) {
        throw error;
    }
}
exports.updateCategoryService = updateCategoryService;
async function deleteCategoryService(objectId) {
    try {
        await (0, category_1.deleteCategoryData)(objectId);
    }
    catch (error) {
        throw error;
    }
}
exports.deleteCategoryService = deleteCategoryService;
//# sourceMappingURL=categoryService.js.map