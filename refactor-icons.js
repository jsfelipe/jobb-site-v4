const fs = require('fs');
const path = require('path');

const sections = [
    'Ancine.tsx',
    'CTA.tsx',
    'Features.tsx',
    'Footer.tsx',
    'Hero.tsx',
    'Pricing.tsx',
    'Problem.tsx',
    'Solution.tsx',
    'TargetAudience.tsx'
];

const basePath = path.join(__dirname, 'components', 'sections');

for (const section of sections) {
    const filePath = path.join(basePath, section);
    if (!fs.existsSync(filePath)) continue;

    let content = fs.readFileSync(filePath, 'utf-8');

    // Replace import
    if (content.includes("from '@phosphor-icons/react';")) {
        content = content.replace(
            "from '@phosphor-icons/react';",
            "from '@/components/ui/phosphor-icons';"
        );
    }

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Processed ${section} icons`);
}
