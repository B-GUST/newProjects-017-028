import Parse from 'parse/node';
import { createSubsidies, deleteSubsidies, getSubsidiesById, getAllSubsidies, updateSubsidies } from '../controllers/subsidiesControllers';


Parse.Cloud.define('getAllSubsidies', getAllSubsidies(Parse));
Parse.Cloud.define('getSubsidiesById', getSubsidiesById(Parse));
Parse.Cloud.define('createSubsidies', createSubsidies(Parse), { requireUser: true });
Parse.Cloud.define('updateSubsidies', updateSubsidies(Parse), { requireUser: true });
Parse.Cloud.define('deleteSubsidies', deleteSubsidies(Parse), { requireUser: true });