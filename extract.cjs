const fs = require('fs');
const path = require('path');

const results = new Set();

function processDirectory(directory) {
  const files = fs.readdirSync(directory);
  for (const file of files) {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      
      // Match text nodes between > and <
      // Pattern: > followed by whitespace (optional), then text (containing letters/numbers, no { or < or >), then whitespace (optional), then <
      const regex = />([^<>{]+)</g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        let text = match[1].trim();
        // Ignore single characters, empty strings, numbers-only, or placeholders
        if (text && text.length > 1 && !/^\d+$/.test(text) && !text.includes('t(')) {
          results.add(text);
        }
      }

      // Also look for placeholder="..."
      const placeholderRegex = /placeholder="([^"{]+)"/g;
      while ((match = placeholderRegex.exec(content)) !== null) {
        let text = match[1].trim();
        if (text && !text.includes('t(')) {
            results.add(text);
        }
      }
    }
  }
}

processDirectory('src/pages');
const sorted = Array.from(results).sort();
console.log(sorted.join('\n'));
