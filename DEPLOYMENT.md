# Deploying to Vercel

## Setup Instructions

### 1. Prerequisites
- Vercel account (sign up at vercel.com)
- Git repository (GitHub, GitLab, or Bitbucket)
- MongoDB Atlas account for database

### 2. Prepare Your Repository
The project is already configured for Vercel deployment with:
- `vercel.json` - Vercel configuration
- `api/index.js` - Serverless backend handler
- Combined dependencies in root `package.json`

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts to link your project
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your Git repository
4. Vercel will auto-detect the Vite framework
5. Add environment variables (see below)
6. Click "Deploy"

### 4. Configure Environment Variables
In Vercel dashboard, go to Settings > Environment Variables and add:

- `MONGO_URI` - Your MongoDB connection string
- `FRONTEND_URL` - Your Vercel app URL (e.g., https://your-app.vercel.app)
- `RESEND_API_KEY` - Your Resend API key for emails
- `NODE_ENV` - Set to "production"

### 5. Update Frontend API Calls
Make sure your frontend is configured to use the correct API endpoint:

For production, API calls will automatically route through `/api/*` which Vercel handles.

### 6. Post-Deployment

After deployment:
1. Test all API endpoints at `https://your-app.vercel.app/api/health`
2. Verify MongoDB connection is working
3. Test frontend-backend integration

## Project Structure for Vercel

```
/
├── api/              # Serverless functions
│   └── index.js      # Main API handler
├── backend/          # Original backend code
│   ├── routes/
│   ├── models/
│   └── server.js
├── src/              # Frontend React code
├── dist/             # Built frontend (auto-generated)
├── vercel.json       # Vercel configuration
└── package.json      # Combined dependencies
```

## Important Notes

1. **Serverless Functions**: The backend runs as serverless functions with automatic scaling
2. **Cold Starts**: First request after inactivity may be slower due to cold starts
3. **Database Connections**: MongoDB connection is cached to optimize performance
4. **CORS**: Configured to allow your frontend URL in production
5. **API Routes**: All `/api/*` routes are handled by the serverless function

## Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify Node version compatibility

### API Not Working
- Check environment variables are set correctly
- Verify MongoDB whitelist includes Vercel IPs (or allow all 0.0.0.0/0)
- Check function logs in Vercel dashboard

### CORS Issues
- Update `FRONTEND_URL` environment variable
- Ensure the URL includes `https://` and no trailing slash

## Local Development

Continue using the existing setup:
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
cd backend
npm start
```