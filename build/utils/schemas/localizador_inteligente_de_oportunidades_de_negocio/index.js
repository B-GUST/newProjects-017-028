"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaslocalizador_inteligente_de_oportunidades_de_negocio = void 0;
const node_1 = __importDefault(require("parse/node"));
const schemaslocalizador_inteligente_de_oportunidades_de_negocio = async () => {
    // Define schema for "users"
    const userSchema = new node_1.default.Schema('User');
    userSchema
        .addString('user_timestamp')
        .addString('user_session')
        .addString('user_phone')
        .addString('user_brithdate')
        .addString('user_type_user')
        .addString('user_demographics');
    userSchema.save();
    // Define schema for "person"
    const personSchema = new node_1.default.Schema('Person');
    personSchema
        .addString('per_user_id')
        .addString('per_interests');
    personSchema.save();
    // Define schema for "subsidies"
    const subsidiesSchema = new node_1.default.Schema('Subsidy');
    subsidiesSchema
        .addString('sub_code_bdns')
        .addString('sub_administrative_entities')
        .addString('sub_registration_date')
        .addString('sub_title')
        .addString('sub_detail')
        .addString('sub_url');
    subsidiesSchema.save();
    // Define schema for "advices"
    const adviceSchema = new node_1.default.Schema('Advice');
    adviceSchema
        .addString('adv_interaction_Id')
        .addString('adv_interaction_type')
        .addString('adv_user_id')
        .addString('adv_timestamp')
        .addArray('adv_recommendations')
        .addString('adv_user_feedback');
    adviceSchema.save();
};
exports.schemaslocalizador_inteligente_de_oportunidades_de_negocio = schemaslocalizador_inteligente_de_oportunidades_de_negocio;
//# sourceMappingURL=index.js.map