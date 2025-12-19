export default {
	async fetch(request) {
		try {
			if (request.method === "OPTIONS" && request.headers.has("Access-Control-Request-Method")) {
				return new Response(null, {
					status: 204,
					headers: {
						"Access-Control-Allow-Origin": "*",
						"Access-Control-Allow-Methods": "*",
						"Access-Control-Allow-Headers": "*",
					}
				});
			}
	
			const searchParams = new URL(request.url).searchParams;
			const corsUrl = new URL(decodeURIComponent(searchParams.get("url")));

			const newRequest = new Request(corsUrl, request);
			return fetch(newRequest); // await?
		} catch (error) {
			return new Response(error, {
				status: 400
			});
		}
	}
}
