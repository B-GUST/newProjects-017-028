/* eslint-disable etc/no-commented-out-code */
/* eslint-disable @typescript-eslint/no-explicit-any */

import request from 'supertest';

import { app, httpServer } from '../../../../index';

import { loginUser } from '../utils/loginUser';

describe('Interests tests', () => {
  let sessionToken: string;
  let createInterestsResponse: any;

  beforeAll(async () => {
    sessionToken = await loginUser(request, app);

    createInterestsResponse = await request(app)
      .post('/server/functions/createInterests')
      .set('X-Parse-Application-Id', '004')
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

  describe('Create Interests', () => {
    it('The response status is "success"', async () => {
      expect(createInterestsResponse.body.result.status).toBe('success');
    });

    it('The request should bring a Interests object', async () => {
      expect(createInterestsResponse.body.result).toHaveProperty('interests');
    });

    it('The response contains a result object', async () => {
      expect(createInterestsResponse.body.result.result).toBe(true);
    });
  });

  describe('getAllInterests', () => {
    let getAllInterestsResponse: any;
    beforeAll(async () => {
      getAllInterestsResponse = await request(app)
        .post('/server/functions/getAllInterests')
        .set('X-Parse-Application-Id', '018')
        .send({
          page: 1,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getAllInterestsResponse.body.result.status).toBe('success');
    });

    it('should return an array of Interests', async () => {
      expect(getAllInterestsResponse.body.result).toHaveProperty('interests');
    });

    it('the response from getAllInterests should contain an array of Interests', async () => {
      expect(Array.isArray(getAllInterestsResponse.body.result.interests)).toBe(true);
    });
  });

  describe('getInterestsById', () => {
    let getInterestsResponse: any;
    beforeAll(async () => {
      getInterestsResponse = await request(app)
        .post('/server/functions/getInterestsById')
        .set('X-Parse-Application-Id', '004')
        .set('X-Parse-Session-Token', sessionToken)
        .query({
          personId: createInterestsResponse.body.result.interests.objectId,
        });
    });

    it('should have a response status of "success"', async () => {
      expect(getInterestsResponse.body.result.status).toBe('success');
    });

    it('should return a Interests object', async () => {
      expect(getInterestsResponse.body.result).toHaveProperty('interests');
    });

    it('the response contains a Interests object', async () => {
      expect(getInterestsResponse.body.result.interests).toBeInstanceOf(Object);
    });
  });

  describe('Delete Interests', () => {
    let deleteInterestsResponse: any;
    beforeAll(async () => {
      deleteInterestsResponse = await request(app)
        .post('/server/functions/deleteInterests')
        .set('X-Parse-Application-Id', '004')
        .set('X-Parse-Session-Token', sessionToken)
        .send({
          personId: createInterestsResponse.body.result.interests.objectId,
        });
    });

    it('The response status is "success"', async () => {
      expect(deleteInterestsResponse.body.result.status).toBe('success');
    });

    it('The response contains a result object', async () => {
      expect(deleteInterestsResponse.body.result.result).toBe(true);
    });
  });
  afterAll(() => {
    httpServer.close();
  });
});