import utility from '../../utility';
import { signalRepository } from '../repositories';
import { IDecryptAndDestroyPublicResult, IDecryptAndDestroyResult } from '../../types';


/**
 * Decrypts the content of a signal and deletes it from the database.
 */
const decryptAndDestroySignal = async (id: string, key: string): Promise<IDecryptAndDestroyResult> => {
	const signal = await signalRepository.getSignalById(id);

	if (!signal) {
		throw new Error('We could not find the Secret you were looking for.');
	}

	const message = utility.encryption.decryptAes256cbc(signal.content, key);

	await signalRepository.deleteSignalById(id);

	return {
		message,
		type: signal.type,
		extension: signal.extension,
	};
};

/** Decrypts the content of a public signal and deletes it from the database */
const decryptAndDestroyPublicSignal = async (id: string, key: string): Promise<IDecryptAndDestroyPublicResult> => {
	const signal = await signalRepository.getPublicSignalById(id);

	if (!signal) {
		throw new Error('We could not find the Secret you were looking for.');
	}

	const message = utility.encryption.decryptAes256cbc(signal.content, key);

	await signalRepository.deletePublicSignalById(id);

	return {
		message,
		title: signal.title,
		type: signal.type,
		extension: signal.extension,
	};
};

export { decryptAndDestroySignal, decryptAndDestroyPublicSignal };