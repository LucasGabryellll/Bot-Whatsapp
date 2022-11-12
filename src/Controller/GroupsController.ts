import express, { Request, Response } from "express";

import client from '../Model/client';

export const getAllGroups = async (req: Request, res: Response) => {
  const groups = await client.clientConnneted().getAllGroups();

  try {
    return res.json(groups);
  } catch (error) {
    return res.status(404).json({ error: "Error", message: "Groups Not Found" });
  }
}
