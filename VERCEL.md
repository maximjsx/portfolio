# Vercel Deployment - Root Directory Requirements

When deploying your Kawaii Portfolio to Vercel, make sure the following files are in your root directory:

## Required Files ✅

- **vercel.json** - Configures deployment settings
  ```json
  {
    "headers": [...],
    "buildCommand": "next build",
    "outputDirectory": ".next",
    "framework": "nextjs",
    "rewrites": [...]
  }
  ```

- **next.config.mjs** - Sets up Next.js for Vercel
  ```js
  const nextConfig = {
    // Your Next.js configuration
    // Already optimized for Vercel
  };
  ```

- **package.json** - Contains dependencies and scripts
  ```json
  {
    "scripts": {
      "dev": "next dev",
      "build": "next build",
      "start": "next start"
    }
  }
  ```

- **src/** directory - Contains your app code
- **public/** directory - Contains static assets

## Optional Environment Setup

Create a `.env.local` file in your root directory with:

```
NEXT_PUBLIC_SITE_URL=https://your-portfolio.vercel.app
NEXT_PUBLIC_ENABLE_DARK_MODE=true
```

## Deployment Steps

1. Log in to [Vercel](https://vercel.com)
2. Create a new project and select your repository
3. Vercel will automatically detect Next.js and set up the build settings
4. Click "Deploy"

The correct root directory for deployment is: `D:\kawaii_folio\kawaii_portfolio` 