import fs from 'fs';
import path from 'path';

const GALLERY_DIR = 'docs/public/gallery';

export default {
  watch: [`${GALLERY_DIR}/**/*`],
  async load() {
    const images = [];
    // console.log('Gallery loader: Starting scan of', GALLERY_DIR);

    function scanDirectory(dir) {
    //   console.log('Scanning subdirectory:', dir);
      const items = fs.readdirSync(dir);
      items.forEach(item => {
        const fullPath = path.join(dir, item);

        if (fs.statSync(fullPath).isDirectory()) {
          scanDirectory(fullPath);
        } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(item)) {
          // Process path just before using it
          const normalizedPath = fullPath.replace(/\\/g, '/');
          const publicMatch = normalizedPath.match(/.*?\/public\//);
          const relativePath = publicMatch
            ? normalizedPath.slice(publicMatch[0].length - 1) // Keep the leading slash
            : normalizedPath.slice(normalizedPath.indexOf('/gallery'));

          // console.log('Found image:', relativePath);
          images.push({
            path: relativePath,
            folder: path.dirname(relativePath).replace('/gallery/', ''),
            filename: item
          });
        }
      });
    }

    scanDirectory(GALLERY_DIR);
    // console.log('Gallery loader: Found total images:', images.length);
    return images;
  }
};