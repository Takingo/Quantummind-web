# ================================================================
# QUANTUM MIND INNOVATION - STATIC WEBSITE EXPORT
# ================================================================
# Creates a production-ready ZIP for web hosting deployment
# ================================================================

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  STATIC WEBSITE EXPORT - PRODUCTION" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

$sourceDir = Join-Path $PSScriptRoot "dist"
$projectName = "Quantum-Mind-Innovation-STATIC"
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$zipFileName = "${projectName}_${timestamp}.zip"
$desktopPath = [Environment]::GetFolderPath("Desktop")
$zipFilePath = Join-Path $desktopPath $zipFileName

Write-Host "Source Directory: $sourceDir" -ForegroundColor Yellow
Write-Host "Creating ZIP: $zipFileName" -ForegroundColor Yellow
Write-Host "Destination: Desktop" -ForegroundColor Yellow
Write-Host ""

# Check if dist folder exists
if (-not (Test-Path $sourceDir)) {
    Write-Host "ERROR: dist folder not found!" -ForegroundColor Red
    Write-Host "Please run 'npm run build' first." -ForegroundColor Red
    Write-Host ""
    Read-Host "Press Enter to exit"
    exit 1
}

Write-Host "Preparing static website for export..." -ForegroundColor Green
Write-Host ""

try {
    # Remove old ZIP if exists
    if (Test-Path $zipFilePath) {
        Remove-Item $zipFilePath -Force
    }
    
    # Create ZIP from dist folder contents
    Write-Host "Creating ZIP archive..." -ForegroundColor Cyan
    Compress-Archive -Path "$sourceDir\*" -DestinationPath $zipFilePath -CompressionLevel Optimal
    
    Write-Host ""
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host "  EXPORT SUCCESSFUL!" -ForegroundColor Green
    Write-Host "==========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "ZIP File Created:" -ForegroundColor Yellow
    Write-Host "  $zipFilePath" -ForegroundColor White
    Write-Host ""
    
    # Get file size
    $zipSize = (Get-Item $zipFilePath).Length
    $zipSizeMB = [math]::Round($zipSize / 1MB, 2)
    Write-Host "File Size: $zipSizeMB MB" -ForegroundColor Cyan
    Write-Host ""
    
    # Count files
    $fileCount = (Get-ChildItem -Path $sourceDir -Recurse -File).Count
    Write-Host "Total Files: $fileCount" -ForegroundColor Cyan
    Write-Host ""
    
    Write-Host "WHAT'S INCLUDED:" -ForegroundColor Yellow
    Write-Host "  - Production-optimized HTML, CSS, JS" -ForegroundColor White
    Write-Host "  - Working PHP contact form (sendmail.php)" -ForegroundColor White
    Write-Host "  - All images and assets" -ForegroundColor White
    Write-Host "  - Complete deployment instructions (README.txt)" -ForegroundColor White
    Write-Host ""
    
    Write-Host "READY FOR:" -ForegroundColor Yellow
    Write-Host "  - IONOS hosting" -ForegroundColor White
    Write-Host "  - Bluehost, SiteGround, GoDaddy" -ForegroundColor White
    Write-Host "  - Any standard web hosting with PHP support" -ForegroundColor White
    Write-Host ""
    
    Write-Host "NO NPM OR VITE REQUIRED!" -ForegroundColor Green
    Write-Host "Just extract and upload to your web server." -ForegroundColor Green
    Write-Host ""
    
    Write-Host "Location: Desktop\$zipFileName" -ForegroundColor Yellow
    Write-Host ""
    
    # Open Desktop folder
    Start-Process explorer.exe -ArgumentList $desktopPath
    
} catch {
    Write-Host ""
    Write-Host "ERROR: Failed to create ZIP file" -ForegroundColor Red
    Write-Host "  $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
