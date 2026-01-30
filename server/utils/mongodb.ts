import mongoose from 'mongoose';

let isConnected = false;

export async function connectToDatabase(): Promise<typeof mongoose> {
	const config = useRuntimeConfig();

	if (isConnected) {
		console.log('Using existing database connection');
		return mongoose;
	}

	try {
		const mongoUri = config.mongodbUri;

		if (!mongoUri) {
			throw new Error('MONGODB_URI is not defined');
		}

		const db = await mongoose.connect(mongoUri, {
			bufferCommands: false,
		});

		isConnected = true;
		console.log('Database connected successfully');

		return db;
	} catch (error) {
		console.error('Database connection error:', error);
		throw error;
	}
}

export function disconnectFromDatabase(): Promise<void> {
	if (!isConnected) {
		return Promise.resolve();
	}

	return mongoose.disconnect().then(() => {
		isConnected = false;
		console.log('Database disconnected');
	});
}
