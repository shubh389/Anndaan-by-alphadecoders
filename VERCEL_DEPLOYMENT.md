# Vercel Deployment Guide

This project is ready for deployment on Vercel! 

## Quick Deploy

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

## What's Configured

- ✅ `vercel.json` - Deployment configuration
- ✅ `api/index.ts` - Vercel-compatible API handler
- ✅ Build scripts - Frontend + backend builds
- ✅ Static file serving - React SPA served from `/dist/spa/`
- ✅ API routing - All `/api/*` routes handled by Express server

## Project Structure for Vercel

```
├── api/index.ts          # Vercel API handler
├── vercel.json           # Vercel configuration
├── dist/spa/             # Built React app (static files)
├── server/               # Express server code
└── client/               # React source code
```

## Environment Variables

If your app uses environment variables, add them in the Vercel dashboard:
- Go to your project settings
- Navigate to "Environment Variables"
- Add your variables for Production/Preview/Development

## Build Process

Vercel will automatically:
1. Run `npm install`
2. Run `npm run build` (builds both client and server)
3. Deploy the static files and API functions

## Troubleshooting

- **API routes not working**: Check that your routes start with `/api/`
- **Static files 404**: Ensure `npm run build` completes successfully
- **Build errors**: Check the Vercel build logs for detailed error messages
