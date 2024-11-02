import { Request, Response } from 'express';

import { decryptAndDestroyPublicSignal, decryptAndDestroySignal } from '../../services/signal-service';

const decryptAndDestroy = async (req: Request, res: Response): Promise<Response> => {
	const { id } = req.params;
	const { key } = req.query;

	if (typeof key !== 'string') {
		return res.status(400).json({ message: 'The provided key needs to be a string' });
	}

	try {
		const result = await decryptAndDestroySignal(id, key);

		return res.status(200).json(result);
	} catch (error) {
		return res.status(500).json({
			message: error.message,
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

/**
 * Handles the HTTP request to decrypt and delete a public signal
 */
const decryptAndDestroyPublic = async (req: Request, res: Response): Promise<Response> => {
	const { id } = req.params;
	const { key } = req.query;

	if (typeof key !== 'string') {
		return res.status(400).json({ message: 'The provided key needs to be a string' });
	}

	try {
		const result = await decryptAndDestroyPublicSignal(id, key);

		return res.status(200).json(result);
	} catch (error) {
		const statusCode = error.message.includes('does not exist') ? 404 : 500;

		return res.status(statusCode).json({
			message: error.message,
			error: error instanceof Error ? error.message : 'Unknown error',
		});
	}
};

export default {
	decryptAndDestroy,
	decryptAndDestroyPublic,
};