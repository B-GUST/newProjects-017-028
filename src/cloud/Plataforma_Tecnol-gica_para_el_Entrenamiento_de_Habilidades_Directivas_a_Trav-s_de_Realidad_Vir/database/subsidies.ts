import Parse from 'parse/node';

export async function getAllSubsidiesData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const Subsidies = Parse.Object.extend('subsidies');
    const query = new Parse.Query(Subsidies);
    query.limit(5); // Limita los resultados a 5 por página
    query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
    const subsidies = await query.find();

    if (!subsidies || subsidies.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No subsidies found.`);
    }

    return subsidies;
  } catch (error) {
    throw error;
  }
}

export async function getSubsidiesByIdData(subsidiesId: string) {
  try {
    // Verificar si subsidiesId es nulo o indefinido
    if (!subsidiesId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Subsidies ID is missing.');
    }

    const Subsidies = Parse.Object.extend('subsidies');
    const query = new Parse.Query(Subsidies);
    query.equalTo('objectId', subsidiesId);
    const subsidies = await query.first();

    if (!subsidies) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `subsidies with ID ${subsidiesId} does not exist.`);
    }

    return subsidies;
  } catch (error) {
    throw error;
  }
}

export async function createSubsidiesData(objectData: any) {
  try {
    // Verificar si objectData existe
    if (!objectData) {
      throw {
        code: Parse.Error.OBJECT_NOT_FOUND,
        message: 'objectData is missing.',
      };
    }

    const Subsidies = Parse.Object.extend('subsidies');
    const subsidies = new Subsidies();

    for (const key in objectData) {
      if (objectData.hasOwnProperty(key)) {
        subsidies.set(key, objectData[key]);
      }
    }

    await subsidies.save();
    return subsidies;
  } catch (error) {
    throw {
      code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
      message: error.message,
    };
  }
}

export async function updateSubsidiesData(subsidiesId: string, objectData: any) {
  try {
    // Verificar si subsidiesId y objectData existen
    if (!subsidiesId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'subsidies ID or objectData is missing.');
    }

    const Subsidies = Parse.Object.extend('subsidies');
    const query = new Parse.Query(Subsidies);
    query.equalTo('objectId', subsidiesId);
    const subsidies = await query.first();

    if (!subsidies) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `subsidies with ID ${subsidiesId} does not exist.`);
    }

    // Actualizar los campos permitidos
    for (const key in objectData) {
        subsidies.set(key, objectData[key]);
    }
    await subsidies.save(null, { useMasterKey: true });

    return subsidies;
  } catch (error) {
    throw error;
  }
}

export async function deleteSubsidiesData(subsidiesId: string) {
  try {
    // Verificar si subsidiesId es nulo o indefinido
    if (!subsidiesId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'subsidies ID is missing.');
    }

    const Subsidies = Parse.Object.extend('subsidies');
    const query = new Parse.Query(Subsidies);
    query.equalTo('objectId', subsidiesId);
    const subsidies = await query.first();

    if (!subsidies) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `subsidies with ID ${subsidiesId} does not exist.`);
    }

    await subsidies.destroy();
  } catch (error) {
    throw error;
  }
}