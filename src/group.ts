import { Request, Response } from 'express';
import { create, Whatsapp, Message, SocketState } from "venom-bot";

export const getAll_Groups = async (req: Request, res: Response) => {
    const client = Whatsapp;
    
}