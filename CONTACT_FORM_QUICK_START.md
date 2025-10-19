# 📧 Contact Form - Quick Start Guide

## ⚡ **5-Minute Setup with Formspree (Recommended)**

### Step 1: Create Formspree Account
1. Go to: **https://formspree.io/**
2. Sign up (FREE)
3. Verify your email

### Step 2: Create New Form
1. Click **"New Form"**
2. Name: `Quantum Mind Contact Form`
3. Email: `info@quantummind-innovation.com`
4. Click **"Create"**

### Step 3: Get Your Form ID
You'll see a Form ID like: `xpwakolz`

### Step 4: Update Your Code
Open: `src/pages/Contact.jsx`

Find line **~38**:
```javascript
const response = await fetch('https://formspree.io/f/xpwakolz', {
```

Replace `xpwakolz` with **YOUR Form ID**:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

### Step 5: Test!
```bash
npm run dev
```
Go to Contact page → Fill form → Submit → Check email!

---

## ✅ **Done! Your form is live.**

---

## 🔄 **Alternative: PHP Backend (Self-Hosted)**

If you want to host your own backend:

### Step 1: Upload PHP File
Upload `contact-handler.php` to your web server

### Step 2: Update Email
In `contact-handler.php`, line 20:
```php
$to_email = 'info@quantummind-innovation.com';
```

### Step 3: Update Frontend
In `Contact.jsx`, line ~38:
```javascript
const response = await fetch('https://yourdomain.com/contact-handler.php', {
```

### Step 4: Test
Submit form → Check email!

---

## 📋 **What's Included**

✅ Real email delivery to `info@quantummind-innovation.com`
✅ Form validation (required fields)
✅ Loading spinner during submission
✅ Success/Error messages
✅ Auto-reset after submission
✅ Spam protection
✅ Mobile responsive
✅ Reply-To header (easy replies)
✅ Custom email templates

---

## 🧪 **Quick Test Checklist**

1. [ ] Form loads correctly
2. [ ] Required fields show error when empty
3. [ ] Loading state appears when submitting
4. [ ] Success message shows after submit
5. [ ] Email arrives at `info@quantummind-innovation.com`
6. [ ] Form resets after 5 seconds
7. [ ] Works on mobile

---

## 🐛 **Common Issues**

### ❌ Emails not arriving?
- Check spam folder
- Verify Formspree Form ID is correct
- Confirm email in Formspree dashboard

### ❌ CORS errors?
- Formspree handles CORS automatically
- For PHP: CORS headers already included

### ❌ Form stuck on "Sending..."?
- Check browser console for errors
- Verify API endpoint URL is correct
- Ensure internet connection

---

## 📞 **Need Help?**

- 📖 **Full Guide:** See `CONTACT_FORM_SETUP.md`
- 🌐 **Formspree Docs:** https://help.formspree.io/
- 📧 **Email:** info@quantummind-innovation.com

---

## 🎉 **You're All Set!**

Your contact form is production-ready and will deliver messages directly to your inbox.

**Next Steps:**
1. Update Form ID (Formspree) or upload PHP file
2. Test thoroughly
3. Deploy your website
4. Start receiving inquiries!

---

*Built for Quantum Mind Innovation - The Future of Things* ✨
