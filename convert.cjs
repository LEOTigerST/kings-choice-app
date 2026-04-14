const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
  let jsx = html;
  jsx = jsx.replace(/class=/g, 'className=');
  jsx = jsx.replace(/<img([^>]*?)>/g, (match, p1) => {
    if (p1.trim().endsWith('/')) return match;
    return `<img${p1} />`;
  });
  jsx = jsx.replace(/<input([^>]*?)>/g, (match, p1) => {
    if (p1.trim().endsWith('/')) return match;
    return `<input${p1} />`;
  });
  jsx = jsx.replace(/<br([^>]*?)>/g, (match, p1) => {
    if (p1.trim().endsWith('/')) return match;
    return `<br${p1} />`;
  });
  jsx = jsx.replace(/ readonly=""/g, ' readOnly');
  jsx = jsx.replace(/ readonly /g, ' readOnly ');
  jsx = jsx.replace(/ disabled=""/g, ' disabled={true}');
  jsx = jsx.replace(/ checked=""/g, ' defaultChecked={true}');
  jsx = jsx.replace(/ selected=""/g, ' defaultValue="selected"'); // or just remove it if it's an option. wait, better:
  jsx = jsx.replace(/ selected=""/g, ' selected={true}');

  jsx = jsx.replace(/style="font-variation-settings: 'FILL' 1;"/g, "style={{ fontVariationSettings: \"'FILL' 1\" }}");
  jsx = jsx.replace(/style="font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;"/g, "style={{ fontVariationSettings: \"'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24\" }}");
  jsx = jsx.replace(/style="([^\"]*)"/g, (match, p1) => {
       if(p1.includes('font-variation-settings')) return match;
       return `style={{}} /* TODO: fix style ${p1} */`;
  });

  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  jsx = jsx.replace(/ for="/g, ' htmlFor="');
  return jsx;
}

const files = [
  { in: 'console_desktop.html', out: 'src/pages/desktop/Console.tsx', name: 'DesktopConsole' },
  { in: 'console_mobile.html', out: 'src/pages/mobile/Console.tsx', name: 'MobileConsole' },
  { in: 'store_desktop.html', out: 'src/pages/desktop/Store.tsx', name: 'DesktopStore' },
  { in: 'store_mobile.html', out: 'src/pages/mobile/Store.tsx', name: 'MobileStore' },
  { in: 'prize_inquiry_desktop.html', out: 'src/pages/desktop/PrizeInquiry.tsx', name: 'DesktopPrizeInquiry' },
  { in: 'prize_inquiry_mobile.html', out: 'src/pages/mobile/PrizeInquiry.tsx', name: 'MobilePrizeInquiry' },
  { in: 'user_settings_desktop.html', out: 'src/pages/desktop/Settings.tsx', name: 'DesktopSettings' },
  { in: 'user_settings_mobile.html', out: 'src/pages/mobile/Settings.tsx', name: 'MobileSettings' },
  { in: 'play_desktop.html', out: 'src/pages/desktop/Play.tsx', name: 'DesktopPlay' },
  { in: 'play_mobile.html', out: 'src/pages/mobile/Play.tsx', name: 'MobilePlay' },
];

for (const file of files) {
  const inPath = path.join('html_assets', file.in);
  if (!fs.existsSync(inPath)) continue;
  const content = fs.readFileSync(inPath, 'utf8');
  let mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainMatch) {
      console.log('No main tag found for', file.in);
      continue;
  }
  let mainContent = mainMatch[1];
  let jsx = htmlToJsx(mainContent);
  const outCode = `import React from 'react';\nimport { useTranslation } from 'react-i18next';\n\nexport const ${file.name}: React.FC = () => {\n  const { t } = useTranslation();\n  return (\n    <>\n${jsx}\n    </>\n  );\n};\n`;
  fs.writeFileSync(file.out, outCode);
  console.log(`Converted ${file.in} -> ${file.out}`);
}
