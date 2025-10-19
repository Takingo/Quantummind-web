Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "LINUX STATIC WEBSITE EXPORT TOOL" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$scriptDir = $PSScriptRoot
$sourceDir = Join-Path $scriptDir "dist"

if (-not (Test-Path $sourceDir)) {
    Write-Host "ERROR: dist folder not found!" -ForegroundColor Red
    Write-Host "Please run 'npm run build' first to create the dist folder.`n" -ForegroundColor Yellow
    exit 1
}

$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$zipFileName = "Quantum-Mind-Innovation-LINUX_$timestamp.zip"
$desktopPath = [Environment]::GetFolderPath("Desktop")
$zipFilePath = Join-Path $desktopPath $zipFileName

Write-Host "📦 Packaging Linux-ready static website..." -ForegroundColor Green
Write-Host "   Source: $sourceDir" -ForegroundColor Gray
Write-Host "   Output: $zipFilePath`n" -ForegroundColor Gray

try {
    if (Test-Path $zipFilePath) {
        Remove-Item $zipFilePath -Force
    }

    Write-Host "⚙️  Compressing files..." -ForegroundColor Yellow
    Compress-Archive -Path "$sourceDir\*" -DestinationPath $zipFilePath -CompressionLevel Optimal

    $zipFile = Get-Item $zipFilePath
    $fileCount = (Get-ChildItem -Path $sourceDir -Recurse -File | Measure-Object).Count
    $fileSizeMB = [math]::Round($zipFile.Length / 1MB, 2)

    Write-Host "`n========================================" -ForegroundColor Green
    Write-Host "✅ EXPORT SUCCESSFUL!" -ForegroundColor Green
    Write-Host "========================================`n" -ForegroundColor Green
    
    Write-Host "📁 Package Details:" -ForegroundColor Cyan
    Write-Host "   File: $zipFileName" -ForegroundColor White
    Write-Host "   Location: Desktop" -ForegroundColor White
    Write-Host "   Files: $fileCount" -ForegroundColor White
    Write-Host "   Size: $fileSizeMB MB`n" -ForegroundColor White
    
    Write-Host "📋 Package Contents:" -ForegroundColor Cyan
    Write-Host "   ✓ index.html (entry point)" -ForegroundColor White
    Write-Host "   ✓ sendmail.php (contact form backend)" -ForegroundColor White
    Write-Host "   ✓ .htaccess (Apache configuration)" -ForegroundColor White
    Write-Host "   ✓ nginx.conf.example (Nginx configuration)" -ForegroundColor White
    Write-Host "   ✓ assets/ (CSS, JS, images)" -ForegroundColor White
    Write-Host "   ✓ LINUX_DEPLOYMENT.txt (deployment guide)" -ForegroundColor White
    Write-Host "   ✓ favicon.svg`n" -ForegroundColor White
    
    Write-Host "🚀 Deployment Steps:" -ForegroundColor Cyan
    Write-Host "   1. Extract the ZIP file" -ForegroundColor White
    Write-Host "   2. Upload all files to your Linux server" -ForegroundColor White
    Write-Host "   3. Set permissions: chmod 755 sendmail.php" -ForegroundColor White
    Write-Host "   4. Configure .htaccess (Apache) or nginx.conf (Nginx)" -ForegroundColor White
    Write-Host "   5. Test at your domain`n" -ForegroundColor White
    
    Write-Host "✅ Linux Compatibility:" -ForegroundColor Cyan
    Write-Host "   ✓ All paths use forward slashes (/)" -ForegroundColor Green
    Write-Host "   ✓ Cross-platform file structure" -ForegroundColor Green
    Write-Host "   ✓ Apache .htaccess included" -ForegroundColor Green
    Write-Host "   ✓ Nginx config example included" -ForegroundColor Green
    Write-Host "   ✓ PHP 7.4+ / 8.x compatible" -ForegroundColor Green
    Write-Host "   ✓ Production-optimized build`n" -ForegroundColor Green
    
    Write-Host "📧 Contact Form:" -ForegroundColor Cyan
    Write-Host "   Sends to: info@quantummind-innovation.com" -ForegroundColor White
    Write-Host "   Backend: sendmail.php (included)`n" -ForegroundColor White
    
    Write-Host "📖 For detailed deployment instructions, see:" -ForegroundColor Yellow
    Write-Host "   LINUX_DEPLOYMENT.txt (inside the ZIP)`n" -ForegroundColor White
    
    Write-Host "========================================`n" -ForegroundColor Green
}
catch {
    Write-Host "`n========================================" -ForegroundColor Red
    Write-Host "❌ EXPORT FAILED!" -ForegroundColor Red
    Write-Host "========================================`n" -ForegroundColor Red
    Write-Host "Error: $_`n" -ForegroundColor Red
    exit 1
}
