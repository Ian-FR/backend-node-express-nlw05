import { Request, Response } from 'express';
import { SettingService } from '../services/SettingsService';

class SettingController {
  async create(request: Request, response: Response) {
    const { chat, username } = request.body;

    const settingsService = new SettingService();

    try {
      const settings = await settingsService.create({ chat, username });
      return response.json(settings);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }

  async findByUsername(req: Request, res: Response) {
    const { username } = req.params;
    const settingsService = new SettingService();
    const settings = await settingsService.finsByUsername(username);
    return res.json(settings);
  }

  async update(req: Request, res: Response) {
    const { username } = req.params;
    const { chat } = req.body;

    const settingsService = new SettingService();

    const settings = await settingsService.update(username, chat);

    return res.json(settings);
  }
}

export { SettingController };
