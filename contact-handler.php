<?php
/**
 * ================================================================
 * QUANTUM MIND INNOVATION - CONTACT FORM HANDLER
 * ================================================================
 * This PHP script handles contact form submissions and sends emails
 * 
 * REQUIREMENTS:
 * - PHP 7.0 or higher
 * - mail() function enabled on server
 * - HTTPS recommended for production
 * 
 * INSTALLATION:
 * 1. Upload this file to your web server
 * 2. Update $to_email with your email address
 * 3. Update the fetch URL in Contact.jsx to point to this file
 * 4. Test the form
 * ================================================================
 */

// ================================================================
// CONFIGURATION
// ================================================================

// Your email address where form submissions will be sent
$to_email = 'info@quantummind-innovation.com';

// Email subject prefix
$subject_prefix = 'Contact Form - ';

// Success/Error messages
$messages = [
    'success' => 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
    'error_method' => 'Invalid request method. Only POST is allowed.',
    'error_missing' => 'Please fill in all required fields.',
    'error_email' => 'Please provide a valid email address.',
    'error_send' => 'Failed to send message. Please try again or email us directly.',
];

// ================================================================
// CORS HEADERS (Allow requests from your website)
// ================================================================

header('Access-Control-Allow-Origin: *'); // In production, replace * with your domain
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// ================================================================
// VALIDATE REQUEST METHOD
// ================================================================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => $messages['error_method']
    ]);
    exit;
}

// ================================================================
// GET AND PARSE POST DATA
// ================================================================

$input = file_get_contents('php://input');
$data = json_decode($input, true);

// Log request for debugging (comment out in production)
// error_log('Contact Form Submission: ' . print_r($data, true));

// ================================================================
// VALIDATE REQUIRED FIELDS
// ================================================================

if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $messages['error_missing']
    ]);
    exit;
}

// ================================================================
// SANITIZE AND VALIDATE INPUTS
// ================================================================

$name = htmlspecialchars(strip_tags(trim($data['name'])));
$company = !empty($data['company']) ? htmlspecialchars(strip_tags(trim($data['company']))) : 'Not provided';
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$phone = !empty($data['phone']) ? htmlspecialchars(strip_tags(trim($data['phone']))) : 'Not provided';
$message = htmlspecialchars(strip_tags(trim($data['message'])));

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => $messages['error_email']
    ]);
    exit;
}

// ================================================================
// SPAM PROTECTION (Basic Honeypot)
// ================================================================

// Check for honeypot field (add this field to your form with CSS display:none)
if (!empty($data['honeypot']) || !empty($data['website'])) {
    // Silently reject spam
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => $messages['success']
    ]);
    exit;
}

// ================================================================
// PREPARE EMAIL
// ================================================================

$subject = $subject_prefix . 'Inquiry from ' . $name;

// HTML Email Body
$html_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; background: #f4f4f4; }
        .header { background: linear-gradient(135deg, #00E1FF 0%, #0077FF 100%); color: white; padding: 20px; text-align: center; }
        .content { background: white; padding: 30px; margin-top: 20px; border-radius: 10px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #00E1FF; }
        .value { margin-top: 5px; padding: 10px; background: #f9f9f9; border-left: 3px solid #00E1FF; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
        .message-box { background: #f0f8ff; padding: 15px; border-radius: 5px; margin-top: 10px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>🌐 New Contact Form Submission</h2>
            <p>Quantum Mind Innovation</p>
        </div>
        
        <div class='content'>
            <div class='field'>
                <div class='label'>👤 Name:</div>
                <div class='value'>{$name}</div>
            </div>
            
            <div class='field'>
                <div class='label'>🏢 Company:</div>
                <div class='value'>{$company}</div>
            </div>
            
            <div class='field'>
                <div class='label'>📧 Email:</div>
                <div class='value'><a href='mailto:{$email}'>{$email}</a></div>
            </div>
            
            <div class='field'>
                <div class='label'>📱 Phone:</div>
                <div class='value'>{$phone}</div>
            </div>
            
            <div class='field'>
                <div class='label'>💬 Message:</div>
                <div class='message-box'>{$message}</div>
            </div>
        </div>
        
        <div class='footer'>
            <p><strong>Submission Details:</strong></p>
            <p>Date: " . date('F j, Y, g:i a') . "</p>
            <p>IP Address: " . $_SERVER['REMOTE_ADDR'] . "</p>
            <p>User Agent: " . htmlspecialchars($_SERVER['HTTP_USER_AGENT']) . "</p>
        </div>
    </div>
</body>
</html>
";

// Plain text version (fallback)
$text_body = "
===========================================
NEW CONTACT FORM SUBMISSION
===========================================

Name: {$name}
Company: {$company}
Email: {$email}
Phone: {$phone}

Message:
{$message}

===========================================
Submission Details:
Date: " . date('F j, Y, g:i a') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "
===========================================
";

// ================================================================
// EMAIL HEADERS
// ================================================================

$headers = [];
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/html; charset=UTF-8';
$headers[] = 'From: Quantum Mind Website <noreply@quantummind-innovation.com>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'X-Mailer: PHP/' . phpversion();
$headers[] = 'X-Priority: 1'; // High priority
$headers[] = 'Importance: High';

// ================================================================
// SEND EMAIL
// ================================================================

$mail_sent = mail($to_email, $subject, $html_body, implode("\r\n", $headers));

// ================================================================
// RESPONSE
// ================================================================

if ($mail_sent) {
    // Success
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => $messages['success']
    ]);
    
    // Optional: Log successful submission
    error_log('Contact form submission successful from: ' . $email);
    
} else {
    // Error
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => $messages['error_send']
    ]);
    
    // Log error
    error_log('Contact form submission failed from: ' . $email);
}

// ================================================================
// OPTIONAL: SAVE TO DATABASE
// ================================================================

/*
// Uncomment this section if you want to save submissions to a database

try {
    $pdo = new PDO('mysql:host=localhost;dbname=your_database', 'username', 'password');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    $stmt = $pdo->prepare("
        INSERT INTO contact_submissions (name, company, email, phone, message, ip_address, created_at) 
        VALUES (:name, :company, :email, :phone, :message, :ip, NOW())
    ");
    
    $stmt->execute([
        ':name' => $name,
        ':company' => $company,
        ':email' => $email,
        ':phone' => $phone,
        ':message' => $message,
        ':ip' => $_SERVER['REMOTE_ADDR']
    ]);
    
} catch (PDOException $e) {
    error_log('Database error: ' . $e->getMessage());
}
*/

// ================================================================
// OPTIONAL: AUTO-REPLY TO SENDER
// ================================================================

/*
// Uncomment to send auto-reply to the person who submitted the form

$auto_reply_subject = 'Thank you for contacting Quantum Mind Innovation';
$auto_reply_body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #00E1FF 0%, #0077FF 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e0e0e0; border-radius: 0 0 10px 10px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h2>Thank You!</h2>
            <p>Quantum Mind Innovation</p>
        </div>
        <div class='content'>
            <p>Dear {$name},</p>
            <p>Thank you for reaching out to Quantum Mind Innovation. We have received your message and will get back to you within 24-48 hours.</p>
            <p><strong>Your message:</strong></p>
            <p style='background: #f0f8ff; padding: 15px; border-radius: 5px;'>{$message}</p>
            <p>In the meantime, feel free to explore our website to learn more about our solutions.</p>
            <p>Best regards,<br><strong>The Quantum Mind Innovation Team</strong></p>
        </div>
    </div>
</body>
</html>
";

$auto_reply_headers = [];
$auto_reply_headers[] = 'MIME-Version: 1.0';
$auto_reply_headers[] = 'Content-Type: text/html; charset=UTF-8';
$auto_reply_headers[] = 'From: Quantum Mind Innovation <info@quantummind-innovation.com>';
$auto_reply_headers[] = 'X-Mailer: PHP/' . phpversion();

mail($email, $auto_reply_subject, $auto_reply_body, implode("\r\n", $auto_reply_headers));
*/

?>
