"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaEntrenador_personal_inteligente = void 0;
const node_1 = __importDefault(require("parse/node"));
const schemaEntrenador_personal_inteligente = async () => {
    // Define schema for "users"
    const userSchema = new node_1.default.Schema('User');
    userSchema
        .addString('username')
        .addString('email')
        .addString('password')
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
        .addString('per_interests')
        .addString('per_imc');
    personSchema.save();
    // Define schema for "routine"
    const routineSchema = new node_1.default.Schema('Routine');
    routineSchema
        .addString('rou_name')
        .addString('rou_descrip')
        .addString('rou_type')
        .addString('rou_time')
        .addString('rou_intensity')
        .addString('rou_level')
        .addString('rou_objectives');
    routineSchema.save();
    // Define schema for "food_plan"
    const foodPlanSchema = new node_1.default.Schema('FoodPlan');
    foodPlanSchema
        .addString('food_name')
        .addString('food_description')
        .addString('food_diet')
        .addString('food_hours')
        .addString('food_recipes')
        .addString('food_objectives');
    foodPlanSchema.save();
    // Define schema for "advices"
    const adviceSchema = new node_1.default.Schema('Advice');
    adviceSchema
        .addString('adv_interaction_Id')
        .addString('adv_interaction_type')
        .addString('adv_user_id')
        .addString('adv_timestamp')
        .addArray('adv_recommendations')
        .addArray('adv_user_feedback');
    adviceSchema.save();
};
exports.schemaEntrenador_personal_inteligente = schemaEntrenador_personal_inteligente;
//# sourceMappingURL=index.js.map