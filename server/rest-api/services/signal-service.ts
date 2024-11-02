// service-signal.ts
import utility from '../../utility';
import {
	deletePublicSignalById,
	deleteSignalById,
	getPublicSignalById,
	getSignalById,
} from '../repositories/signal-repository';

interface DecryptAndDestroyResult {
	message: string;
	type: string;
	extension: string | null;
}

interface DecryptAndDestroyPublicResult {
	message: string;
	title: string;
	type: string;
	extension: string | null;
}

/**
 * Decrypts the content of a signal and deletes it from the database.
 */
const decryptAndDestroySignal = async (id: string, key: string): Promise<DecryptAndDestroyResult> => {
	const signal = await getSignalById(id);

	if (!signal) {
		throw new Error('We could not find the Secret you were looking for.');
	}

	const message = utility.encryption.decryptAes256cbc(signal.content, key);

	await deleteSignalById(id);

	return {
		message,
		type: signal.type,
		extension: signal.extension,
	};
};

/** Decrypts the content of a public signal and deletes it from the database */
const decryptAndDestroyPublicSignal = async (id: string, key: string): Promise<DecryptAndDestroyPublicResult> => {
	const signal = await getPublicSignalById(id);

	if (!signal) {
		throw new Error('We could not find the Secret you were looking for.');
	}

	const message = utility.encryption.decryptAes256cbc(signal.content, key);

	await deletePublicSignalById(id);

	return {
		message,
		title: signal.title,
		type: signal.type,
		extension: signal.extension,
	};
};

export { decryptAndDestroySignal, decryptAndDestroyPublicSignal };