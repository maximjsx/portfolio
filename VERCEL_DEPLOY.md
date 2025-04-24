# Deploying Your Portfolio to Vercel

This guide will help you deploy your Kawaii Portfolio to Vercel for a fast, global hosting solution.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account to store your code
- A Vercel account (sign up at [vercel.com](https://vercel.com) - it's free!)

## Step 1: Push Your Code to a Repository

If you haven't already, push your project to a Git repository:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin YOUR_REPOSITORY_URL
git push -u origin main
```

## Step 2: Deploy to Vercel

### Option 1: Deploy via the Vercel UI (Recommended)

1. Log in to your Vercel account
2. Click "Add New..." > "Project"
3. Import your Git repository
4. Configuration:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: next build
   - Output Directory: .next
5. Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install the Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Navigate to your project directory and run:
   ```bash
   vercel
   ```

3. Follow the interactive prompts to complete the deployment

## Step 3: Configure Dark Mode (Important!)

After deployment, if dark mode doesn't work correctly:

1. Go to your project settings in the Vercel dashboard
2. Navigate to "Settings" > "Environment Variables"
3. Add the following environment variable:
   - Name: `NEXT_PUBLIC_ENABLE_DARK_MODE`
   - Value: `true`
4. Click "Save" and redeploy your project

## Step 4: Set Up a Custom Domain (Optional)

1. In your Vercel project dashboard, go to "Settings" > "Domains"
2. Add your custom domain and follow the verification steps

## Troubleshooting

- **Dark Mode Issues**: If dark mode doesn't work, check browser console for errors. The script should load before the main content.
- **CSS Loading Issues**: Ensure all your stylesheets are imported correctly in your layout file.
- **Deployment Failures**: Check the build logs in Vercel for specific error messages.

## Additional Vercel Features to Consider

- **Analytics**: Enable Vercel Analytics to track visitors
- **Edge Functions**: Consider using Edge Middleware for geo-targeting
- **Image Optimization**: Vercel automatically optimizes images

For more information, visit [Vercel Documentation](https://vercel.com/docs). 