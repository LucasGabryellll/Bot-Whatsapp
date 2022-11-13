import { Router, Request, Response } from 'express';

import {
  sendMessage,
  statusConnection,
  sendMessageGroup
} from './Controller/MessageController';

import { getAllGroups } from './Controller/GroupsController';

const routes = Router();

/**
 * Rotas para Menssagem
 */

routes.get('/status', statusConnection);
routes.post('/sendMessage', sendMessage);
routes.post('/sendMessageGroup', sendMessageGroup);

/**
 * Rotas para Grupos
 */
routes.get('/allGroups', getAllGroups);

export default routes;