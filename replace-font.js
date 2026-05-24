const fs = require('fs');
const path = require('path');
const dir = path.join('c:', 'Users', 'Diogo', '.antigravity', 'jobb-v4', 'components', 'sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const sizeClasses = /\btext-(xs|sm|lg|xl|2xl|3xl|4xl|5xl|6xl|\[\d+px\])\b/g;

let count = 0;
for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace all <p> and <span> classes
    let newContent = content.replace(/<(p|span)([^>]*)className=["']([^"']*)["']([^>]*)>/g, (match, tag, beforeClass, classString, afterClass) => {
        let newClassString = classString.replace(sizeClasses, '');
        newClassString = newClassString.replace(/\s+/g, ' ').trim();
        if (!newClassString.includes('text-[16px]')) {
            newClassString = newClassString + (newClassString ? ' ' : '') + 'text-[16px]';
        }
        count++;
        return `<${tag}${beforeClass}className="${newClassString}"${afterClass}>`;
    });

    fs.writeFileSync(filePath, newContent, 'utf8');
}

// Also update app/page.tsx
const pagePath = path.join('c:', 'Users', 'Diogo', '.antigravity', 'jobb-v4', 'app', 'page.tsx');
let pageContent = fs.readFileSync(pagePath, 'utf8');
pageContent = pageContent.replace(/<(p|span)([^>]*)className=["']([^"']*)["']([^>]*)>/g, (match, tag, beforeClass, classString, afterClass) => {
    let newClassString = classString.replace(sizeClasses, '');
    newClassString = newClassString.replace(/\s+/g, ' ').trim();
    if (!newClassString.includes('text-[16px]')) {
        newClassString = newClassString + (newClassString ? ' ' : '') + 'text-[16px]';
    }
    count++;
    return `<${tag}${beforeClass}className="${newClassString}"${afterClass}>`;
});
fs.writeFileSync(pagePath, pageContent, 'utf8');

console.log('Replaced ' + count + ' tags.');
