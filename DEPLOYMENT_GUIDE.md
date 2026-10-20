# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Git installed on your computer
- A code editor (VS Code recommended)

## Step 1: Set Up Your GitHub Repository

### Option A: If starting fresh

1. Go to [github.com](https://github.com) and log in
2. Click the **+** icon in the top right corner
3. Select **New repository**
4. Name it: `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username
   - Example: `jaydesai.github.io`
5. Set it to **Public**
6. Click **Create repository**

### Option B: If you already have a repository

You can use an existing repository named `yourusername.github.io` or any other name, then enable GitHub Pages in settings.

## Step 2: Clone the Repository to Your Computer

```bash
# Copy the repository URL from GitHub
# Then run this command in your terminal/command prompt

git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

## Step 3: Add Portfolio Files

### Copy all files from this portfolio to your local repository:

```
your-repo/
├── index.html
├── README.md
├── .gitignore
├── _config.yml
├── styles/
│   └── style.css
├── scripts/
│   └── script.js
└── projects/
    ├── dynamic-ip.html
    ├── 5g-uac.html
    ├── sftp-port.html
    ├── s1-auth.html
    ├── 4g5g-interworking.html
    └── wps-features.html
```

## Step 4: Configure Your Portfolio

### Update index.html
1. Open `index.html` in your editor
2. Update the following sections with your information:
   - Name in hero section
   - About section content
   - Skills and statistics
   - Project descriptions
   - Contact information and email

### Update README.md
- Change repository URL to your repository
- Update any personal references

### Update _config.yml
- Change title and email
- Update social media usernames

## Step 5: Customize Colors (Optional)

Edit `styles/style.css` to change the theme:

```css
:root {
    --primary-red: #E50914;      /* Change this for main color */
    --accent-gold: #f39c12;      /* Change this for accent color */
    /* Other colors */
}
```

## Step 6: Test Locally

### Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Using Node.js:
```bash
npx http-server
```

### Using VS Code:
- Install "Live Server" extension
- Right-click on index.html
- Select "Open with Live Server"

Visit `http://localhost:8000` in your browser

## Step 7: Commit and Push to GitHub

```bash
# Stage all files
git add .

# Commit with a message
git commit -m "Initial portfolio setup"

# Push to GitHub
git push origin main
```

If your default branch is 'master' instead of 'main':
```bash
git push origin master
```

## Step 8: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll down to **GitHub Pages** section
4. Under "Source", select:
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
5. Click **Save**

Wait 1-3 minutes for deployment...

## Step 9: Verify Your Site

Your portfolio will be live at:
```
https://yourusername.github.io
```

## Updating Your Portfolio

To make changes:

1. Edit files locally
2. Test changes using local server
3. Commit and push:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

Changes will be live in 1-3 minutes!

## Adding New Project Pages

1. Create a new HTML file in `projects/` folder
2. Copy structure from existing project pages
3. Update content with your project details
4. Add link in `index.html` projects section
5. Commit and push

## Project Page Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Project - Jay Desai</title>
    <link rel="stylesheet" href="../styles/style.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar">
        <!-- Copy from existing project pages -->
    </nav>

    <!-- Your Project Content -->
    <section class="project-detail">
        <div class="container">
            <!-- Add your content here -->
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <!-- Copy from main page -->
    </footer>
</body>
</html>
```

## Troubleshooting

### Site not showing up
- Wait 5 minutes after pushing (GitHub needs time to deploy)
- Check Settings > Pages to verify branch is correct
- Ensure `index.html` is in the root folder

### CSS/JavaScript not loading
- Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
- Check file paths are correct
- Verify files were pushed to GitHub

### Domain not working
- Use the default domain: `https://yourusername.github.io`
- For custom domain, see GitHub Pages documentation

### Push authentication error
- Update Git credentials
- Use personal access token instead of password
- See GitHub's Git configuration guide

## Custom Domain (Optional)

To use your own domain (e.g., www.jaydesai.com):

1. Register a domain (GoDaddy, Namecheap, etc.)
2. Update DNS settings to point to GitHub
3. In repository Settings > Pages > Custom domain, enter your domain
4. GitHub will automatically create CNAME file

See [GitHub Pages custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)

## SSL Certificate (HTTPS)

GitHub Pages automatically provides free SSL certificates. Enable:

1. Go to repository Settings > Pages
2. Check "Enforce HTTPS" option
3. Wait a few minutes for certificate to be issued

## File Structure Checklist

Before deploying, ensure you have:

- [ ] `index.html` - Main portfolio page
- [ ] `README.md` - Documentation
- [ ] `.gitignore` - Git ignore file
- [ ] `_config.yml` - GitHub Pages config
- [ ] `styles/style.css` - Main stylesheet
- [ ] `scripts/script.js` - JavaScript
- [ ] `projects/` - Directory with project pages

## Important Notes

1. **GitHub Pages is public** - Your entire site is publicly accessible
2. **No backend needed** - This is a static site (no server-side code)
3. **Free hosting** - GitHub Pages is completely free
4. **Custom domain optional** - Works great with GitHub's default domain
5. **Automatic HTTPS** - All sites get free SSL certificates
6. **Performance** - Hosted on GitHub's CDN for fast access worldwide

## Next Steps

After deployment:

1. Share your portfolio link with employers and clients
2. Add link to your LinkedIn profile
3. Update project pages with detailed documentation
4. Add screenshots and demos to project pages
5. Keep content up to date with your latest work

## Support

- GitHub Pages Help: https://docs.github.com/en/pages
- GitHub Community: https://github.com/orgs/community/discussions
- Your email: jaydesai36@gmail.com

---

**Happy Portfolio Building! 🚀**
