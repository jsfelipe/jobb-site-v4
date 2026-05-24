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

    // Replace text-[16px] in span tags that are inside h1..h6
    const newContent = content.replace(/<(h[1-6])[^>]*>([\s\S]*?)<\/\1>/g, (match, hTag, innerContent) => {
        // Replace inside the heading inner content
        const cleanedInner = innerContent.replace(/<span([^>]*)className=["']([^"']*)text-\[16px\]([^"']*)["']([^>]*)>/g, (sMatch, before, cl1, cl2, after) => {
            let cls = (cl1 + cl2).replace(/\s+/g, ' ').trim();
            totalReplaced++;
            if (cls) {
                return `<span${before}className="${cls}"${after}>`;
            } else {
                return `<span${before}${after}>`;
            }
        });
        return `<${hTag}${match.substring(hTag.length + 2, match.indexOf('>'))}>` + cleanedInner + `</${hTag}>`;
    });

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
    }
}

console.log('Removed text-[16px] from ' + totalReplaced + ' spans within headings.');
