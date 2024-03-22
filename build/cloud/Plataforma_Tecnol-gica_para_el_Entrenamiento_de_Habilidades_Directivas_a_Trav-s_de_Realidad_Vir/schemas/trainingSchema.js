"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainingSchema = void 0;
const Yup = __importStar(require("yup"));
exports.TrainingSchema = Yup.object().shape({
    tra_category_id: Yup.string().required('tra_category_id is required'),
    tra_title: Yup.string().required('tra_title is required'),
    tra_description: Yup.string().required('tra_description is required'),
    tra_estimated_duration: Yup.string().required('tra_estimated_duration is required'),
    tra_difficulty_level: Yup.string().required('tra_difficulty_level is required'),
    tra_objectives: Yup.string().required('tra_objectives is required'),
    tra_prerequisites: Yup.string().required('tra_prerequisites is required'),
    tra_date_created: Yup.string().required('tra_date_created is required'),
    tra_status: Yup.string().required('tra_status is required'),
    tra_image: Yup.string().required('tra_image is required'),
});
//# sourceMappingURL=trainingSchema.js.map