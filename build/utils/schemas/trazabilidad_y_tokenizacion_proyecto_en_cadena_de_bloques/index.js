"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemasTrazabilidad_y_tokenizacion_proyecto_en_cadena_de_bloques = void 0;
const node_1 = __importDefault(require("parse/node"));
const schemasTrazabilidad_y_tokenizacion_proyecto_en_cadena_de_bloques = async () => {
    // Define schema for "users"
    const userSchema = new node_1.default.Schema('User');
    userSchema
        .addString('user_timestamp')
        .addString('user_session')
        .addString('user_phone')
        .addString('user_brithdate')
        .addString('user_type_user')
        .addObject('user_demographics');
    userSchema.save();
    // Define schema for "person"
    const personSchema = new node_1.default.Schema('Person');
    personSchema
        .addString('per_user_id')
        .addString('per_interests');
    personSchema.save();
    // Define schema for "projects"
    const projectSchema = new node_1.default.Schema('Project');
    projectSchema
        .addString('pro_name')
        .addString('pro_description')
        .addString('pro_start_date')
        .addString('pro_end_date')
        .addString('pro_id_companybuilder');
    projectSchema.save();
    // Define schema for "companybuilder"
    const companyBuilderSchema = new node_1.default.Schema('CompanyBuilder');
    companyBuilderSchema
        .addString('com_name')
        .addString('com_description')
        .addString('com_direction')
        .addObject('com_contact');
    companyBuilderSchema.save();
    // Define schema for "documents"
    const documentSchema = new node_1.default.Schema('Document');
    documentSchema
        .addString('doc_title')
        .addString('doc_description')
        .addString('doc_publication_date')
        .addString('doc_original_language')
        .addString('doc_type');
    documentSchema.save();
};
exports.schemasTrazabilidad_y_tokenizacion_proyecto_en_cadena_de_bloques = schemasTrazabilidad_y_tokenizacion_proyecto_en_cadena_de_bloques;
//# sourceMappingURL=index.js.map