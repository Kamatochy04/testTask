import { PrismaClient } from "@prisma/client";
import { Message } from "../models/message";

const prisma = new PrismaClient();

export const saveMessage = async (msg: Message) => {
  try {
    await prisma.message.create({
      data: {
        name: msg.name,
        phone: msg.phonenumber,
        message: msg.message,
      },
    });
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
};
