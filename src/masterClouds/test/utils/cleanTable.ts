/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-const */
export async function cleanTable(Parse: typeof globalThis.Parse, tablename: string) {
  let tableQuery;
  if (tablename === 'User') {
    tableQuery = new Parse.Query(Parse.User);
  } else {
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
