import Parse from 'parse/node';
import { createUserNew, deleteUser, getUserById, getAllUsers, updateUser } from '../controllers/userControllers';

Parse.Cloud.define('getAllUsers', getAllUsers(Parse));
Parse.Cloud.define('getUserById', getUserById(Parse));
Parse.Cloud.define('createUser', createUserNew(Parse), { requireUser: true });
Parse.Cloud.define('deleteUser', deleteUser(Parse), { requireUser: true });
Parse.Cloud.define('updateUser', updateUser(Parse), { requireUser: true });