import Parse from 'parse/node';
import { createInterests,getAllInterests, deleteInterests, updateInterests, getInterestsById } from '../controllers/interestsControllers';

Parse.Cloud.define('getAllInterests', getAllInterests(Parse));
Parse.Cloud.define('getInterestsById', getInterestsById(Parse));
Parse.Cloud.define('createInterests', createInterests(Parse), { requireUser: true });
Parse.Cloud.define('updateInterests', updateInterests(Parse), { requireUser: true });
Parse.Cloud.define('deleteInterests', deleteInterests(Parse), { requireUser: true });