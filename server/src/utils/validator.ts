import { Message } from "../models/message";

export const validateMessage = (msg: Message): string | null => {
  if (!msg.name || msg.name.length < 2) {
    return "Name must be at least 2 characters";
  }
  if (!msg.message || msg.message.length < 2) {
    return "Message must be at least 2 characters";
  }
  const phoneRegex = /^\+375(29|33|44)\d{7}$|^80(29|33|44)\d{7}$/;
  if (!msg.phonenumber || !phoneRegex.test(msg.phonenumber)) {
    return "Invalid phone format";
  }
  return null;
};
