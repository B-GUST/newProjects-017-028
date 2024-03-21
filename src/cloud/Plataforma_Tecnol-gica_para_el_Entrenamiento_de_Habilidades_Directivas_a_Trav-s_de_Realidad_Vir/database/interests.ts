import Parse from 'parse/node';

export async function getAllInterestsData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const interests = Parse.Object.extend('interests');
    const query = new Parse.Query(interests);
    query.limit(5); // Limitar los resultados a 5 por página
    query.skip((page - 1) * 5); // Saltar los planes de comida de las páginas anteriores
    const data = await query.find();

    if (!data || data.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No interests plans found.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function getInterestsByIdData(objectId: string) {
  try {
    // Verificar si el ID es nulo o indefinido
    if (!objectId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'interests plan ID is missing.');
    }

    const interests = Parse.Object.extend('interests');
    const query = new Parse.Query(interests);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `interests plan with ID ${objectId} does not exist.`);
    }

    return data;
  } catch (error) {
    throw error;
  }
}

export async function createInterestsData(objectData: any) {
  try {
    // Verificar si objectData existe
    if (!objectData) {
      throw {
        code: Parse.Error.OBJECT_NOT_FOUND,
        message: 'Object data is missing.',
      };
    }

    const interests = Parse.Object.extend('interests');
    const data = new interests();

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

export async function updateInterestsData(objectId: string, objectData: any) {
  try {
    // Verificar si el ID y los datos del objeto existen
    if (!objectId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'interests plan ID or object data is missing.');
    }

    const interests = Parse.Object.extend('interests');
    const query = new Parse.Query(interests);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `interests plan with ID ${objectId} does not exist.`);
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

export async function deleteInterestsData(objectId: string) {
  try {
    // Verificar si el ID es nulo o indefinido
    if (!objectId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'interests plan ID is missing.');
    }

    const interests = Parse.Object.extend('interests');
    const query = new Parse.Query(interests);
    query.equalTo('objectId', objectId);
    const data = await query.first();

    if (!data) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `interests plan with ID ${objectId} does not exist.`);
    }

    await data.destroy();
  } catch (error) {
    throw error;
  }
}