const { test } = require("@playwright/test");
const fs = require("fs");
const path = require("path");

test("Organize files into image and video folders", async () => {
  const sourceFolder = "D:\\world trip\\Simla & Narkanda"; // Path where your files are stored
  const imageFolder = "D:\\world trip\\Image"; // Folder for images
  const videoFolder = "D:\\world trip\\Video"; // Folder for videos

  // Create destination folders if they don't exist
  if (!fs.existsSync(imageFolder)) fs.mkdirSync(imageFolder, { recursive: true });
  if (!fs.existsSync(videoFolder)) fs.mkdirSync(videoFolder, { recursive: true });

  // Supported file extensions
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".bmp", ".webp"];
  const videoExtensions = [".mp4", ".mkv", ".avi", ".mov", ".wmv"];

  // Read files from the source folder
  const files = fs.readdirSync(sourceFolder);

  files.forEach((file) => {
    const filePath = path.join(sourceFolder, file);
    const fileExtension = path.extname(file).toLowerCase();

    // Skip directories
    if (fs.statSync(filePath).isDirectory()) return;

    if (imageExtensions.includes(fileExtension)) {
      // Move image files
      const destinationPath = path.join(imageFolder, file);
      fs.renameSync(filePath, destinationPath);
      console.log(`Moved image: ${file} to ${imageFolder}`);
    } else if (videoExtensions.includes(fileExtension)) {
      // Move video files
      const destinationPath = path.join(videoFolder, file);
      fs.renameSync(filePath, destinationPath);
      console.log(`Moved video: ${file} to ${videoFolder}`);
    } else {
      console.log(`Skipped file: ${file} (unsupported format)`);
    }
  });

  console.log("File organization completed.");
});
