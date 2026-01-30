export default defineEventHandler(async (event) => {
	return {
		status: 'ok',
		message: 'API is running',
		timestamp: new Date().toISOString(),
	};
});
