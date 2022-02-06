import { Message, Signal } from '@prisma/client';

interface MessageToken {
  messageId: string;
  iat: number;
  exp: number;
}

interface IcreateMessageLinkOutput {
  content: string;
  expiry: Date | null;
}

interface IDeleteLinkOutput {
  data: string;
  expiry: Date | null;
}

interface IcreateSignalLinkOutput {
  content: string;
}

interface ICreateSignalOutput {
  content: string;
}

interface IencryptAes256cbcOutput {
  encrypted: string;
  IV: string;
  key: string;
}

export {
  MessageToken,
  IcreateMessageLinkOutput,
  IcreateSignalLinkOutput,
  ICreateSignalOutput,
  IDeleteLinkOutput,
  IencryptAes256cbcOutput,
};
