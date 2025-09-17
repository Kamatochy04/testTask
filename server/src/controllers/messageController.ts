import { Request, Response } from "express";
import { validateMessage } from "../utils/validator";
import { saveMessage } from "../services/messageService";

export const createMessage = async (req: Request, res: Response) => {
  const { name, phonenumber, message } = req.body;

  const validationError = validateMessage({ name, phonenumber, message });
  if (validationError) {
    return res.status(400).json({ error: validationError });
  }
  try {
    await saveMessage({ name, phonenumber, message });
    res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
