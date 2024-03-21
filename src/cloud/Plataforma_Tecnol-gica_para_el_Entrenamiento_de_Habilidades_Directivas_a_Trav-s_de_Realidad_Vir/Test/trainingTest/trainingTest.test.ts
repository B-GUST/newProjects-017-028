/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Training tests', () => {
  let sessionToken: string;
  let createTrainingResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createTrainingResponse = await request(app)
      .post('/server/functions/createTraining')
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

  describe('Create Training', () => {
    it('The response status is "success"', async () => {
      expect(createTrainingResponse.body.result.status).toBe('success');
    });

    it('The request should bring a Training object', async () => {
      expect(createTrainingResponse.body.result).toHaveProperty('training');
    });

    it('The response contains a result object', async () => {
      expect(createTrainingResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllTraining', () => {
    let getAllTrainingResponse: any;
    beforeAll(async () => {
      getAllTrainingResponse = await request(app)
        .post('/server/functions/getAllTraining')
        .set('X-Parse-Application-Id', '018')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllTrainingResponse.body.result.status).toBe('success');
    });

    it('should return an array of Training', async () => {
      expect(getAllTrainingResponse.body.result).toHaveProperty('training');
    });

    it('the response from getAllTraining should contain an array of Training', async () => {
      expect(Array.isArray(getAllTrainingResponse.body.result.training)).toBe(true);
    });
  });

  describe('getTrainingById', () => {
    let getTrainingResponse: any;
    beforeAll(async () => {
      getTrainingResponse = await request(app)
        .post('/server/functions/getTrainingById')
        .set('X-Parse-Application-Id', '004')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          personId: createTrainingResponse.body.result.training.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getTrainingResponse.body.result.status).toBe('success');
    });

    it('should return a Training object', async () => {
      expect(getTrainingResponse.body.result).toHaveProperty('training');
    });

    it('the response contains a Training object', async () => {
      expect(getTrainingResponse.body.result.training).toBeInstanceOf(Object);
    });
  });

  describe('Delete Training', () => {
    let deleteTrainingResponse: any;
    beforeAll(async () => {
      deleteTrainingResponse = await request(app)
        .post('/server/functions/deleteTraining')
        .set('X-Parse-Application-Id', '004')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          personId: createTrainingResponse.body.result.training.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteTrainingResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteTrainingResponse.body.result.result).toBe(true);
    });
  });
  afterAll(() => {
    httpServer.close();
  });
});