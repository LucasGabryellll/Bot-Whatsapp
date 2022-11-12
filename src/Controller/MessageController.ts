import parserPhoneNumber, { isValidPhoneNumber } from 'libphonenumber-js';
import express, { Request, Response } from "express";

import sender from '../Model/client';

export const sendMessage = async (req: Request, res: Response) => {
  const { number, message } = req.body;

  if (!isValidPhoneNumber(number, "BR")) {
    throw new Error('This number is not valid');
  }

  let phoneNumber = parserPhoneNumber(number, "BR")?.format("E.164")?.replace("+", "") as string;

  phoneNumber = phoneNumber.includes("@c.us") ? phoneNumber : `${phoneNumber}@c.us`;

  try {
    sender.clientConnneted().sendText(phoneNumber, message);

    return res.status(200).json({ message: "Message Sent Successfully" })

  } catch (error) {
    return res.status(404).json({ message: error })

  }

}

export const statusConnection = (req: Request, res: Response) => {
  return res.send({
    qr_code: sender.qrCode,
    connectd: sender.isConnected
  });
}

export const sendMessageGroup = async (req: Request, res: Response) => {
  const { groupId, message } = req.body;

  try {
    await sender.clientConnneted().sendText(groupId, message);

    return res.json({ message: "Message Sent Successfully" });

  } catch (error) {
    return res.status(404).json({ message: "Error Sending Message, Check Group ID" })
  }
}

export const sendMensageTrigger = async(message: string) => {
  await sender.clientConnneted().sendText("120363044262730748@g.us", message);
}