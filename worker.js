export default {
	async fetch(request) {
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

		const url = new URL(request.url);
		const urlParam = url.searchParams.get("url");

		if (!urlParam) {
			return new Response("Missing ?url=...", {
				status: 400
			});
		}

		const newRequest = new Request(urlParam, request)
		return await fetch(newRequest);
	}
}
