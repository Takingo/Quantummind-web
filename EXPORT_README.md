# 🌐 Quantum Mind Innovation - Website Package

**Professional Industrial IoT & Automation Website**

---

## 📦 Package Contents

This ZIP file contains the complete source code for the Quantum Mind Innovation website, including:

- ✅ All HTML, CSS, and JavaScript files
- ✅ React components and pages
- ✅ Images and assets
- ✅ Configuration files
- ✅ Complete project structure

---

## 🚀 Quick Start Guide

### Prerequisites

Before you begin, ensure you have the following installed on your computer:

1. **Node.js** (v16 or higher)
   - Download from: https://nodejs.org/
   - Check installation: `node --version`

2. **npm** (comes with Node.js)
   - Check installation: `npm --version`

### Installation Steps

1. **Extract the ZIP file**
   - Unzip this package to your desired location
   - Example: `C:\Projects\quantum-mind-website\`

2. **Open Terminal/Command Prompt**
   - Navigate to the extracted folder:
     ```bash
     cd path/to/quantum-mind-website
     ```

3. **Install Dependencies**
   ```bash
   npm install
   ```
   This will download all required packages (may take 2-3 minutes)

4. **Start Development Server**
   ```bash
   npm run dev
   ```
   The website will open at: `http://localhost:5173`

5. **Build for Production**
   ```bash
   npm run build
   ```
   This creates optimized files in the `dist` folder

---

## 📁 Project Structure

```
Quantum-Mind-Innovation-Website/
├── public/                  # Static assets
│   ├── favicon.svg         # Website icon
│   └── vite.svg
├── src/
│   ├── assets/             # Images and media
│   │   └── Company Logo.jpg
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Navbar.css
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Footer.css
│   │   ├── Logo.jsx        # Logo component
│   │   └── Logo.css
│   ├── pages/              # Website pages
│   │   ├── Home.jsx        # Homepage
│   │   ├── Home.css
│   │   ├── About.jsx       # About page
│   │   ├── About.css
│   │   ├── AppDevelopment.jsx
│   │   ├── AppDevelopment.css
│   │   ├── NFCSystems.jsx  # NFC Systems page
│   │   ├── NFCSystems.css
│   │   ├── UWBRTLS.jsx     # UWB RTLS page
│   │   ├── UWBRTLS.css
│   │   ├── Solutions.jsx   # Solutions page
│   │   ├── Solutions.css
│   │   ├── Contact.jsx     # Contact page
│   │   ├── Contact.css
│   │   ├── PrivacyPolicy.jsx
│   │   └── PrivacyPolicy.css
│   ├── App.jsx             # Main application component
│   ├── main.jsx            # Application entry point
│   ├── index.css           # Global styles
│   └── style.css
├── index.html              # HTML entry point
├── package.json            # Project dependencies
├── vite.config.js          # Build configuration
└── README.md               # This file
```

---

## 🎨 Technology Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Router:** React Router DOM v6
- **Animations:** Framer Motion
- **Styling:** CSS (Component-scoped)
- **Fonts:** Google Fonts (Orbitron, Inter)

---

## 🌐 Website Pages

1. **Home** (`/`) - Landing page with animated factory scenarios
2. **About** (`/about`) - Company information and values
3. **App Development** (`/app-development`) - Software solutions
4. **NFC Systems** (`/nfc-systems`) - NFC tracking solutions
5. **UWB RTLS** (`/uwb-rtls`) - Real-time location systems
6. **Solutions** (`/solutions`) - Integrated ecosystem
7. **Contact** (`/contact`) - Contact form and information
8. **Privacy Policy** (`/privacy-policy`) - Legal information

---

## 🛠️ Available Commands

```bash
# Install dependencies
npm install

# Start development server (with hot reload)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

---

## 🎯 Deployment Options

### Option 1: Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify Drop
3. Your site is live!

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Option 3: GitHub Pages
1. Build: `npm run build`
2. Push `dist` folder to GitHub
3. Enable GitHub Pages in repository settings

### Option 4: Traditional Hosting (cPanel, FTP)
1. Build: `npm run build`
2. Upload contents of `dist` folder to your server
3. Point domain to the uploaded directory

---

## 🎨 Customization Guide

### Changing Colors

Edit `src/index.css` and look for CSS variables:

```css
:root {
  --bg-dark: #0E1116;
  --text-white: #FFFFFF;
  --accent-blue: #00E1FF;
  --accent-purple: #8B5CF6;
  --accent-orange: #FF6B35;
}
```

### Changing Company Information

1. **Company Name:** Search for "Quantum Mind Innovation" and replace
2. **Logo:** Replace `src/assets/Company Logo.jpg`
3. **Contact Info:** Edit `src/pages/Contact.jsx`
4. **Footer:** Edit `src/components/Footer.jsx`

### Adding New Pages

1. Create new file in `src/pages/` (e.g., `NewPage.jsx`)
2. Add route in `src/App.jsx`:
   ```jsx
   import NewPage from './pages/NewPage';
   // In Routes section:
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add link in `src/components/Navbar.jsx`

---

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🐛 Troubleshooting

### Issue: `npm install` fails
**Solution:** 
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

### Issue: Port 5173 already in use
**Solution:** 
- Stop other development servers
- Or change port in `vite.config.js`

### Issue: Animations not working
**Solution:** 
- Clear browser cache (Ctrl + Shift + R)
- Ensure Framer Motion is installed: `npm install framer-motion`

### Issue: Images not loading
**Solution:** 
- Check file paths in components
- Ensure images are in `src/assets/`
- Use correct import syntax: `import logo from '../assets/logo.jpg'`

---

## 📧 Support & Contact

For technical support or questions about this website:

- **Email:** info@quantummind-innovation.com
- **Website:** (Your production URL)
- **Location:** Germany

---

## 📄 License

This website is proprietary software owned by Quantum Mind Innovation.
All rights reserved © 2025 Quantum Mind Innovation.

---

## 🎉 Getting Help

If you need assistance:

1. Check this README first
2. Review the code comments in each file
3. Check the console for error messages
4. Contact the development team

---

## 🚀 Next Steps

After extracting and installing:

1. ✅ Review the code structure
2. ✅ Customize company information
3. ✅ Replace placeholder images
4. ✅ Update contact details
5. ✅ Test on multiple browsers
6. ✅ Build for production
7. ✅ Deploy to your hosting

---

**Built with ❤️ for the Future of Things**

*Quantum Mind Innovation - Engineering the Future of Things*
