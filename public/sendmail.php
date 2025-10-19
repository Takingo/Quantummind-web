<?php
/**
 * ================================================================
 * QUANTUM MIND INNOVATION - CONTACT FORM EMAIL HANDLER
 * ================================================================
 * Sends form submissions to: info@quantummind-innovation.com
 * ================================================================
 */

// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', __DIR__ . '/php-errors.log');

// CORS Headers - Allow requests from your domain
header('Access-Control-Allow-Origin: *'); // Change * to your domain in production
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json; charset=UTF-8');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Only POST requests are allowed'
    ]);
    exit;
}

// Get POST data - handle both JSON and FormData
if (isset($_POST['type'])) {
    // FormData from Innovation Hub
    $formType = $_POST['type'];
    $data = $_POST;
} else {
    // JSON from Contact Form
    $rawData = file_get_contents('php://input');
    $data = json_decode($rawData, true);
    $formType = 'contact';
    
    // Validate JSON
    if (json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Invalid JSON data'
        ]);
        exit;
    }
}

// Handle different form types
if ($formType === 'innovation') {
    // Innovation Hub form validation
    if (empty($data['name']) || empty($data['email']) || empty($data['ideaTitle']) || empty($data['detailedExplanation'])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Please fill in all required fields'
        ]);
        exit;
    }
    
    $name = htmlspecialchars(strip_tags(trim($data['name'])));
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $ideaTitle = htmlspecialchars(strip_tags(trim($data['ideaTitle'])));
    $shortDesc = htmlspecialchars(strip_tags(trim($data['shortDescription'])));
    $detailedExp = htmlspecialchars(strip_tags(trim($data['detailedExplanation'])));
    
    // Handle file upload
    $fileInfo = '';
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $fileInfo = '<div class="info-section">
            <div class="info-label">📎 Attached File</div>
            <div class="info-value">' . htmlspecialchars($_FILES['file']['name']) . ' (' . number_format($_FILES['file']['size'] / 1024, 2) . ' KB)</div>
        </div>';
    }
    
} else {
    // Contact form validation
    if (empty($data['name']) || empty($data['email']) || empty($data['message'])) {
        http_response_code(400);
        echo json_encode([
            'success' => false,
            'message' => 'Please fill in all required fields (Name, Email, Message)'
        ]);
        exit;
    }
    
    $name = htmlspecialchars(strip_tags(trim($data['name'])));
    $company = !empty($data['company']) ? htmlspecialchars(strip_tags(trim($data['company']))) : 'Not provided';
    $email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
    $phone = !empty($data['phone']) ? htmlspecialchars(strip_tags(trim($data['phone']))) : 'Not provided';
    $message = htmlspecialchars(strip_tags(trim($data['message'])));
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode([
        'success' => false,
        'message' => 'Please provide a valid email address'
    ]);
    exit;
}

// Basic spam protection - honeypot field
if (!empty($data['website']) || !empty($data['url'])) {
    // Silent rejection for spam
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully.'
    ]);
    exit;
}

// Email configuration
$to = 'info@quantummind-innovation.com';

if ($formType === 'innovation') {
    $subject = 'New Idea Submission - Innovation Hub: ' . $ideaTitle;
} else {
    $subject = 'New Contact Form Submission from ' . $name;
}

// HTML Email Body
if ($formType === 'innovation') {
    // Innovation Hub email template
    $htmlBody = '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Innovation Hub Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .email-header {
            background: linear-gradient(135deg, #8B5CF6 0%, #00E1FF 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .email-header p {
            margin: 10px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
        }
        .email-body {
            padding: 30px;
        }
        .info-section {
            margin-bottom: 25px;
        }
        .info-label {
            font-weight: 600;
            color: #8B5CF6;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .info-value {
            background: #f8f9fa;
            padding: 12px 15px;
            border-radius: 6px;
            border-left: 3px solid #8B5CF6;
            font-size: 14px;
        }
        .idea-box {
            background: #f0f0ff;
            padding: 20px;
            border-radius: 6px;
            border: 1px solid #d0d0ff;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .email-footer {
            background: #f8f9fa;
            padding: 20px 30px;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #e0e0e0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>💡 New Idea Submission</h1>
            <p>Innovation Hub</p>
        </div>
        
        <div class="email-body">
            <div class="info-section">
                <div class="info-label">👤 Submitted By</div>
                <div class="info-value">' . $name . '</div>
            </div>
            
            <div class="info-section">
                <div class="info-label">📧 Email</div>
                <div class="info-value"><a href="mailto:' . $email . '">' . $email . '</a></div>
            </div>
            
            <div class="info-section">
                <div class="info-label">💡 Idea Title</div>
                <div class="info-value"><strong>' . $ideaTitle . '</strong></div>
            </div>
            
            <div class="info-section">
                <div class="info-label">📝 Short Description</div>
                <div class="info-value">' . $shortDesc . '</div>
            </div>
            
            <div class="info-section">
                <div class="info-label">📑 Detailed Explanation</div>
                <div class="idea-box">' . nl2br($detailedExp) . '</div>
            </div>
            
            ' . $fileInfo . '
        </div>
        
        <div class="email-footer">
            <div><strong>Submission Time:</strong> ' . date('F j, Y, g:i A T') . '</div>
            <div><strong>IP Address:</strong> ' . $_SERVER['REMOTE_ADDR'] . '</div>
        </div>
    </div>
</body>
</html>
';
} else {
    // Contact form email template
$htmlBody = '
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .email-container {
            max-width: 600px;
            margin: 20px auto;
            background: #ffffff;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .email-header {
            background: linear-gradient(135deg, #00E1FF 0%, #0077FF 100%);
            color: white;
            padding: 30px;
            text-align: center;
        }
        .email-header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .email-header p {
            margin: 10px 0 0 0;
            font-size: 14px;
            opacity: 0.9;
        }
        .email-body {
            padding: 30px;
        }
        .info-section {
            margin-bottom: 25px;
        }
        .info-label {
            font-weight: 600;
            color: #00E1FF;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
        }
        .info-value {
            background: #f8f9fa;
            padding: 12px 15px;
            border-radius: 6px;
            border-left: 3px solid #00E1FF;
            font-size: 14px;
        }
        .message-box {
            background: #f0f8ff;
            padding: 20px;
            border-radius: 6px;
            border: 1px solid #d0e8ff;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        .email-footer {
            background: #f8f9fa;
            padding: 20px 30px;
            font-size: 12px;
            color: #666;
            border-top: 1px solid #e0e0e0;
        }
        .footer-info {
            margin: 5px 0;
        }
        .footer-info strong {
            color: #333;
        }
        .logo {
            font-family: "Orbitron", sans-serif;
            font-weight: 700;
            font-size: 16px;
            margin-top: 10px;
        }
        .reply-button {
            display: inline-block;
            background: #00E1FF;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            border-radius: 6px;
            margin-top: 15px;
            font-weight: 600;
        }
        .quick-actions {
            margin-top: 20px;
            padding-top: 20px;
            border-top: 1px solid #e0e0e0;
        }
        .action-link {
            color: #0077FF;
            text-decoration: none;
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <h1>🌐 New Contact Form Submission</h1>
            <p>Quantum Mind Innovation</p>
            <div class="logo">THE FUTURE OF THINGS</div>
        </div>
        
        <div class="email-body">
            <div class="info-section">
                <div class="info-label">👤 Name</div>
                <div class="info-value">' . $name . '</div>
            </div>
            
            <div class="info-section">
                <div class="info-label">🏢 Company</div>
                <div class="info-value">' . $company . '</div>
            </div>
            
            <div class="info-section">
                <div class="info-label">📧 Email Address</div>
                <div class="info-value">
                    <a href="mailto:' . $email . '" style="color: #0077FF; text-decoration: none;">' . $email . '</a>
                </div>
            </div>
            
            <div class="info-section">
                <div class="info-label">📱 Phone Number</div>
                <div class="info-value">' . $phone . '</div>
            </div>
            
            <div class="info-section">
                <div class="info-label">💬 Message</div>
                <div class="message-box">' . nl2br($message) . '</div>
            </div>
            
            <div class="quick-actions">
                <a href="mailto:' . $email . '?subject=Re: Your inquiry to Quantum Mind Innovation" class="reply-button">
                    Reply to ' . $name . '
                </a>
            </div>
        </div>
        
        <div class="email-footer">
            <div class="footer-info"><strong>Submission Time:</strong> ' . date('F j, Y, g:i A T') . '</div>
            <div class="footer-info"><strong>IP Address:</strong> ' . $_SERVER['REMOTE_ADDR'] . '</div>
            <div class="footer-info"><strong>User Agent:</strong> ' . substr($_SERVER['HTTP_USER_AGENT'], 0, 100) . '</div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #d0d0d0;">
                <strong>Quantum Mind Innovation</strong><br>
                Engineering the Future of Things<br>
                <a href="mailto:info@quantummind-innovation.com" class="action-link">info@quantummind-innovation.com</a>
            </div>
        </div>
    </div>
</body>
</html>
';
}

// Plain text version (fallback)
$textBody = "
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
Date/Time: " . date('F j, Y, g:i A T') . "
IP Address: " . $_SERVER['REMOTE_ADDR'] . "
User Agent: " . $_SERVER['HTTP_USER_AGENT'] . "
===========================================

Quantum Mind Innovation
The Future of Things
info@quantummind-innovation.com
===========================================
";

// Email headers
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=UTF-8',
    'From: Quantum Mind Website <noreply@quantummind-innovation.com>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion(),
    'X-Priority: 1',
    'Importance: High',
    'X-MSMail-Priority: High'
];

// Send email
$mailSent = mail($to, $subject, $htmlBody, implode("\r\n", $headers));

if ($mailSent) {
    // Log success
    error_log('Contact form: Email sent successfully from ' . $email);
    
    http_response_code(200);
    echo json_encode([
        'success' => true,
        'message' => 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24-48 hours.'
    ]);
} else {
    // Log error
    error_log('Contact form: Failed to send email from ' . $email);
    
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Sorry, there was an error sending your message. Please try again or email us directly at info@quantummind-innovation.com'
    ]);
}

// Optional: Save to log file for backup
$logEntry = date('Y-m-d H:i:s') . " | " . $name . " | " . $email . " | " . substr($message, 0, 50) . "...\n";
@file_put_contents(__DIR__ . '/contact-submissions.log', $logEntry, FILE_APPEND);
?>
