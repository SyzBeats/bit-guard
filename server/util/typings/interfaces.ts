interface MessageToken {
  messageId: string;
  iat: number;
  exp: number;
}

interface IcreateMessageLinkOutput {
  content: string;
  expiry?: Date | null;
}

interface IDeleteLinkOutput {
  data: string;
  expiry: Date | null;
}

interface IcreateSignalLinkOutput {
  content: string;
}

interface ICreateSignalOutput {
  title: string;
  id: string;
  createdAt: Date;
  link: IcreateSignalLinkOutput;
}

interface IencryptAes256cbcOutput {
  encrypted: string;
  IV: string;
  key: string;
}

export { MessageToken, IcreateMessageLinkOutput, IcreateSignalLinkOutput, ICreateSignalOutput, IDeleteLinkOutput, IencryptAes256cbcOutput };
