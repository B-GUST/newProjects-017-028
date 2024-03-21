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
exports.UserSchema = void 0;
const Yup = __importStar(require("yup"));
exports.UserSchema = Yup.object()
    .shape({
    username: Yup.string()
        .required('The username is required')
        .matches(/^[a-zA-Z0-9_]*$/, 'Only letters, numbers, and underscores are allowed'),
    password: Yup.string()
        .required('The password is required')
        .min(6, 'The password must be at least 6 characters long'),
    email: Yup.string().email('The email format is invalid').required('The email is required'),
    user_type: Yup.string().notRequired().nullable(),
    user_businessid: Yup.string().notRequired().nullable(),
    user_businessdocument: Yup.string().notRequired().nullable(),
    user_namecompany: Yup.string().notRequired().nullable(),
    phone: Yup.string().notRequired().nullable(),
    user_interests: Yup.array()
        .of(Yup.object().shape({
        category: Yup.string().notRequired().nullable(),
        subcategory: Yup.string().notRequired().nullable(),
        additionalField1: Yup.string().notRequired().nullable(),
        additionalField2: Yup.string().notRequired().nullable(),
    }))
        .notRequired()
        .nullable(),
    user_birthdate: Yup.mixed()
        .notRequired()
        .nullable()
        .transform((value, originalValue) => {
        if (typeof originalValue === 'string') {
            return new Date(originalValue);
        }
        return value;
    }),
    user_demographics: Yup.object().shape({
        age: Yup.number().notRequired().nullable(),
        gender: Yup.string().notRequired().nullable(),
        location: Yup.object().shape({
            country: Yup.string().notRequired(),
            province: Yup.string().notRequired(),
        }),
    }),
})
    .strict();
//# sourceMappingURL=userSchema.js.map