const fs = require('fs');
const path = require('path');

const sectionsDir = path.join('c:', 'Users', 'Diogo', '.antigravity', 'jobb-v4', 'components', 'sections');
const appDir = path.join('c:', 'Users', 'Diogo', '.antigravity', 'jobb-v4', 'app');

const files = [
    ...fs.readdirSync(sectionsDir).filter(f => f.endsWith('.tsx')).map(f => path.join(sectionsDir, f)),
    path.join(appDir, 'page.tsx')
];

let totalReplaced = 0;

for (const filePath of files) {
    if (!fs.existsSync(filePath)) continue;
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace <h3className with <h3 className
    const newContent = content.replace(/<(h[1-6])className/g, (match, tag) => {
        totalReplaced++;
        return `<${tag} className`;
    });

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
    }
}

console.log('Fixed broken headings: ' + totalReplaced);
