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
exports.SubsidiesSchema = void 0;
const Yup = __importStar(require("yup"));
exports.SubsidiesSchema = Yup.object().shape({
    sub_code_bdns: Yup.string().required('The sub_code_bdns is required'),
    sub_administrative_entities: Yup.string().required('The sub_administrative_entities is required'),
    sub_registration_dates: Yup.string().required('The sub_registration_dates is required'),
    sub_title: Yup.string().required('The sub_title is required'),
    sub_detail: Yup.string().required('The sub_detail is required'),
    sub_url: Yup.string().required('The sub_url is required'),
});
//# sourceMappingURL=subsidiesSchema.js.map