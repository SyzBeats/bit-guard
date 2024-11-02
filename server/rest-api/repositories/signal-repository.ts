import { prisma } from '../../database/prisma';


/**
 * Finds a signal by ID, selecting only specific fields.
 */
const getSignalById = async (id: string) => {
	try {

		// get the secret from the database
		return await prisma.signal.findUnique({
			where: { id },
			select: {
				content: true,
				id: true,
				type: true,
				extension: true,
				createdAt: true,
			},
		});
	} catch (error) {
		console.error('Error fetching signal:', error);
		throw new Error('Failed to retrieve signal');
	}
};

/**
 * Deletes a signal by ID.
 */
const deleteSignalById = async (id: string): Promise<void> => {
	try {
		await prisma.signal.delete({ where: { id } });
	} catch (error) {
		console.error('Error deleting signal:', error);
		throw new Error('Failed to delete signal');
	}
};

/** Retrieves a public signal by ID */
const getPublicSignalById = async (id: string) => {
	try {
		return await prisma.publicSignal.findUnique({
			where: { id },
			select: {
				id: true,
				title: true,
				content: true,
				type: true,
				extension: true,
			},
		});
	} catch (error) {
		console.error('Error fetching public signal:', error);
		throw new Error('Failed to retrieve public signal');
	}
};

/** Deletes a public signal by ID */
const deletePublicSignalById = async (id: string): Promise<void> => {
	try {
		await prisma.publicSignal.delete({ where: { id } });
	} catch (error) {
		console.error('Error deleting public signal:', error);
		throw new Error('Failed to delete public signal');
	}
};

export { getSignalById, deleteSignalById, getPublicSignalById, deletePublicSignalById };