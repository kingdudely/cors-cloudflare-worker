# How to use (you can search up how to do some steps)
1. Go to https://dash.cloudflare.com and make a new account.
2. In the `Account Home` tab on the left hand side - you probably are there already - create a new worker by clicking on <img width="188" height="47" alt="image" src="https://github.com/user-attachments/assets/4a2dfcae-2fad-4e1d-9b37-c0d72b7ae822" />

3. Now, click on <img width="457" height="80" alt="image" src="https://github.com/user-attachments/assets/88cdf9b4-de01-4cfa-82c5-812a16d178e5" /> to make an example `Hello World` worker.

4. Finish the rest of the steps (e.g. choose the name for your URL)

5. Replace the `worker.js` script in the Cloudflare editor with the [`worker.js`](https://github.com/kingdudely/cors-cloudflare-worker/raw/main/worker.js) script in this GitHub repository and click on <img width="113" height="48" alt="image" src="https://github.com/user-attachments/assets/8d118766-0ebd-4d23-b187-767afdb89565" />


6. Now, just get the URL of your worker and send requests to it like this:
   ```javascript
   const workerUrl = "YOUR_WORKER_URL";
   const url = "YOUR_URL";
   fetch(`${workerUrl}?url=${url}`, { ... });
   ```
