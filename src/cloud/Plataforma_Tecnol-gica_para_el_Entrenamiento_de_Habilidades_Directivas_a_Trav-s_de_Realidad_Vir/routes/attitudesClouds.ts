import Parse from 'parse/node';
import { createAttitudes,getAllAttitudes, deleteAttitudes, updateAttitudes, getAttitudesById } from '../controllers/attitudesControllers';

Parse.Cloud.define('getAllAttitudes', getAllAttitudes(Parse));
Parse.Cloud.define('getAttitudesById', getAttitudesById(Parse));
Parse.Cloud.define('createAttitudes', createAttitudes(Parse), { requireUser: true });
Parse.Cloud.define('updateAttitudes', updateAttitudes(Parse), { requireUser: true });
Parse.Cloud.define('deleteAttitudes', deleteAttitudes(Parse), { requireUser: true });