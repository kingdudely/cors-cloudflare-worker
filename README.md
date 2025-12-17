# How to use (you can search up how to do some steps)
1. Go to https://dash.cloudflare.com and make a new account.
2. Create a new worker with the `Hello World` template.
3. Replace the `worker.js` script in the Cloudflare editor with the `worker.js` script in this GitHub repository.
4. Now, just get the URL of your worker and send requests to it like this:
   ```javascript
   const workerUrl = "YOUR_WORKER_URL";
   const url = "YOUR_URL";
   fetch(`${workerUrl}?url=${url}`, { ... });
   ```
