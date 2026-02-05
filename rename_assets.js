const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'public', 'images');
const videoDir = path.join(__dirname, 'public', 'video');

function renameFiles(dir, prefix) {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);
    let count = 1;

    files.forEach(file => {
        if (file.startsWith(prefix)) return; // Already renamed roughly

        const ext = path.extname(file);
        if (!['.jpg', '.jpeg', '.png', '.mp4'].includes(ext.toLowerCase())) return;

        const oldPath = path.join(dir, file);
        const newPath = path.join(dir, `${prefix}-${count}${ext}`);

        fs.renameSync(oldPath, newPath);
        console.log(`Renamed ${file} -> ${prefix}-${count}${ext}`);
        count++;
    });
}

// Rename images
renameFiles(imageDir, 'frenchie-pup');

// Rename videos
renameFiles(videoDir, 'frenchie-cam');
