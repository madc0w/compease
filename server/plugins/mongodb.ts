import { connectToDatabase } from '~/server/utils/mongodb';

export default defineNitroPlugin(async (nitroApp) => {
	try {
		await connectToDatabase();
		console.log('MongoDB connected via Nitro plugin');
	} catch (error) {
		console.error('Failed to connect to MongoDB:', error);
	}
});
