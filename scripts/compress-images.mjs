import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import fs from 'fs';
import path from 'path';

// Define the directories and prefix
const inputDir = 'site/static/img';
const outputDir = 'site/static/img-cmp';
const prefix = 'cmp_';

(async () => {
    const images = fs.readdirSync(inputDir);

    for (const image of images) {
        const inputImagePath = path.join(inputDir, image);
        const outputImagePath = path.join(outputDir, `${prefix}${image}`);

        // Check if the compressed image already exists
        if (fs.existsSync(outputImagePath)) {
            console.log(`Compressed version of ${image} already exists, skipping...`);
            continue;
        }

        // Compress image
        await imagemin([inputImagePath], {
            destination: outputDir,
            plugins: [
                imageminMozjpeg({ quality: 75 }),
                imageminPngquant({ quality: [0.6, 0.8] })
            ]
        });

        console.log(`Compressed ${image} to ${outputImagePath}`);
    }
})();
