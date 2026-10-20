# Jay Desai's Portfolio - Netflix-Themed GitHub Pages

A stunning, interactive portfolio website built with a Netflix-inspired design using red and black color scheme. Perfect for showcasing professional experience, projects, and publications.

## Features

✨ **Netflix-Inspired Design**
- Red (#E50914) and Black (#0f0f0f) color scheme
- Custom 'J' logo (Netflix-style)
- Initial profile picker with original Embedded Expert and Telecom Expert SVG avatars
- Both profiles open the same portfolio
- Smooth animations and transitions
- Responsive design for all devices

🎯 **Sections**
- **Home**: Profile picker followed by a streaming-style featured hero and call-to-action buttons
- **About**: Professional summary with skills and statistics
- **Projects**: Featured projects with "Work in Progress" pages
- **Experience**: Timeline view of professional journey
- **Publications**: Articles and blog posts
- **Contact**: Get in touch with contact form and social links

The main navigation links to Home, Company, Projects, Experience, and Gallery. More contains About, Publications, and Contact. The right side of the header has portfolio search and a profile menu for switching between Embedded and Telecom.

The profile chooser separates the portfolio content by specialty. **Embedded Expert** shows Matrix Comsec experience, embedded projects, skills, and gallery items. **Telecom Expert** shows Airspan Networks experience, telecom projects, skills, and gallery items. The home banner and company-specific details also change with the selected profile.

🚀 **Interactive Elements**
- Smooth scroll navigation
- Active navbar link highlighting
- Animated project cards
- Typing animation on hero title
- Counter animations for statistics
- Hover effects on all interactive elements
- Responsive form submission

📱 **Responsive Design**
- Works seamlessly on desktop, tablet, and mobile
- Mobile-optimized navigation
- Flexible grid layouts
- Touch-friendly interactive elements

## Project Structure

```
jay-desai-portfolio/
│
├── index.html                 # Main portfolio page
├── README.md                  # This file
├── .gitignore                # Git ignore file
│
├── styles/
│   └── style.css             # Main stylesheet (Netflix theme)
│
├── scripts/
│   └── script.js             # JavaScript for interactivity
│
└── projects/
    ├── dynamic-ip.html       # Dynamic IP Support (WIP)
    ├── 5g-uac.html          # 5G UAC Implementation (WIP)
    ├── sftp-port.html       # SFTP-Port Support (WIP)
    ├── s1-auth.html         # S1-Authentication (WIP)
    ├── 4g5g-interworking.html # 4G-5G Interworking (WIP)
    ├── wps-features.html    # WPS Features (WIP)
    ├── matrix-acd.html      # Matrix ACD (WIP)
    ├── matrix-wps.html      # Matrix WPS (WIP)
    ├── matrix-wiegand.html  # Wiegand integration (WIP)
    └── matrix-aebas.html    # AEBAS (WIP)
```

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### 2. Local Testing
Simply open `index.html` in your browser to view the portfolio locally. No build process required!

Or use a simple HTTP server:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (using http-server)
npx http-server
```

Then navigate to `http://localhost:8000`

### 3. Deploy to GitHub Pages

1. **Create a GitHub repository** named `yourusername.github.io`
   - Replace `yourusername` with your actual GitHub username

2. **Push this code to the main branch**
```bash
git add .
git commit -m "Initial portfolio setup"
git push origin main
```

3. **GitHub Pages will automatically deploy** at `https://yourusername.github.io`

## Customization

### Update Personal Information
Edit the `index.html` file to update:
- Your name and title
- About section content
- Skills and statistics
- Project descriptions
- Contact information
- Social media links

### Modify Colors
Edit the CSS variables in `styles/style.css`:
```css
:root {
    --primary-red: #E50914;    /* Netflix red */
    --dark-black: #0f0f0f;     /* Deep black */
    --dark-gray: #1a1a1a;      /* Dark gray */
    --light-gray: #333333;     /* Light gray */
    --text-primary: #ffffff;   /* White text */
    --text-secondary: #b3b3b3; /* Light gray text */
    --accent-gold: #f39c12;    /* Accent color */
}
```

### Add Project Pages
1. Create a new HTML file in the `projects/` directory
2. Copy the structure from existing project files
3. Update the title and content
4. Add the link in `index.html`

### Change the Logo
The 'J' logo is created using SVG in the HTML. You can:
- Modify the SVG code directly in HTML
- Replace it with an image
- Change the font or styling

## Sections Explained

### Hero Section
- Full-screen impact with animated gradient background
- Typing animation on the main title
- Two call-to-action buttons
- Smooth scroll links

### About Section
- Professional summary
- Skills grid with hover effects
- Statistics with counter animations
- Responsive layout

### Projects Section
- Project cards with shimmer animation
- Hover effects for engagement
- Project tags and categories
- "Learn More" links to dedicated project pages
- All projects marked as "Work in Progress" with placeholders

### Experience Section
- Timeline layout showing career progression
- Company, position, and period information
- Key accomplishments for each role
- Responsive single-column layout on mobile

### Publications Section
- Article cards with icons
- Links to Medium blog or external sources
- Grid layout adapting to screen size

### Contact Section
- Contact information cards
- Working contact form (uses mailto links)
- Social media links
- Call-to-action buttons

## Browser Support

- Chrome/Chromium (Latest)
- Firefox (Latest)
- Safari (Latest)
- Edge (Latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Implementation

### Smooth Scrolling
Implemented using native CSS `scroll-behavior: smooth` and JavaScript navigation.

### Animations
- CSS keyframe animations for smooth transitions
- JavaScript Intersection Observer for scroll-triggered animations
- Hover effects using CSS transitions

### Responsive Design
- CSS Grid and Flexbox layouts
- Media queries for different screen sizes
- Mobile-first approach
- Touch-friendly interactive elements

### Dark Theme
- Carefully chosen dark colors for reduced eye strain
- High contrast text for readability
- Red accents for visual interest

## Performance Optimization

- Minimalist approach with no heavy frameworks
- Lightweight CSS and JavaScript
- Google Fonts for optimal typography
- Optimized animations using transform and opacity

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Alt text for images (when added)
- Keyboard navigation support
- High contrast colors for readability

## Future Enhancements

Consider adding:
- [ ] Blog section with detailed articles
- [ ] Portfolio gallery with project screenshots
- [ ] Dark/Light theme toggle
- [ ] Multi-language support
- [ ] Analytics tracking
- [ ] Newsletter subscription
- [ ] GitHub repository showcase
- [ ] Certificate showcase section

## License

This portfolio template is free to use and modify. Feel free to customize it for your own use.

## Support

For issues or questions:
- Email: jaydesai36@gmail.com
- LinkedIn: [linkedin.com/in/jjdesai](https://www.linkedin.com/in/jjdesai)
- Blog: [medium.com/@jaydesai36](https://medium.com/@jaydesai36)

## Credits

- Netflix color scheme inspiration
- Poppins font from Google Fonts
- Responsive design best practices
- Modern web technologies (HTML5, CSS3, JavaScript ES6+)

---

**Jay Desai** | Senior Software Engineer @ Airspan Networks
Last Updated: October 2026
