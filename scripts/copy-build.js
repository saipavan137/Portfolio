const fs = require('fs');
const path = require('path');

const sourceDir = path.join(process.cwd(), '.next');
const destDir = path.join(process.cwd(), 'build');

// Copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

if (fs.existsSync(sourceDir)) {
  console.log('Copying .next to build folder...');
  copyDir(sourceDir, destDir);
  console.log('Build folder created successfully!');
} else {
  console.error('Error: .next folder not found. Run "npm run build" first.');
  process.exit(1);
}

