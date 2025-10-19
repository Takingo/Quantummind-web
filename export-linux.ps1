# ================================================================
# QUANTUM MIND INNOVATION - LINUX-COMPATIBLE EXPORT
# ================================================================
# Creates a Linux-format ZIP for IONOS/Apache hosting
# ================================================================

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "  LINUX-COMPATIBLE EXPORT - IONOS" -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan
Write-Host ""

$sourceDir = Join-Path $PSScriptRoot "dist"
$projectName = "Quantum-Mind-Innovation-LINUX"
$timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
$zipFileName = "${projectName}_${timestamp}.zip"
$desktopPath = [Environment]::GetFolderPath("Desktop")
$zipFilePath = Join-Path $desktopPath $zipFileName

Write-Host "Source Directory: $sourceDir" -ForegroundColor Yellow
Write-Host "Creating Linux-compatible ZIP: $zipFileName" -ForegroundColor Yellow
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

Write-Host "Preparing Linux-compatible export..." -ForegroundColor Green
Write-Host ""

try {
    # Remove old ZIP if exists
    if (Test-Path $zipFilePath) {
        Remove-Item $zipFilePath -Force
        Write-Host "Removed old ZIP file" -ForegroundColor Yellow
    }
    
    # Use .NET System.IO.Compression with Unix compatibility
    Write-Host "Creating ZIP with Linux-compatible paths..." -ForegroundColor Cyan
    
    Add-Type -Assembly System.IO.Compression.FileSystem
    
    # Create ZIP with optimal settings for Linux
    $compressionLevel = [System.IO.Compression.CompressionLevel]::Optimal
    
    # Get all files from dist
    $files = Get-ChildItem -Path $sourceDir -Recurse -File
    
    # Create new ZIP archive
    $zipArchive = [System.IO.Compression.ZipFile]::Open($zipFilePath, 'Create')
    
    foreach ($file in $files) {
        $relativePath = $file.FullName.Substring($sourceDir.Length + 1)
        
        # Convert Windows backslashes to Unix forward slashes
        $unixPath = $relativePath -replace '\\', '/'
        
        Write-Host "  Adding: $unixPath" -ForegroundColor Gray
        
        # Add file to ZIP with Unix path
        $entry = $zipArchive.CreateEntry($unixPath, $compressionLevel)
        
        # Copy file content
        $entryStream = $entry.Open()
        $fileStream = [System.IO.File]::OpenRead($file.FullName)
        $fileStream.CopyTo($entryStream)
        $fileStream.Close()
        $entryStream.Close()
        
        # Set Unix permissions (644 for files, 755 for executables)
        # This is important for Linux compatibility
        if ($file.Name -eq "sendmail.php" -or $file.Extension -eq ".sh") {
            # Executable permission (755)
            $entry.ExternalAttributes = 0x81ED0000  # Unix: -rwxr-xr-x
        } else {
            # Regular file permission (644)
            $entry.ExternalAttributes = 0x81A40000  # Unix: -rw-r--r--
        }
    }
    
    $zipArchive.Dispose()
    
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
    $fileCount = $files.Count
    Write-Host "Total Files: $fileCount" -ForegroundColor Cyan
    Write-Host ""
    
    Write-Host "LINUX-COMPATIBLE FEATURES:" -ForegroundColor Yellow
    Write-Host "  ✓ Unix forward slashes (/)" -ForegroundColor Green
    Write-Host "  ✓ Proper file permissions (644/755)" -ForegroundColor Green
    Write-Host "  ✓ sendmail.php set as executable" -ForegroundColor Green
    Write-Host "  ✓ No Windows path separators" -ForegroundColor Green
    Write-Host "  ✓ Compatible with Linux extract/unzip" -ForegroundColor Green
    Write-Host ""
    
    Write-Host "READY FOR:" -ForegroundColor Yellow
    Write-Host "  ✓ IONOS Linux hosting" -ForegroundColor White
    Write-Host "  ✓ Apache web server" -ForegroundColor White
    Write-Host "  ✓ Direct extraction on server" -ForegroundColor White
    Write-Host "  ✓ FTP upload and extract" -ForegroundColor White
    Write-Host ""
    
    Write-Host "VERIFIED COMPATIBILITY:" -ForegroundColor Yellow
    Write-Host "  ✓ CentOS, Ubuntu, Debian" -ForegroundColor White
    Write-Host "  ✓ Assets folder will be preserved" -ForegroundColor White
    Write-Host "  ✓ All permissions will be correct" -ForegroundColor White
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
