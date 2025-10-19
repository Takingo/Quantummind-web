# 🚀 PHP Contact Form - Deployment Guide

## ✅ **PHP Backend Configured**

Your contact form now uses a **PHP backend** (`sendmail.php`) that sends emails directly to **info@quantummind-innovation.com**.

---

## 📦 **What's Included in This Export**

```
Quantum-Mind-Innovation-Website/
├── public/
│   └── sendmail.php         ← PHP email handler
├── src/
│   ├── pages/
│   │   └── Contact.jsx      ← Updated to use PHP backend
│   └── ...
└── All other website files
```

---

## 🚀 **Deployment Steps**

### **Step 1: Build the Website**

```bash
npm install
npm run build
```

This creates a `dist` folder with all production files.

---

### **Step 2: Upload to Your Web Server**

Upload these files to your hosting:

```
Your Server Root/
├── index.html
├── assets/
│   ├── *.js
│   ├── *.css
│   └── images/
├── sendmail.php    ← Upload this to root or public folder
└── favicon.svg
```

**Methods:**
- 🔹 **FTP/SFTP:** FileZilla, WinSCP
- 🔹 **cPanel:** File Manager
- 🔹 **SSH:** `scp` or `rsync`

---

### **Step 3: Verify PHP Configuration**

Your hosting must support:
- ✅ PHP 7.0 or higher
- ✅ `mail()` function enabled
- ✅ SMTP configured

**Check PHP version:**
Create `phpinfo.php`:
```php
<?php phpinfo(); ?>
```
Visit: `https://yourdomain.com/phpinfo.php`

**Delete it after checking!**

---

### **Step 4: Test the Contact Form**

1. Visit your website: `https://yourdomain.com/contact`
2. Fill out the form
3. Click "Send Message"
4. Check email at: `info@quantummind-innovation.com`

---

## 🔧 **Troubleshooting**

### ❌ **Emails Not Arriving?**

**Check 1: PHP mail() function**
```php
<?php
$result = mail('info@quantummind-innovation.com', 'Test', 'Test message');
echo $result ? 'Mail sent!' : 'Mail failed!';
?>
```

**Check 2: Server logs**
- Location: `/var/log/mail.log` or check cPanel
- Look for: sendmail errors

**Check 3: Spam folder**
- Check spam/junk folder
- Add sender to whitelist

**Check 4: SPF/DKIM records**
- Configure in your domain DNS
- Prevents emails being marked as spam

---

### ❌ **CORS Errors?**

Update `sendmail.php` line 16:
```php
header('Access-Control-Allow-Origin: *'); 
```

Change `*` to your actual domain:
```php
header('Access-Control-Allow-Origin: https://yourdomain.com');
```

---

### ❌ **500 Internal Server Error?**

**Check 1: File permissions**
```bash
chmod 644 sendmail.php
```

**Check 2: PHP errors**
Enable error logging in `sendmail.php`:
```php
ini_set('display_errors', 1);
error_reporting(E_ALL);
```

**Check 3: PHP version**
Ensure PHP 7.0+ is available

---

## 📧 **Email Configuration**

### **Change Recipient Email**

Edit `sendmail.php` line 69:
```php
$to = 'info@quantummind-innovation.com';
```

Change to your email:
```php
$to = 'your-email@example.com';
```

---

### **Customize Email Template**

Edit the HTML section in `sendmail.php` (starting around line 80) to customize:
- Colors
- Logo
- Branding
- Layout

---

### **Add Auto-Reply**

Add this code after the main email is sent (around line 310):

```php
// Send auto-reply to customer
$autoReplySubject = 'Thank you for contacting Quantum Mind Innovation';
$autoReplyBody = '
<html>
<body>
    <h2>Thank You!</h2>
    <p>Dear ' . $name . ',</p>
    <p>We have received your message and will get back to you within 24-48 hours.</p>
    <p>Best regards,<br>The Quantum Mind Innovation Team</p>
</body>
</html>
';
$autoReplyHeaders = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Quantum Mind Innovation <info@quantummind-innovation.com>'
];
mail($email, $autoReplySubject, $autoReplyBody, implode("\r\n", $autoReplyHeaders));
```

---

## 🔒 **Security Best Practices**

### **Already Implemented:**
✅ Input sanitization
✅ Email validation
✅ Honeypot spam protection
✅ XSS prevention
✅ CORS headers

### **Additional Security:**

**1. Rate Limiting**
Add to `sendmail.php`:
```php
session_start();
$limit = 3; // Max 3 submissions per hour
$timeWindow = 3600; // 1 hour

if (!isset($_SESSION['submission_count'])) {
    $_SESSION['submission_count'] = 1;
    $_SESSION['first_submission'] = time();
} else {
    if (time() - $_SESSION['first_submission'] < $timeWindow) {
        if ($_SESSION['submission_count'] >= $limit) {
            http_response_code(429);
            echo json_encode(['success' => false, 'message' => 'Too many requests']);
            exit;
        }
        $_SESSION['submission_count']++;
    } else {
        $_SESSION['submission_count'] = 1;
        $_SESSION['first_submission'] = time();
    }
}
```

**2. reCAPTCHA Integration**
Get keys from: https://www.google.com/recaptcha/admin

**3. IP Blocking**
Create `blocked-ips.txt` and check:
```php
$blocked = file('blocked-ips.txt', FILE_IGNORE_NEW_LINES);
if (in_array($_SERVER['REMOTE_ADDR'], $blocked)) {
    http_response_code(403);
    exit('Access denied');
}
```

---

## 📊 **Monitoring & Logs**

### **Check Submission Logs**

File: `contact-submissions.log`

View recent submissions:
```bash
tail -n 50 contact-submissions.log
```

### **Check Error Logs**

File: `php-errors.log`

View errors:
```bash
tail -n 50 php-errors.log
```

### **Email Delivery Tracking**

Most hosting providers provide email logs in:
- cPanel: Email Deliverability
- Plesk: Tools & Settings → Mail Server Settings
- SSH: `/var/log/mail.log`

---

## 🌐 **Hosting Provider Guides**

### **cPanel Hosting**
1. Build: `npm run build`
2. Upload `dist` folder contents to `public_html`
3. Upload `sendmail.php` to `public_html`
4. Set permissions: 644
5. Test form

### **Shared Hosting (GoDaddy, Bluehost, etc.)**
1. Build: `npm run build`
2. Use FTP to upload to root
3. Upload `sendmail.php`
4. Ensure PHP mail() is enabled
5. Test form

### **VPS/Dedicated Server**
1. Install dependencies:
   ```bash
   sudo apt update
   sudo apt install php php-mbstring sendmail
   ```
2. Configure sendmail
3. Upload files
4. Test form

### **Netlify/Vercel (Not Recommended for PHP)**
These don't support PHP. Use:
- Formspree (original solution)
- Netlify Functions
- Vercel Serverless Functions

---

## ✅ **Pre-Deployment Checklist**

- [ ] Built production files (`npm run build`)
- [ ] Tested form on localhost
- [ ] Verified PHP version (7.0+)
- [ ] Confirmed mail() function works
- [ ] Updated CORS headers with real domain
- [ ] Set correct file permissions (644)
- [ ] Tested email delivery
- [ ] Checked spam folder
- [ ] Verified all form fields
- [ ] Tested on mobile
- [ ] Enabled error logging
- [ ] Set up monitoring

---

## 🔄 **Alternative: Keep Using Formspree**

If PHP mail() doesn't work on your host, revert to Formspree:

Edit `Contact.jsx` line 38:
```javascript
const response = await fetch('https://formspree.io/f/info@quantummind-innovation.com', {
```

Formspree advantages:
- No server configuration
- Better spam protection
- Email analytics
- Always works

---

## 📞 **Support**

### **Common Issues:**

**Issue:** 500 error
**Fix:** Check PHP logs, verify permissions

**Issue:** Emails not sending
**Fix:** Contact hosting support to enable mail()

**Issue:** Emails go to spam
**Fix:** Configure SPF/DKIM records

**Issue:** CORS errors
**Fix:** Update origin header in sendmail.php

---

## 🎉 **You're Ready to Deploy!**

Your website with working PHP contact form is ready for production.

**Next Steps:**
1. Build the website
2. Upload to your hosting
3. Upload sendmail.php
4. Test the form
5. Monitor submissions

---

**Need Help?**
Contact: info@quantummind-innovation.com

---

*Built for Quantum Mind Innovation - The Future of Things* ✨
