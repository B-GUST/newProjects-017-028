import Parse from 'parse/node';
import { createCategory,getAllCategory, deleteCategory, updateCategory, getCategoryById } from '../controllers/categoryControllers';

Parse.Cloud.define('getAllCategory', getAllCategory(Parse));
Parse.Cloud.define('getCategoryById', getCategoryById(Parse));
Parse.Cloud.define('createCategory', createCategory(Parse), { requireUser: true });
Parse.Cloud.define('updateCategory', updateCategory(Parse), { requireUser: true });
Parse.Cloud.define('deleteCategory', deleteCategory(Parse), { requireUser: true });