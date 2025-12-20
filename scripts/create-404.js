const fs = require('fs');
const path = require('path');
const dist = path.resolve(__dirname, '../dist');
const index = path.join(dist, 'index.html');
const four04 = path.join(dist, '404.html');

if (fs.existsSync(index)) {
  fs.copyFileSync(index, four04);
  console.log('Created 404.html from index.html');
} else {
  console.error('dist/index.html not found — run `npm run build` first.');
  process.exit(1);
}
