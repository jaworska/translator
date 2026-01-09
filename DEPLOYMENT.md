# Deployment Guide

This guide will help you deploy your Translator app with the backend on Render and frontend on GitHub Pages.

## Quick Overview

- **Backend**: Deployed on Render (free hosting for JSON server)
- **Frontend**: Deployed on GitHub Pages (free static hosting)

## Step-by-Step Deployment

### 1. Deploy Backend to Render (Do this first!)

1. Go to [render.com](https://render.com) and sign up/login with your GitHub account
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `translator-backend` (or choose your own)
   - **Root Directory**: `back-end`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: `Free`
5. Click **"Create Web Service"**
6. Wait for deployment (3-5 minutes)
7. **Copy your backend URL** (e.g., `https://translator-backend-xxxx.onrender.com`)

### 2. Update Frontend Configuration

1. Open `front-end/src/config.js`
2. Replace this line:
   ```javascript
   ? 'https://YOUR-BACKEND-NAME.onrender.com'
   ```
   With your actual backend URL:
   ```javascript
   ? 'https://translator-backend-xxxx.onrender.com'
   ```
3. Save the file

### 3. Update Vite Config (if needed)

If your GitHub repository name is NOT "translator":

1. Open `front-end/vite.config.js`
2. Change `base: '/translator/'` to `base: '/your-repo-name/'`

### 4. Deploy Frontend to GitHub Pages

#### Option A: Automatic Deployment (Recommended)

1. Commit and push all your changes to GitHub:
   ```bash
   git add .
   git commit -m "Configure deployment"
   git push origin main
   ```

2. Go to your GitHub repository
3. Navigate to **Settings** → **Pages**
4. Under **Source**, select **"GitHub Actions"**
5. The deployment will start automatically
6. After 2-3 minutes, your app will be live at: `https://[username].github.io/translator/`

#### Option B: Manual Deployment

From the project root, run:
```bash
npm run deploy
```

## Testing Your Deployment

1. Visit your GitHub Pages URL
2. Try adding a word - it will be saved to your Render backend
3. Refresh the page - your data should persist

## Important Notes

### Render Free Tier Limitations
- The backend will **spin down after 15 minutes** of inactivity
- The first request after spinning down takes **30-50 seconds**
- Subsequent requests are fast
- **Data in db.json persists** between spin-downs

### CORS Issues
If you encounter CORS errors, you may need to configure json-server with CORS headers. The current setup should work, but if you have issues, let me know!

### Updating Your App

**Frontend changes:**
```bash
git add .
git commit -m "Update frontend"
git push origin main
```
GitHub Actions will automatically redeploy.

**Backend changes:**
Just push to GitHub, and Render will automatically detect and redeploy your backend.

## Troubleshooting

### Backend not responding
- Check if your Render service is running (might be spinning up from sleep)
- Verify the URL in `front-end/src/config.js` is correct

### Frontend 404 errors
- Make sure `base` in `vite.config.js` matches your repo name
- Verify GitHub Pages is enabled and set to "GitHub Actions"

### Data not persisting
- Check browser console for API errors
- Verify your Render backend URL is correct and accessible

## Cost

Both services are **100% FREE** for this use case! 🎉

- Render Free: 750 hours/month (enough for 24/7 uptime)
- GitHub Pages: Unlimited for public repositories

