const fs = require('fs');
const path = require('path');
const dir = path.join('c:', 'Users', 'Diogo', '.antigravity', 'jobb-v4', 'components', 'sections');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

let count = 0;
for (const file of files) {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf8');

    // Replace <p> and <span> without className
    let newContent = content.replace(/<(p|span)(?=\s|>)(?![^>]*className=)/g, (match, tag) => {
        count++;
        return `<${tag} className=\"text-[16px]\"`;
    });

    if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
    }
}
console.log('Replaced ' + count + ' tags without className.');
