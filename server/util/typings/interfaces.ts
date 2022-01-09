import { Message } from '@prisma/client';

interface MessageToken {
  messageId: string;
  iat: number;
  exp: number;
}

interface ICreateLinkOutput {
  content: string;
  expiry: Date | null;
}

interface IDeleteLinkOutput {
  data: string;
  expiry: Date | null;
}

interface IOnteTimeMessage {
  message: Message;
  link: ICreateLinkOutput;
}

export { MessageToken, IOnteTimeMessage, ICreateLinkOutput, IDeleteLinkOutput };
