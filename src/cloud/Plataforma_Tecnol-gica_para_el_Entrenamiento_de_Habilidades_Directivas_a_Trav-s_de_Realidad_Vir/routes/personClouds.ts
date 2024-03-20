import Parse from 'parse/node';
import { createPerson, deletePerson, getPersonById, getAllPersons, updatePerson } from '../controllers/personControllers';

Parse.Cloud.define('getAllPeople', getAllPersons(Parse));
Parse.Cloud.define('getPersonById', getPersonById(Parse));
Parse.Cloud.define('createPerson', createPerson(Parse), { requireUser: true });
Parse.Cloud.define('updatePerson', updatePerson(Parse), { requireUser: true });
Parse.Cloud.define('deletePerson', deletePerson(Parse), { requireUser: true });