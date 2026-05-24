const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const targetDir = path.join(__dirname, 'public', 'images');

async function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            await processDirectory(fullPath);
        } else if (/\.(jpg|jpeg|png)$/i.test(fullPath)) {
            const ext = path.extname(fullPath);
            const webpPath = fullPath.substring(0, fullPath.lastIndexOf(ext)) + '.webp';
            try {
                await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
                fs.unlinkSync(fullPath);
                console.log(`Converted ${file} to .webp`);
            } catch (error) {
                console.error(`Failed to convert ${fullPath}:`, error);
            }
        }
    }
}

processDirectory(targetDir).then(() => console.log('Conversion complete.'));
