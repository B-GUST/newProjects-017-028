/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import request from 'supertest';
import { app } from '../../index';
import { loginUser } from '../../cloud/Plataforma_Tecnol-gica_para_el_Entrenamiento_de_Habilidades_Directivas_a_Trav-s_de_Realidad_Vir/Test/utils/loginUser';
import { cleanTable } from './utils/cleanTable';
import Parse from 'parse/node';
describe('Create Table', () => {
  let sessionToken: string;
  let createTable: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);
  });

  describe('Pots /server/functions/registerTableFromJSON', () => {
    beforeAll(async () => {
      createTable = await request(app)
        .post('/server/functions/registerTableFromJSON')
        .set('X-Parse-Application-Id', '001')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          tableName: 'Test',
          data: {
            plate_name: 'nombre_del_plato_',
            plate_description: 'descripcion_del_plato',
            plate_img: 'url_del_plato',
            plate_type: 'tipo_de_plato',
            plate_state: 'estado_del_plato',
          },
        });
    });
    console.log(createTable);

    it('El estado de la respuesta es "success', async () => {
      expect(createTable.body.result.status).toBe('success');
    });

    it('La petición debería retornar un mensaje de éxito', async () => {
      expect(createTable.body.result.message).toBe('Table created successfully');
    });

    it('La respuesta contiene un objeto result', async () => {
      expect(createTable.body.result.result).toBe(true);
    });
  });

  afterEach(async () => {
    // Llama a la función de utilidad para limpiar la base de datos
    if (createTable.body.result) {
      await cleanTable(Parse, 'Test');
    }
  });
});
