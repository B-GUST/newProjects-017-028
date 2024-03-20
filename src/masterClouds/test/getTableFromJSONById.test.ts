/* eslint-disable etc/no-commented-out-code */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from 'supertest';
import { app } from '../../index';
import { loginUser } from '../../cloud/localizador_inteligente_de_oportunidades_de_negocio/Test/utils/loginUser';
import { cleanTable } from './utils/cleanTable';
import Parse from 'parse/node';
describe('Get Table From Json By Id', () => {
  let sessionToken: string;
  let createTable: any;
  let getTableFromJSONById: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);
    createTable = await request(app)
      .post('/server/functions/registerTableFromJSON')
      .set('X-Parse-Application-Id', '001')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        tableName: 'Test10',
        data: {
          plate_name: 'nombre_del_plato_',
          plate_description: 'descripcion_del_plato',
          plate_img: 'url_del_plato',
          plate_type: 'tipo_de_plato',
          plate_state: 'estado_del_plato',
        },
      });
  });

  describe('Pots /server/functions/getTableFromJSONById', () => {
    beforeAll(async () => {
      getTableFromJSONById = await request(app)
        .post('/server/functions/getTableFromJSONById')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          tableName: 'Test10',
          tableFromJSONId: createTable.body.result.store.objectId,
        });
    });

    it('El estado de la respuesta es "success', async () => {
      expect(getTableFromJSONById.body.result.status).toBe('success');
    });

    it('La petición debería retornar un objeto store', async () => {
      expect(getTableFromJSONById.body.result).toHaveProperty('store');
    });

    it('La respuesta contiene un objeto result', async () => {
      expect(getTableFromJSONById.body.result.result).toBe(true);
    });
  });

  afterEach(async () => {
    // Llama a la función de utilidad para limpiar la base de datos
    if (createTable.body.result) {
      await cleanTable(Parse, 'Test10');
    }
  });
});
