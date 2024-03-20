import Parse from 'parse/node';

export async function getAllPersonsData(page: number) {
  try {
    // Verificar si la página es nula o indefinida
    if (page === null || page === undefined) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Page number is missing.');
    }

    const Person = Parse.Object.extend('person');
    const query = new Parse.Query(Person);
    query.limit(5); // Limita los resultados a 5 por página
    query.skip((page - 1) * 5); // Salta los companys de las páginas anteriores
    const person = await query.find();

    if (!person || person.length === 0) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `No persons found.`);
    }

    return person;
  } catch (error) {
    throw error;
  }
}

export async function getPersonByIdData(personId: string) {
  try {
    // Verificar si personId es nulo o indefinido
    if (!personId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Person ID is missing.');
    }

    const Person = Parse.Object.extend('person');
    const query = new Parse.Query(Person);
    query.equalTo('objectId', personId);
    const person = await query.first();

    if (!person) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Person with ID ${personId} does not exist.`);
    }

    return person;
  } catch (error) {
    throw error;
  }
}

export async function createPersonData(objectData: any) {
  try {
    // Verificar si objectData existe
    if (!objectData) {
      throw {
        code: Parse.Error.OBJECT_NOT_FOUND,
        message: 'objectData is missing.',
      };
    }

    const Person = Parse.Object.extend('person');
    const person = new Person();

    for (const key in objectData) {
      if (objectData.hasOwnProperty(key)) {
        person.set(key, objectData[key]);
      }
    }

    await person.save();
    return person;
  } catch (error) {
    throw {
      code: error.code || Parse.Error.INTERNAL_SERVER_ERROR,
      message: error.message,
    };
  }
}

export async function updatePersonData(personId: string, objectData: any) {
  try {
    // Verificar si personId y objectData existen
    if (!personId || !objectData) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Person ID or objectData is missing.');
    }

    const Person = Parse.Object.extend('person');
    const query = new Parse.Query(Person);
    query.equalTo('objectId', personId);
    const person = await query.first();

    if (!person) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Person with ID ${personId} does not exist.`);
    }

    // Actualizar los campos permitidos
    for (const key in objectData) {
        person.set(key, objectData[key]);
    }
    await person.save(null, { useMasterKey: true });

    return person;
  } catch (error) {
    throw error;
  }
}

export async function deletePersonData(personId: string) {
  try {
    // Verificar si personId es nulo o indefinido
    if (!personId) {
      throw new Parse.Error(Parse.Error.INVALID_QUERY, 'Person ID is missing.');
    }

    const Person = Parse.Object.extend('person');
    const query = new Parse.Query(Person);
    query.equalTo('objectId', personId);
    const person = await query.first();

    if (!person) {
      throw new Parse.Error(Parse.Error.OBJECT_NOT_FOUND, `Person with ID ${personId} does not exist.`);
    }

    await person.destroy();
  } catch (error) {
    throw error;
  }
}