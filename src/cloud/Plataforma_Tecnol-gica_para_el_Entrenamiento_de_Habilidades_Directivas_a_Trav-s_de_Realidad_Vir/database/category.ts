import Parse from 'parse/node';

export async function getAllCategoryData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const category = Parse.Object.extend('category');
    const query = new Parse.Query(category);
    query.limit(5); // Limitar los resultados a 5 por página
    query.skip((page - 1) * 5); // Saltar los planes de comida de las páginas anteriores
    const data = await query.find();

    if (!data || data.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No category plans found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getCategoryByIdData(objectId: string) {
  try {
    // Verificar si el ID es nulo o indefinido
    if (!objectId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'category plan ID is missing.');
    }

    const category = Parse.Object.extend('category');
    const query = new Parse.Query(category);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `category plan with ID ${objectId} does not exist.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createCategoryData(objectData: any) {
  try {
    // Verificar si objectData existe
    if (!objectData) {
      throw {
        code: Parse.Error.OBJECT_NOT_FOUND,
        message: 'Object data is missing.',
      };
    }

    const category = Parse.Object.extend('category');
    const data = new category();

    // Establecer los datos del objeto
    for (const key in objectData) {
      if (objectData.hasOwnProperty(key)) {
        data.set(key, objectData[key]);
      }
    }

    await data.save();
    return data;
  } catch (error) {
    throw {
      code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
      message: error.message,
    };
  }
}

export async function updateCategoryData(objectId: string, objectData: any) {
  try {
    // Verificar si el ID y los datos del objeto existen
    if (!objectId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'category plan ID or object data is missing.');
    }

    const category = Parse.Object.extend('category');
    const query = new Parse.Query(category);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `category plan with ID ${objectId} does not exist.`);
    }

    // Actualizar los campos permitidos
    for (const key in objectData) {
      if (objectData.hasOwnProperty(key)) {
        data.set(key, objectData[key]);
      }
    }

    await data.save(null, { useMasterKey: true });

    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteCategoryData(objectId: string) {
  try {
    // Verificar si el ID es nulo o indefinido
    if (!objectId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'category plan ID is missing.');
    }

    const category = Parse.Object.extend('category');
    const query = new Parse.Query(category);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `category plan with ID ${objectId} does not exist.`);
    }

    await data.destroy();
  } catch (error) {
    throw error;
  }
}