import fs from 'fs';
import path from 'path';
import archiver from 'archiver';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const timestamp = new Date().toISOString().slice(0, 19).replace(/:/g, '-');
const outputPath = path.join(__dirname, `Quantum-Mind-Innovation-LINUX_${timestamp}.zip`);

const output = fs.createWriteStream(outputPath);
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  const sizeMB = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`✓ ZIP created: ${outputPath}`);
  console.log(`✓ Size: ${sizeMB} MB`);
  console.log(`✓ Files: ${archive.pointer()} bytes`);
});

archive.on('error', (err) => {
  throw err;
});

archive.pipe(output);
archive.directory('dist/', false);
archive.finalize();
