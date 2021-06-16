import { Router } from 'express';

import { MessageController } from './controllers/MessageController';
import { SettingController } from './controllers/SettingsController';
import { UserController } from './controllers/UserController';

import appJson from '../package.json';
import { host } from './http';

const routes = Router();

const settingsController = new SettingController();
const userController = new UserController();
const messageController = new MessageController();

routes.get('/version', (_, res) =>
  res.json({ version: appJson.version, host: host })
);
routes.post('/settings', settingsController.create);
routes.get('/settings/:username', settingsController.findByUsername);
routes.put('/settings/:username', settingsController.update);
routes.post('/user', userController.create);
routes.post('/message', messageController.create);
routes.get('/message/:id', messageController.showByUser);

export { routes };
