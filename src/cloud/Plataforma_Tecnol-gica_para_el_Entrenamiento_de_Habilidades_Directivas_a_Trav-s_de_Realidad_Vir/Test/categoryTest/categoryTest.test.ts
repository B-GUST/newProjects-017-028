/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Category tests', () => {
  let sessionToken: string;
  let createCategoryResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createCategoryResponse = await request(app)
      .post('/server/functions/createCategory')
      .set('X-Parse-Application-Id', '018')
      .set('X-Parse-Session-Token', sessionToken)
      .send({
        objectData: {
            rou_name: "Nombre de la Rutina",
        rou_descrip: "Descripción de la rutina",
        rou_type: "Tipo de Ejercicio (Cardiovascular, Entrenamiento de Fuerza, Flexibilidad, etc.)",
        rou_time: "Duración de la rutina",
        rou_intensity: "Intensidad de la rutina",
        rou_level: "nivel de Dificultad",
        rou_objectives: "Objetivos (Adelgazar, Incrementar Masa Muscular, Mantener Rutina)"
         },
      });
  });

  describe('Create Category', () => {
    it('The response status is "success"', async () => {
      expect(createCategoryResponse.body.result.status).toBe('success');
    });

    it('The request should bring a Category object', async () => {
      expect(createCategoryResponse.body.result).toHaveProperty('category');
    });

    it('The response contains a result object', async () => {
      expect(createCategoryResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllCategory', () => {
    let getAllCategoryResponse: any;
    beforeAll(async () => {
      getAllCategoryResponse = await request(app)
        .post('/server/functions/getAllCategory')
        .set('X-Parse-Application-Id', '018')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllCategoryResponse.body.result.status).toBe('success');
    });

    it('should return an array of Category', async () => {
      expect(getAllCategoryResponse.body.result).toHaveProperty('category');
    });

    it('the response from getAllCategory should contain an array of Category', async () => {
      expect(Array.isArray(getAllCategoryResponse.body.result.category)).toBe(true);
    });
  });

  describe('getCategoryById', () => {
    let getCategoryResponse: any;
    beforeAll(async () => {
      getCategoryResponse = await request(app)
        .post('/server/functions/getCategoryById')
        .set('X-Parse-Application-Id', '018')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          personId: createCategoryResponse.body.result.category.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getCategoryResponse.body.result.status).toBe('success');
    });

    it('should return a Category object', async () => {
      expect(getCategoryResponse.body.result).toHaveProperty('category');
    });

    it('the response contains a Category object', async () => {
      expect(getCategoryResponse.body.result.category).toBeInstanceOf(Object);
    });
  });

  describe('Delete Category', () => {
    let deleteCategoryResponse: any;
    beforeAll(async () => {
      deleteCategoryResponse = await request(app)
        .post('/server/functions/deleteCategory')
        .set('X-Parse-Application-Id', '018')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          personId: createCategoryResponse.body.result.category.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteCategoryResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteCategoryResponse.body.result.result).toBe(true);
    });
  });
  afterAll(() => {
    httpServer.close();
  });
});