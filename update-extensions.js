const fs = require('fs');
const path = require('path');

const filesToUpdate = [
    'components/sections/Testimonials.tsx',
    'components/sections/TargetAudience.tsx',
    'components/sections/Problem.tsx',
    'components/sections/Pricing.tsx',
    'components/sections/Hero.tsx',
    'components/sections/Features.tsx',
    'components/sections/ClientesTabs.tsx',
    'components/sections/Ancine.tsx',
    'app/layout.tsx',
    'app/funcionalidades/page.tsx',
    'app/clientes/clientsData.json'
];

for (const relPath of filesToUpdate) {
    const filePath = path.join(__dirname, relPath);
    if (fs.existsSync(filePath)) {
        let content = fs.readFileSync(filePath, 'utf8');
        content = content.replace(/\.png/gi, '.webp').replace(/\.jpg/gi, '.webp').replace(/\.jpeg/gi, '.webp');
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${relPath}`);
    }
}
