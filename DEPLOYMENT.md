# Cloudflare Pages Deployment Guide

This portfolio is production-ready for Cloudflare Pages deployment.

## ⚠️ IMPORTANT: Pages vs Workers

**You MUST deploy to Cloudflare Pages, NOT Workers.**

If you see "Hello World" after deployment, you accidentally deployed to Workers. Follow the fix below.

### Fix "Hello World" Issue

If you already deployed and see "Hello World":

1. **Delete the Worker**
   - Go to Cloudflare Dashboard → Workers & Pages
   - Find `oj-portfolio` worker (not Pages project)
   - Delete it

2. **Deploy to Pages correctly** (see methods below)

## Prerequisites

- A Cloudflare account
- Git repository (GitHub, GitLab, or Bitbucket)

## Deployment Methods

### Method 1: NPM Script (Easiest)

```bash
npm run deploy
```

This runs the build and deploys to Pages automatically.

### Method 2: Automatic Git Integration (Recommended for CI/CD)

1. **Push to Git**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - Navigate to **Workers & Pages** → **Create application** → **Pages**
   - Click **Connect to Git**
   - Select your repository

3. **Configure Build Settings**
   - **Framework preset**: Next.js (Static HTML Export)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Node version**: 20 or higher

4. **Deploy**
   - Click **Save and Deploy**
   - Your site will be live in ~2 minutes

### Method 3: Direct Upload via Wrangler CLI

**⚠️ CRITICAL: Use `wrangler pages deploy`, NOT `wrangler deploy`**

1. **Install Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**
   ```bash
   wrangler login
   ```

3. **Deploy to Pages (NOT Workers)**
   ```bash
   npm run deploy
   # OR manually:
   npm run build
   wrangler pages deploy out --project-name=oj-portfolio
   ```

**Common Mistake:**
- ❌ `wrangler deploy` → Creates a Worker (shows "Hello World")
- ✅ `wrangler pages deploy` → Creates a Pages site (shows your portfolio)

## Configuration Files

- **`next.config.ts`**: Configured for static export with `output: "export"`
- **`wrangler.jsonc`**: Cloudflare Pages configuration
- **`public/_headers`**: Security headers and cache policies
- **`public/_redirects`**: SPA routing fallback

## Production Features

✅ Static HTML export (no server required)  
✅ Security headers (X-Frame-Options, CSP-ready)  
✅ Optimized caching for static assets  
✅ SPA routing support  
✅ Image optimization disabled (Cloudflare compatible)

## Custom Domain (Optional)

After deployment:
1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Follow the DNS configuration steps

## Environment Variables

If you need environment variables:
1. Go to your Pages project → **Settings** → **Environment variables**
2. Add variables for Production/Preview environments
3. Redeploy to apply changes

## Troubleshooting

**Build fails**: Ensure Node.js version is 20+  
**404 errors**: Check that `_redirects` file is in `public/` folder  
**Images not loading**: Verify `images.unoptimized: true` in `next.config.ts`

## Monitoring

- **Analytics**: Available in Cloudflare Dashboard → Pages → Analytics
- **Logs**: Real-time logs in Dashboard → Pages → Deployments
