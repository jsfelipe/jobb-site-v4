import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walk(filePath, callback);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      callback(filePath);
    }
  }
}

function refactorFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  // 1. Remove next/image import
  content = content.replace(/import\s+(?:\{[^}]+\}\s*,\s*)?Image\s+from\s+['"]next\/image['"];?\n?/g, '');
  content = content.replace(/import\s+Image\s+from\s+['"]next\/image['"];?\n?/g, '');

  // 2. Replace <Image ... /> with <img ... />
  // This is a naive regex but usually works for simple cases
  content = content.replace(/<Image([^>]+)\/?>/g, (match, props) => {
    let newProps = props
      .replace(/\s+priority(?:\s*=\s*\{[^}]+\})?/g, '')
      .replace(/\s+quality\s*=\s*(?:\{[^}]+\}|['"][^'"]+['"])/g, '')
      .replace(/\s+fill(?:\s*=\s*\{[^}]+\})?/g, '');
      
    // Vite string static imports
    newProps = newProps.replace(/src=\{([a-zA-Z0-9_]+)\}/g, 'src={$1}'); 
    // Wait, in next.js an imported image is an object {src, height, width}. 
    // But in Vite it's just a string URL. So src={img} works directly in Vite!

    return `<img${newProps} />`;
  });
  // Handle multiline <Image ... > ... </Image> (rare but possible if standard next/image is self closing 99% of time)
  content = content.replace(/<Image([^>]*)>([\s\S]*?)<\/Image>/g, '<img$1>$2</img>'); // this is invalid HTML but just in case

  // 3. Replace next/link with react-router-dom
  if (content.match(/import\s+Link\s+from\s+['"]next\/link['"]/)) {
    content = content.replace(/import\s+Link\s+from\s+['"]next\/link['"];?/g, "import { Link } from 'react-router-dom';");
  }

  // 4. Replace <Link href="..."> with <Link to="...">
  content = content.replace(/<Link([^>]+)href\s*=\s*/g, '<Link$1to=');

  // 5. Replace next/navigation usePathname
  if (content.match(/next\/navigation/)) {
    content = content.replace(/import\s+\{\s*usePathname\s*\}\s+from\s+['"]next\/navigation['"];?/g, "import { useLocation } from 'react-router-dom';");
    content = content.replace(/const\s+([a-zA-Z0-9_]+)\s*=\s*usePathname\(\)/g, 'const $1 = useLocation().pathname');
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Refactored:', filePath);
  }
}

walk('./src', refactorFile);
