import sharp from "sharp";
import fs from "fs";
import path from "path";

// Define the source directory
const inputDir = "./src/assets/images";

// Convert images to WebP format
function convertImageToWebP(inputPath, outputPath) {
  sharp(inputPath)
    .webp({ quality: 80 }) // Adjust quality as needed
    .toFile(outputPath)
    .then(() => {
      console.log(`Converted ${inputPath} to ${outputPath}`);
    })
    .catch((err) => {
      console.error(`Error converting ${inputPath}:`, err);
    });
}

// Convert images to AVIF format
function convertImageToAVIF(inputPath, outputPath) {
  sharp(inputPath)
    .avif({ quality: 50 }) // Adjust quality as needed
    .toFile(outputPath)
    .then(() => {
      console.log(`Converted ${inputPath} to ${outputPath}`);
    })
    .catch((err) => {
      console.error(`Error converting ${inputPath}:`, err);
    });
}

// Recursively process all images in the input directory
function processImages(inputDir) {
  fs.readdirSync(inputDir).forEach((file) => {
    const inputPath = path.join(inputDir, file);
    const outputPathWebP = path.join(
      inputDir,
      file.replace(/\.[^/.]+$/, ".webp")
    ); // Save WebP images in the same directory
    const outputPathAVIF = path.join(
      inputDir,
      file.replace(/\.[^/.]+$/, ".avif")
    ); // Save AVIF images in the same directory

    if (fs.lstatSync(inputPath).isDirectory()) {
      // Recurse into subdirectories
      processImages(inputPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      // Only convert jpg, jpeg, and png files
      convertImageToWebP(inputPath, outputPathWebP);
      convertImageToAVIF(inputPath, outputPathAVIF);
    }
  });
}

// Start processing images
processImages(inputDir);
