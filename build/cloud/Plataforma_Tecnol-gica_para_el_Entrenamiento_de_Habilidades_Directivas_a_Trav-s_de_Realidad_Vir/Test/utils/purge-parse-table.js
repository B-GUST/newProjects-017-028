"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanDataBase = void 0;
async function cleanDataBase(Parse, tablename, objectId) {
    let tableQuery;
    if (tablename === 'User') {
        tableQuery = new Parse.Query(Parse.User);
    }
    else {
        tableQuery = new Parse.Query(tablename);
    }
    // Busca el objeto por su ID
    tableQuery.equalTo('objectId', objectId);
    const item = await tableQuery.first({ useMasterKey: true });
    if (item) {
        // Si el objeto existe, lo elimina
        await item.destroy({ useMasterKey: true });
    }
}
exports.cleanDataBase = cleanDataBase;
//# sourceMappingURL=purge-parse-table.js.map