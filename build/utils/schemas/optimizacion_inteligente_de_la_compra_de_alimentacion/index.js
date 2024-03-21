"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemasOptimizacion_inteligente_de_la_compra_de_alimentacion = void 0;
const node_1 = __importDefault(require("parse/node"));
const schemasOptimizacion_inteligente_de_la_compra_de_alimentacion = async () => {
    // Define schema for "users"
    const userSchema = new node_1.default.Schema('User');
    userSchema
        .addString('user_interests')
        .addString('user_timestamp')
        .addString('user_pass_hash')
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
    // Define schema for "store"
    const storeSchema = new node_1.default.Schema('Store');
    storeSchema
        .addString('name')
        .addString('description')
        .addString('location')
        .addString('contact')
        .addString('social_media');
    storeSchema.save();
    // Define schema for "purchases"
    const purchasesSchema = new node_1.default.Schema('Purchases');
    purchasesSchema
        .addString('user_id')
        .addString('product_id')
        .addString('amount')
        .addString('date')
        .addString('price');
    purchasesSchema.save();
    // Define schema for "inventory"
    const inventorySchema = new node_1.default.Schema('Inventory');
    inventorySchema
        .addString('user_id')
        .addString('product_id')
        .addString('amount')
        .addString('expiration_date');
    inventorySchema.save();
    // Define schema for "recipes"
    const recipesSchema = new node_1.default.Schema('Recipes');
    recipesSchema
        .addString('name')
        .addString('ingredients')
        .addString('preparation')
        .addString('nutritional_values')
        .addString('calories')
        .addString('image');
    recipesSchema.save();
    // Define schema for "analysis_Data"
    const analysisDataSchema = new node_1.default.Schema('AnalysisData');
    analysisDataSchema
        .addString('user_id')
        .addString('analysis_type')
        .addString('data')
        .addString('date');
    analysisDataSchema.save();
    // Define schema for "generated_shopping_lists"
    const generatedShoppingListsSchema = new node_1.default.Schema('GeneratedShoppingLists');
    generatedShoppingListsSchema
        .addString('user_id')
        .addString('list')
        .addString('creation_date');
    generatedShoppingListsSchema.save();
    // Define schema for "history_prices_offers"
    const historyPricesOffersSchema = new node_1.default.Schema('HistoryPricesOffers');
    historyPricesOffersSchema
        .addString('product_id')
        .addString('price')
        .addString('offer')
        .addString('store_id')
        .addString('date_update');
    historyPricesOffersSchema.save();
    // Define schema for "recommendations"
    const recommendationsSchema = new node_1.default.Schema('Recommendations');
    recommendationsSchema
        .addString('user_id')
        .addString('type')
        .addString('data')
        .addString('date');
    recommendationsSchema.save();
    // Define schema for "patterns_purchase_consumption"
    const patternsPurchaseConsumptionSchema = new node_1.default.Schema('PatternsPurchaseConsumption');
    patternsPurchaseConsumptionSchema
        .addString('user_id')
        .addString('type')
        .addString('pattern')
        .addString('date_update');
    patternsPurchaseConsumptionSchema.save();
};
exports.schemasOptimizacion_inteligente_de_la_compra_de_alimentacion = schemasOptimizacion_inteligente_de_la_compra_de_alimentacion;
//# sourceMappingURL=index.js.map