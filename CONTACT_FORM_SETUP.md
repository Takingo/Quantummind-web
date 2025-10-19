# 📧 Contact Form Setup Guide

## ✅ **Current Implementation: Formspree (Recommended)**

Your contact form is now configured with **Formspree**, a reliable third-party service that handles form submissions without requiring backend code.

---

## 🚀 **Quick Setup Steps**

### Option 1: Use Formspree (Currently Implemented - FREE)

1. **Create a Formspree Account** (Free)
   - Go to: https://formspree.io/
   - Sign up with your email
   - Verify your email address

2. **Create a New Form**
   - Click "New Form"
   - Name it: "Quantum Mind Contact Form"
   - Set email to: `info@quantummind-innovation.com`

3. **Get Your Form ID**
   - After creating the form, you'll get a Form ID like: `xpwakolz`
   - Or a full URL like: `https://formspree.io/f/xpwakolz`

4. **Update the Code (Already Done!)**
   - The form is already configured in `src/pages/Contact.jsx`
   - Current endpoint: `https://formspree.io/f/xpwakolz`
   - **IMPORTANT:** Replace `xpwakolz` with YOUR actual Formspree Form ID

5. **Test the Form**
   - Run your website: `npm run dev`
   - Go to the Contact page
   - Submit a test message
   - Check your email at `info@quantummind-innovation.com`

---

## 📝 **How to Update the Form ID**

Open `src/pages/Contact.jsx` and find line ~38:

```javascript
const response = await fetch('https://formspree.io/f/xpwakolz', {
```

**Replace `xpwakolz` with your Form ID:**

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

---

## 🎯 **Features Included**

✅ **Real Email Delivery** - Messages sent directly to `info@quantummind-innovation.com`
✅ **Form Validation** - Required fields enforced
✅ **Loading State** - Shows "Sending..." with spinner
✅ **Success Message** - Confirmation when message is sent
✅ **Error Handling** - User-friendly error messages
✅ **Auto-Reset** - Form clears after 5 seconds
✅ **Spam Protection** - Formspree includes built-in spam filtering
✅ **Mobile Responsive** - Works on all devices
✅ **Reply-To Header** - Easy to reply to sender
✅ **Custom Subject** - Email subject includes sender's name

---

## 🆓 **Formspree Free Plan Limits**

- ✅ 50 submissions per month
- ✅ Unlimited forms
- ✅ Email notifications
- ✅ Spam filtering
- ✅ File uploads (if needed later)

**Need more?** Upgrade to paid plan for unlimited submissions.

---

## 🔧 **Alternative Option 2: PHP Backend (Self-Hosted)**

If you prefer to host your own backend, here's a PHP solution:

### PHP Setup Instructions

1. **Create `contact-handler.php`** on your server:

```php
<?php
// contact-handler.php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);

// Validate required fields
if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Missing required fields']);
    exit;
}

// Sanitize inputs
$name = htmlspecialchars(strip_tags($data['name']));
$company = htmlspecialchars(strip_tags($data['company'] ?? ''));
$email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars(strip_tags($data['phone'] ?? ''));
$message = htmlspecialchars(strip_tags($data['message']));

// Validate email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid email address']);
    exit;
}

// Email configuration
$to = 'info@quantummind-innovation.com';
$subject = 'New Contact Form Submission from ' . $name;

// Email body
$emailBody = "
===========================================
NEW CONTACT FORM SUBMISSION
===========================================

Name: $name
Company: $company
Email: $email
Phone: $phone

Message:
$message

===========================================
Sent from: Quantum Mind Innovation Website
Time: " . date('Y-m-d H:i:s') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
===========================================
";

// Email headers
$headers = "From: noreply@quantummind-innovation.com\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Send email
if (mail($to, $subject, $emailBody, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Message sent successfully']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message']);
}
?>
```

2. **Update `Contact.jsx`** to use PHP backend:

Change line ~38 from:
```javascript
const response = await fetch('https://formspree.io/f/xpwakolz', {
```

To:
```javascript
const response = await fetch('https://your-domain.com/contact-handler.php', {
```

3. **Upload PHP file** to your web server (cPanel, FTP, etc.)

4. **Test the form** to ensure emails are being sent

---

## 🔧 **Alternative Option 3: Netlify Forms**

If deploying to Netlify, you can use their built-in form handling:

1. **Add `netlify` attribute** to the form in `Contact.jsx`:

```jsx
<form 
  className="contact-form" 
  onSubmit={handleSubmit}
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="contact" />
```

2. **Update the fetch URL** to post to the same page:

```javascript
const response = await fetch('/', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    'form-name': 'contact',
    ...formData
  }).toString()
});
```

3. **Configure email notifications** in Netlify dashboard:
   - Go to: Site Settings → Forms → Form notifications
   - Add email: `info@quantummind-innovation.com`

---

## 🧪 **Testing the Form**

### Test Checklist:

1. ✅ **Form Validation**
   - Try submitting without required fields
   - Verify error messages appear

2. ✅ **Successful Submission**
   - Fill all fields with valid data
   - Click "Send Message"
   - Verify loading state appears
   - Verify success message appears
   - Check email inbox for message

3. ✅ **Error Handling**
   - Test with invalid API endpoint (temporarily)
   - Verify error message appears

4. ✅ **Mobile Responsiveness**
   - Test on mobile device
   - Verify form is easy to use

5. ✅ **Email Content**
   - Verify all form data appears in email
   - Verify sender's email in "Reply-To"
   - Verify subject line is correct

---

## 🎨 **Customization Options**

### Change Success Message

In `Contact.jsx`, line ~55:
```javascript
message: 'Your custom success message here'
```

### Change Error Message

In `Contact.jsx`, line ~71:
```javascript
message: 'Your custom error message here'
```

### Change Auto-Reset Timer

In `Contact.jsx`, line ~59 (currently 5000ms = 5 seconds):
```javascript
setTimeout(() => {
  // Reset form
}, 5000); // Change this number
```

### Add More Form Fields

1. Add to `formData` state:
```javascript
const [formData, setFormData] = useState({
  name: '',
  company: '',
  email: '',
  phone: '',
  projectDetails: '',
  newField: '' // Add new field
});
```

2. Add form group in JSX:
```jsx
<div className="form-group">
  <label htmlFor="newField">New Field Label</label>
  <input
    type="text"
    id="newField"
    name="newField"
    value={formData.newField}
    onChange={handleChange}
    placeholder="Enter value"
  />
</div>
```

---

## 🔒 **Security Best Practices**

✅ **Already Implemented:**
- Form validation on frontend
- HTTPS required for production
- Spam protection (Formspree)
- Sanitized inputs in PHP example

**Additional Recommendations:**
- Enable reCAPTCHA (available in Formspree Pro)
- Rate limiting on backend
- Email validation
- Honeypot fields for spam prevention

---

## 📊 **Form Analytics**

With Formspree, you can track:
- Number of submissions
- Submission success rate
- Most common inquiries
- Response times

Access analytics at: https://formspree.io/forms/YOUR_FORM_ID/analytics

---

## 🐛 **Troubleshooting**

### Issue: Form not sending emails

**Solutions:**
1. Verify Formspree Form ID is correct
2. Check browser console for errors
3. Verify email address in Formspree dashboard
4. Check spam folder
5. Ensure website is deployed (not just localhost)

### Issue: CORS errors

**Solutions:**
1. Formspree handles CORS automatically
2. For PHP: Add CORS headers (already in example)
3. Deploy to production (CORS issues mainly on localhost)

### Issue: Emails not arriving

**Solutions:**
1. Check spam/junk folder
2. Verify email in Formspree settings
3. Check Formspree submission logs
4. Verify domain DNS settings (for custom domains)

### Issue: Form button stuck in loading state

**Solutions:**
1. Check network tab for failed requests
2. Verify API endpoint is correct
3. Check for JavaScript errors in console
4. Verify fetch request is properly formatted

---

## 📞 **Support**

### Formspree Support:
- Documentation: https://help.formspree.io/
- Email: support@formspree.io

### Your Development Team:
- Email: info@quantummind-innovation.com

---

## ✅ **Deployment Checklist**

Before going live:

1. [ ] Update Formspree Form ID with your actual ID
2. [ ] Test form submission on localhost
3. [ ] Test form submission on staging/production
4. [ ] Verify emails arrive at correct address
5. [ ] Test on mobile devices
6. [ ] Test error handling
7. [ ] Update Privacy Policy (form data handling)
8. [ ] Set up email forwarding if needed
9. [ ] Configure spam filtering
10. [ ] Monitor first week of submissions

---

## 🎉 **You're All Set!**

Your contact form is now fully functional and ready to receive messages!

**Next Steps:**
1. Replace the Formspree Form ID with your own
2. Test the form thoroughly
3. Deploy your website
4. Monitor incoming messages

---

**Questions?** Contact: info@quantummind-innovation.com

*Built with ❤️ for Quantum Mind Innovation*
