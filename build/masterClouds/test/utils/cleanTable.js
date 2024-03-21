"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanTable = void 0;
/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-const */
async function cleanTable(Parse, tablename) {
    let tableQuery;
    if (tablename === 'User') {
        tableQuery = new Parse.Query(Parse.User);
    }
    else {
        tableQuery = new Parse.Query(tablename);
    }
    // Busca todos los objetos en la tabla
    const items = await tableQuery.findAll({ useMasterKey: true });
    // Si hay objetos, los elimina
    if (items.length > 0) {
        for (let item of items) {
            await item.destroy({ useMasterKey: true });
        }
    }
}
exports.cleanTable = cleanTable;
//# sourceMappingURL=cleanTable.js.map