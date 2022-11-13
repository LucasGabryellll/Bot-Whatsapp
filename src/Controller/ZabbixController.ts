import { Request, Response } from 'express';

import { getNewTrigger } from '../utils/RequestTriggers';
import TIMESTAMPNOW from '../utils/timestampNow';

export const newTrigger = async (req: Request, res: Response) => {
  const timestampNow = TIMESTAMPNOW();
  const data = await getNewTrigger(timestampNow);

  try {
    return res.json(data);
  } catch (error) {
    return res.status(404).json({ error: "Error", message: "Triggers not found!" });
  }
}