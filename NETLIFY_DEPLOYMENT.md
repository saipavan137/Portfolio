# Netlify Deployment Guide

## Prerequisites
- A GitHub account
- A Netlify account (sign up at https://www.netlify.com)

## Deployment Steps

### Option 1: Deploy via Netlify UI (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository

3. **Configure Build Settings**
   - Netlify will auto-detect Next.js
   - Build command: `npm run build`
   - Publish directory: `.next` (or leave default - Netlify handles this automatically)
   - Click "Deploy site"

4. **Wait for Deployment**
   - Netlify will install dependencies and build your site
   - Your site will be live at a URL like `your-site-name.netlify.app`

### Option 2: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize and Deploy**
   ```bash
   netlify init
   # Follow the prompts to link your site
   
   # Or deploy directly
   netlify deploy --prod
   ```

## Environment Variables (if needed)

If you need to add environment variables:
- Go to Site settings → Environment variables
- Add any required variables (e.g., API keys)

## Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow the DNS configuration instructions

## Continuous Deployment

Netlify automatically deploys when you push to your main branch. You can also:
- Set up branch deploys for previews
- Configure deploy contexts in `netlify.toml`

## Troubleshooting

- **Build fails**: Check build logs in Netlify dashboard
- **404 errors**: Ensure all routes are properly configured
- **Image issues**: Verify image paths in `/public` folder


