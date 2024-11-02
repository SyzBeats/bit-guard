interface IMessageToken {
	messageId: string;
	iat: number;
	exp: number;
}

interface ICreateMessageLinkOutput {
	content: string;
	expiry?: Date | null;
}

interface IDeleteLinkOutput {
	data: string;
	expiry: Date | null;
}

interface ICreateSignalLinkOutput {
	content: string;
}

interface ICreateSignalOutput {
	title: string;
	id: string;
	createdAt: Date;
	link: ICreateSignalLinkOutput;
}

interface IEncryptAes256cbcOutput {
	encrypted: string;
	IV: string;
	key: string;
}

export {
	IMessageToken,
	ICreateMessageLinkOutput,
	ICreateSignalLinkOutput,
	ICreateSignalOutput,
	IDeleteLinkOutput,
	IEncryptAes256cbcOutput,
};
