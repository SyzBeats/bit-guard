import * as jwt from 'jsonwebtoken';
import { Request, Response } from 'express';

import * as keys from '../../../config/keys';
import * as apiService from '../../services';
import utility from '../../../utility';
import { IMessageToken, isMessageToken } from '../../../types';

const decipher = async (req: Request, res: Response): Promise<Response> => {
	try {
		const { cipher } = req.params;

		const token = utility.encryption.decryptAes256cbc(cipher);

		const data = jwt.verify(token, keys.JWT_TOKEN_SIGNATURE) as IMessageToken;

		if (!isMessageToken(data)) {
			return res.status(500).json({ message: 'something went wrong' });
		}

		const message = await apiService.link.findAndDecrypt(data);

		if (!message) {
			return res.status(404).json({ message: 'We could not find the message content' });
		}

		return res.status(200).send(message);
	} catch (error) {
		return res.status(500).json({
			message: 'Something went horribly wrong here. We are sorry!',
			error: error.message,
		});
	}
};

export default {
	decipher,
};
