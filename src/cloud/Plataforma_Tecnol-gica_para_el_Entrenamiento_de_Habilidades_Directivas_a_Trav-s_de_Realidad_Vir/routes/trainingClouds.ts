import Parse from 'parse/node';
import { createTraining,getAllTraining, deleteTraining, updateTraining, getTrainingById } from '../controllers/trainingControllers';

Parse.Cloud.define('getAllTraining', getAllTraining(Parse));
Parse.Cloud.define('getTrainingById', getTrainingById(Parse));
Parse.Cloud.define('createTraining', createTraining(Parse), { requireUser: true });
Parse.Cloud.define('updateTraining', updateTraining(Parse), { requireUser: true });
Parse.Cloud.define('deleteTraining', deleteTraining(Parse), { requireUser: true });