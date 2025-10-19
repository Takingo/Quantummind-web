# ================================================================
# QUANTUM MIND INNOVATION - WEBSITE EXPORT SCRIPT
# ================================================================
# This script creates a complete ZIP archive of your website
# ================================================================

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  QUANTUM MIND INNOVATION - EXPORT TOOL" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

# Get the current directory
$sourceDir = $PSScriptRoot
$projectName = "Quantum-Mind-Innovation-Website"
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$zipFileName = "${projectName}_${timestamp}.zip"
$desktopPath = [Environment]::GetFolderPath("Desktop")
$zipFilePath = Join-Path $desktopPath $zipFileName

Write-Host "Source Directory: $sourceDir" -ForegroundColor Yellow
Write-Host "Creating ZIP file: $zipFileName" -ForegroundColor Yellow
Write-Host "Destination: Desktop" -ForegroundColor Yellow
Write-Host ""

# Files and folders to EXCLUDE from the export
$excludeItems = @(
    'node_modules'
    '.git'
    'dist'
    '.vscode'
    'create-export.ps1'
    'package-lock.json'
    'php-errors.log'
    'contact-submissions.log'
)

Write-Host "Preparing files for export..." -ForegroundColor Green
Write-Host ""

# Create a temporary directory for clean export
$tempDir = Join-Path $env:TEMP "quantum_export_temp"
if (Test-Path $tempDir) {
    Remove-Item -Path $tempDir -Recurse -Force
}
New-Item -ItemType Directory -Path $tempDir | Out-Null

Write-Host "Copying project files..." -ForegroundColor Cyan

# Function to check if path should be excluded
function Should-Exclude {
    param($path)
    foreach ($exclude in $excludeItems) {
        if ($path -like "*$exclude*") {
            return $true
        }
    }
    return $false
}

# Copy all files except excluded ones
Get-ChildItem -Path $sourceDir -Recurse | Where-Object {
    -not (Should-Exclude $_.FullName)
} | ForEach-Object {
    $relativePath = $_.FullName.Substring($sourceDir.Length + 1)
    $destPath = Join-Path $tempDir $relativePath
    
    if ($_.PSIsContainer) {
        if (-not (Test-Path $destPath)) {
            New-Item -ItemType Directory -Path $destPath -Force | Out-Null
        }
    } else {
        $destFolder = Split-Path -Parent $destPath
        if (-not (Test-Path $destFolder)) {
            New-Item -ItemType Directory -Path $destFolder -Force | Out-Null
        }
        Copy-Item -Path $_.FullName -Destination $destPath -Force
        Write-Host "  Copied: $relativePath" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "Creating ZIP archive..." -ForegroundColor Cyan

# Create the ZIP file
try {
    if (Test-Path $zipFilePath) {
        Remove-Item $zipFilePath -Force
    }
    
    Compress-Archive -Path "$tempDir\*" -DestinationPath $zipFilePath -CompressionLevel Optimal
    
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
    $fileCount = (Get-ChildItem -Path $tempDir -Recurse -File).Count
    Write-Host "Total Files Exported: $fileCount" -ForegroundColor Cyan
    Write-Host ""
    
    Write-Host "Your website is ready to download!" -ForegroundColor Green
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
} finally {
    # Clean up temporary directory
    if (Test-Path $tempDir) {
        Remove-Item -Path $tempDir -Recurse -Force
    }
}

Write-Host ""
Write-Host "Press any key to exit..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
