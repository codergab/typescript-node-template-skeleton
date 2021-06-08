import express from 'express';
import UserController from '../controllers/Users/UserController';
const Router = express.Router();

Router.get('/users', UserController.GetUsers);

export default Router;
