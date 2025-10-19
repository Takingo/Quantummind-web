# 📧 PHP Contact Form - Complete Guide

## ✅ **FULLY FUNCTIONAL PHP BACKEND**

Your website now includes a **production-ready PHP backend** that sends emails directly to **info@quantummind-innovation.com**.

---

## 📦 **What's Included in This Export**

```
Quantum-Mind-Innovation-Website.zip
│
├── public/
│   └── sendmail.php                    ← PHP Email Handler (329 lines)
│
├── src/
│   ├── pages/
│   │   ├── Contact.jsx                 ← Updated to use PHP backend
│   │   └── Contact.css                 ← Success/Error message styling
│   └── ... (all other source files)
│
├── PHP_DEPLOYMENT_GUIDE.md             ← Complete deployment instructions
├── CONTACT_FORM_SETUP.md               ← Alternative setup options
├── README.md                           ← Project documentation
└── ... (all other files)
```

**Total Files:** 45
**ZIP Size:** ~0.48 MB

---

## 🚀 **QUICK DEPLOYMENT (5 Steps)**

### **Step 1: Extract the ZIP**
Extract to your computer: `C:\Projects\quantum-mind-website\`

### **Step 2: Install Dependencies & Build**
```bash
cd quantum-mind-website
npm install
npm run build
```

This creates a `dist` folder with production files.

### **Step 3: Upload to Your Server**

**What to Upload:**
- ✅ All files from `dist` folder → Your server root
- ✅ `public/sendmail.php` → Same server root

**Upload Methods:**
- 🔹 FTP/SFTP (FileZilla, WinSCP)
- 🔹 cPanel File Manager
- 🔹 SSH (`scp` or `rsync`)

**Server Structure:**
```
your-server-root/
├── index.html
├── assets/
│   ├── *.js
│   ├── *.css
│   └── images/
├── sendmail.php    ← Important!
└── favicon.svg
```

### **Step 4: Set File Permissions**
```bash
chmod 644 sendmail.php
```

### **Step 5: Test the Form**
1. Visit: `https://yourdomain.com/contact`
2. Fill out the form
3. Submit
4. Check email at: `info@quantummind-innovation.com`

---

## 📧 **PHP Backend Features**

### **sendmail.php** includes:

✅ **Professional HTML Email Template**
- Gradient header with branding
- Clean layout with company colors
- Reply button for quick response
- Mobile-responsive design

✅ **Security Features**
- Input sanitization
- Email validation
- XSS prevention
- Honeypot spam protection
- CORS headers configured

✅ **Error Handling**
- Comprehensive validation
- Detailed error messages
- Error logging to file
- JSON responses

✅ **Logging System**
- Submission log: `contact-submissions.log`
- Error log: `php-errors.log`
- IP address tracking
- Timestamp records

✅ **Email Details**
- To: info@quantummind-innovation.com
- From: noreply@quantummind-innovation.com
- Reply-To: Sender's email
- Subject: "New Contact Form Submission from [Name]"
- High priority flag

---

## 🎯 **Form Fields**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| **Name** | Text | ✅ Yes | Full name |
| **Company** | Text | No | Company name |
| **Email** | Email | ✅ Yes | Valid email address |
| **Phone** | Tel | No | Phone number |
| **Message** | Textarea | ✅ Yes | Project details/inquiry |

---

## 🔧 **Server Requirements**

### **Minimum Requirements:**
- ✅ PHP 7.0 or higher
- ✅ `mail()` function enabled
- ✅ Sendmail or SMTP configured
- ✅ `.htaccess` support (optional)

### **Check Your PHP Version:**
Create `check.php`:
```php
<?php
echo 'PHP Version: ' . phpversion();
echo '<br>Mail function: ' . (function_exists('mail') ? 'Available' : 'NOT Available');
?>
```

Upload and visit: `https://yourdomain.com/check.php`

**Delete after checking!**

---

## 🧪 **Testing**

### **Local Testing (Optional)**

**Option 1: PHP Built-in Server**
```bash
cd dist
php -S localhost:8000
```
Visit: http://localhost:8000/contact

**Note:** Emails won't send locally without SMTP configuration.

### **Production Testing**

1. ✅ Visit contact page
2. ✅ Fill all required fields
3. ✅ Submit form
4. ✅ Check for success message
5. ✅ Verify email in inbox
6. ✅ Check spam folder if needed
7. ✅ Test "Reply-To" functionality

---

## 🔒 **Security Best Practices**

### **Already Implemented:**

✅ **Input Validation**
- Required field checks
- Email format validation
- HTML/script tag stripping

✅ **XSS Prevention**
- `htmlspecialchars()` on all inputs
- `strip_tags()` to remove HTML

✅ **Spam Protection**
- Honeypot field detection
- User-Agent tracking
- IP logging

✅ **Email Security**
- Reply-To header properly set
- High priority flag
- Professional formatting

### **Additional Security (Optional):**

**1. Rate Limiting**
Limit submissions per IP address.

**2. reCAPTCHA**
Add Google reCAPTCHA v3.

**3. CSRF Protection**
Add token validation.

See `PHP_DEPLOYMENT_GUIDE.md` for implementation details.

---

## 📊 **Email Template Preview**

Your emails will look like this:

```
┌──────────────────────────────────────────┐
│  🌐 New Contact Form Submission          │
│  Quantum Mind Innovation                 │
│  THE FUTURE OF THINGS                    │
├──────────────────────────────────────────┤
│  👤 NAME                                 │
│  [John Doe]                              │
│                                          │
│  🏢 COMPANY                              │
│  [Acme Corporation]                      │
│                                          │
│  📧 EMAIL ADDRESS                        │
│  john@acme.com                           │
│                                          │
│  📱 PHONE NUMBER                         │
│  +49 123 456 7890                        │
│                                          │
│  💬 MESSAGE                              │
│  [Full message content here...]          │
│                                          │
│  [Reply to John Doe] ← Button            │
├──────────────────────────────────────────┤
│  Submission Time: Oct 15, 2025, 6:59 PM │
│  IP Address: 123.456.789.0              │
│  User Agent: Chrome/119.0...            │
└──────────────────────────────────────────┘
```

---

## 🐛 **Troubleshooting**

### **Problem: Emails Not Arriving**

**Solution 1:** Check spam folder
- Look in spam/junk
- Add sender to whitelist

**Solution 2:** Verify PHP mail() works
```php
<?php
$test = mail('info@quantummind-innovation.com', 'Test', 'Test message');
echo $test ? 'Mail works!' : 'Mail failed!';
?>
```

**Solution 3:** Check server logs
```bash
tail -f /var/log/mail.log
```

**Solution 4:** Contact hosting support
Ask them to:
- Enable PHP `mail()` function
- Check sendmail configuration
- Verify SMTP settings

---

### **Problem: 500 Internal Server Error**

**Solution 1:** Check file permissions
```bash
chmod 644 sendmail.php
```

**Solution 2:** Check PHP errors
Look in: `php-errors.log`

**Solution 3:** Enable error display (temporarily)
In `sendmail.php`, line 8:
```php
ini_set('display_errors', 1);
```

---

### **Problem: CORS Errors**

**Solution:** Update CORS header in `sendmail.php`, line 16:

**Current:**
```php
header('Access-Control-Allow-Origin: *');
```

**Change to your domain:**
```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
```

---

### **Problem: Form Stuck on "Sending..."**

**Solution 1:** Check browser console
- Press F12
- Look for errors in Console tab
- Check Network tab for failed requests

**Solution 2:** Verify endpoint URL
In `Contact.jsx`, line 38:
```javascript
const response = await fetch('/sendmail.php', {
```

**Solution 3:** Test sendmail.php directly
Visit: `https://yourdomain.com/sendmail.php`

Should show:
```json
{"success":false,"message":"Only POST requests are allowed"}
```

---

## 🎨 **Customization**

### **Change Email Recipient**

Edit `public/sendmail.php`, line 69:
```php
$to = 'info@quantummind-innovation.com';
```

Change to:
```php
$to = 'your-email@example.com';
```

---

### **Customize Email Template**

Edit the `$htmlBody` variable in `sendmail.php` (starting line 80):

**Change Colors:**
```css
background: linear-gradient(135deg, #00E1FF 0%, #0077FF 100%);
```

**Change Branding:**
```html
<h1>🌐 New Contact Form Submission</h1>
<p>Your Company Name</p>
```

**Change Logo Text:**
```html
<div class="logo">YOUR TAGLINE</div>
```

---

### **Add Auto-Reply to Sender**

Add this code after line 310 in `sendmail.php`:

```php
// Send thank you email to sender
$thankYouSubject = 'Thank you for contacting Quantum Mind Innovation';
$thankYouBody = '
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #00E1FF 0%, #0077FF 100%); 
                  color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e0e0e0; 
                   border-radius: 0 0 10px 10px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2>Thank You!</h2>
            <p>Quantum Mind Innovation</p>
        </div>
        <div class="content">
            <p>Dear ' . $name . ',</p>
            <p>Thank you for reaching out to Quantum Mind Innovation. We have received your message 
               and will get back to you within 24-48 hours.</p>
            <p><strong>Your message:</strong></p>
            <p style="background: #f0f8ff; padding: 15px; border-radius: 5px;">' . nl2br($message) . '</p>
            <p>Best regards,<br><strong>The Quantum Mind Innovation Team</strong></p>
            <p style="margin-top: 30px; font-size: 12px; color: #666;">
                Quantum Mind Innovation<br>
                The Future of Things<br>
                info@quantummind-innovation.com
            </p>
        </div>
    </div>
</body>
</html>
';

$thankYouHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Quantum Mind Innovation <info@quantummind-innovation.com>'
];

mail($email, $thankYouSubject, $thankYouBody, implode("\r\n", $thankYouHeaders));
```

---

## 📚 **Additional Documentation**

- 📖 **Full Deployment Guide:** `PHP_DEPLOYMENT_GUIDE.md`
- 📖 **Alternative Setups:** `CONTACT_FORM_SETUP.md`
- 📖 **Quick Start:** `CONTACT_FORM_QUICK_START.md`
- 📖 **Implementation Details:** `CONTACT_FORM_IMPLEMENTATION.md`

---

## ✅ **Pre-Deployment Checklist**

Before going live:

**Build & Upload:**
- [ ] Run `npm install`
- [ ] Run `npm run build`
- [ ] Upload `dist` folder contents to server
- [ ] Upload `sendmail.php` to server root
- [ ] Set file permissions (644)

**Configuration:**
- [ ] Verify email recipient in sendmail.php
- [ ] Update CORS header with your domain
- [ ] Test PHP version (7.0+)
- [ ] Confirm mail() function works

**Testing:**
- [ ] Test form on live site
- [ ] Verify email delivery
- [ ] Check spam folder
- [ ] Test on mobile device
- [ ] Test error handling
- [ ] Verify success messages

**Security:**
- [ ] HTTPS enabled (SSL certificate)
- [ ] Error logging enabled
- [ ] Rate limiting (optional)
- [ ] reCAPTCHA (optional)

**Monitoring:**
- [ ] Check submission logs
- [ ] Monitor error logs
- [ ] Set up email alerts
- [ ] Test backup email

---

## 🌐 **Hosting Recommendations**

### **Recommended Hosts (PHP-Friendly):**

✅ **Shared Hosting:**
- Bluehost
- SiteGround
- HostGator
- GoDaddy

✅ **VPS/Cloud:**
- DigitalOcean
- Linode
- Vultr
- AWS Lightsail

✅ **Managed WordPress:**
- WP Engine (supports PHP)
- Kinsta
- Flywheel

❌ **Not Recommended:**
- Netlify (No PHP support)
- Vercel (No PHP support)
- GitHub Pages (No PHP support)

For these, use Formspree instead (see `CONTACT_FORM_SETUP.md`).

---

## 📞 **Support**

### **Questions?**
- 📧 Email: info@quantummind-innovation.com
- 📖 Documentation: See markdown files in ZIP

### **Common Issues:**
- Emails not sending → Check `PHP_DEPLOYMENT_GUIDE.md`
- CORS errors → Update origin header
- 500 errors → Check file permissions and PHP version

---

## 🎉 **Success!**

Your website with PHP backend is **production-ready**!

**What You Have:**
- ✅ Fully functional contact form
- ✅ Professional email templates
- ✅ Security features built-in
- ✅ Error handling & logging
- ✅ Mobile responsive
- ✅ Production-ready code

**Next Steps:**
1. Build the website (`npm run build`)
2. Upload to your hosting
3. Upload sendmail.php
4. Test the form
5. Start receiving inquiries!

---

**Built with ❤️ for Quantum Mind Innovation**

*The Future of Things* ✨

---

**Need assistance? Contact: info@quantummind-innovation.com**
