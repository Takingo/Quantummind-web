# 🍪 Cookie Consent Banner

## Overview

A responsive, full-width cookie consent banner that appears at the bottom of every page on your website. The banner automatically disappears after the user accepts cookies and stores their preference in localStorage.

## Features

✅ **Fixed Bottom Position** - Always visible at the bottom of the viewport  
✅ **Auto-Display on All Pages** - Integrated globally via `App.jsx`  
✅ **localStorage Persistence** - Remembers user choice with `cookiesAccepted=true`  
✅ **Responsive Design** - Adapts perfectly to mobile, tablet, and desktop  
✅ **Dark Theme Styled** - Matches your site theme (#0E1116 background, #00E1FF accent)  
✅ **Smooth Animations** - Slides up with fade-in effect  
✅ **No 403 Errors** - Uses relative paths, IONOS compatible  

## Implementation

### Files Created

1. **`src/components/CookieConsent.jsx`**
   - React component with accept/learn more logic
   - localStorage handling
   - Navigation to privacy policy

2. **`src/components/CookieConsent.css`**
   - Responsive styling
   - Animations
   - Dark theme colors
   - Mobile-first approach

### Integration

The banner is automatically included in `App.jsx`:

```jsx
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <Router>
      {/* ... other components ... */}
      <Footer />
      <CookieConsent /> {/* Auto-displays on all pages */}
    </Router>
  );
}
```

## Banner Content

**Text:**  
"We use cookies to improve your experience. By continuing, you agree to our Privacy Policy."

**Buttons:**
- **Mehr erfahren** - Opens `/privacy-policy` page
- **Accept** - Closes banner and saves acceptance to localStorage

## How It Works

1. **First Visit:**
   - Banner slides up from bottom after 500ms delay
   - User sees cookie notice

2. **User Clicks "Accept":**
   - `localStorage.setItem('cookiesAccepted', 'true')`
   - Banner disappears with smooth animation
   - Won't appear again on subsequent visits

3. **User Clicks "Mehr erfahren":**
   - Navigates to `/privacy-policy` page
   - Banner remains visible
   - User can accept after reading

4. **Return Visits:**
   - Banner checks localStorage
   - If `cookiesAccepted=true`, banner doesn't show
   - If not set, banner appears again

## Styling

### Colors
- **Background:** `#0E1116` (Dark theme)
- **Text:** `#FFFFFF` (White)
- **Accent/Borders:** `#00E1FF` (Cyan)
- **Button Hover:** `#00C4E6` (Lighter cyan)

### Responsive Breakpoints
- **Desktop (>768px):** Side-by-side layout
- **Tablet (≤768px):** Stacked layout
- **Mobile (≤480px):** Full-width buttons

## localStorage Key

```javascript
localStorage.getItem('cookiesAccepted')
// Returns: 'true' (string) if accepted, null otherwise
```

To reset for testing:
```javascript
localStorage.removeItem('cookiesAccepted')
// Refresh page to see banner again
```

## Deployment

✅ **IONOS Compatible** - Uses relative paths (no 403 errors)  
✅ **No Build Changes Needed** - Works with existing Vite config  
✅ **Automatic Inclusion** - Bundled in production build  
✅ **No Manual Scripts** - Pure React component, no external scripts  

After running `npm run build`, the banner is automatically included in the `dist` folder output.

## Browser Support

- ✅ Chrome/Edge (Modern)
- ✅ Firefox
- ✅ Safari
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Testing Checklist

- [ ] Banner appears on first visit
- [ ] "Accept" button hides banner
- [ ] localStorage stores `cookiesAccepted=true`
- [ ] Banner doesn't reappear after acceptance
- [ ] "Mehr erfahren" navigates to privacy policy
- [ ] Responsive layout works on mobile
- [ ] Animations are smooth
- [ ] No 403 errors on IONOS deployment

## Customization

### Change Text
Edit `src/components/CookieConsent.jsx`:
```jsx
<p className="cookie-consent-text">
  Your custom message here
</p>
```

### Change Colors
Edit `src/components/CookieConsent.css`:
```css
.cookie-consent-banner {
  background: #YOUR_COLOR;
  border-top: 2px solid #YOUR_ACCENT;
}
```

### Change Button Text
Edit `src/components/CookieConsent.jsx`:
```jsx
<button className="cookie-btn cookie-btn-accept">
  Your Button Text
</button>
```

## Notes

- No external dependencies required
- Uses React Router for navigation
- z-index set to 9999 (appears above all content)
- Automatically adds bottom padding to prevent content overlap
- Clean, accessible HTML with ARIA labels

---

**Created:** 2025-10-17  
**Version:** 1.0  
**Compatible with:** Vite + React + IONOS Hosting
