# Moduł 5 - Hooki i praca z API

Żeby wystartować projekt pobierz repo, a następnie w terminalu wywołaj:

```command
npm i
npm run dev
```

Server backendowy i aplikacja frontendowa uruchomią się jednocześnie!

Aplikacja będzie dostępna pod adresem: http://localhost:5173/

## Deployment

This project can be deployed with the frontend on GitHub Pages and backend on Render.

### Backend Deployment (Render)

1. **Create a Render account** at [render.com](https://render.com)

2. **Create a new Web Service**:
   - Connect your GitHub repository
   - Select the `back-end` directory
   - Use these settings:
     - **Name**: translator-backend (or your choice)
     - **Environment**: Node
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Plan**: Free

3. **After deployment**, copy your backend URL (e.g., `https://translator-backend-xxxx.onrender.com`)

4. **Update the frontend config**:
   - Open `front-end/src/config.js`
   - Replace `YOUR-BACKEND-NAME` with your actual Render backend URL

### Frontend Deployment (GitHub Pages)

#### Automatic Deployment (Recommended)

The frontend will automatically deploy when you push to the `main` branch. Make sure to:

1. Go to your GitHub repository settings
2. Navigate to **Settings > Pages**
3. Under **Source**, select **GitHub Actions**

The workflow will automatically build and deploy your front-end application.

#### Manual Deployment

You can also deploy manually using:

```command
npm run deploy
```

This will build and deploy the front-end to the `gh-pages` branch.

**Important Notes:**
- The base path is set to `/translator/` in `vite.config.js`. If your repository has a different name, update this value to match your repo name.
- Make sure to update the backend URL in `front-end/src/config.js` before deploying
- Render's free tier may spin down after 15 minutes of inactivity, causing the first request to be slow
