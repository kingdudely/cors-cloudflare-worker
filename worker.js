function addCorsHeaders(response) {
    const newResponse = new Response(response.body, response);
    const newHeaders = newResponse.headers;
    newHeaders.set("Access-Control-Allow-Origin", "*");
    newHeaders.set("Access-Control-Allow-Methods", "*");
    newHeaders.set("Access-Control-Allow-Headers", "*");

    return newResponse;
}

export default {
    async fetch(request) {
        try {
            if (request.method === "OPTIONS" && request.headers.has("Access-Control-Request-Method")) {
                return addCorsHeaders(new Response(null, {
                    status: 204
                }));
            }
    
            const urlParam = new URL(request.url).searchParams.get("url");
            if (!urlParam) {
                return addCorsHeaders(new Response("Missing '?url=...' URL parameter", {
                    status: 400
                }));
            }
            const targetUrl = new URL(decodeURIComponent(urlParam));
            const newRequest = new Request(targetUrl, request);
            const response = addCorsHeaders(await fetch(newRequest));

            return response;
        } catch (error) {
            return addCorsHeaders(new Response(error, {
                status: 500
            }));
        }
    }
}
