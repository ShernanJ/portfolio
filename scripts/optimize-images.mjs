import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const outputDir = path.join(root, "public/data/images/optimized");

const imageGroups = [
  {
    inputDir: "public/data/images/life/web",
    outputDir: "public/data/images/optimized/life",
    maxWidth: 1200,
    quality: 76,
  },
  {
    inputDir: "public/data/images",
    outputDir: "public/data/images/optimized/work",
    maxWidth: 1800,
    quality: 78,
    files: [
      "ai-phone-agent-showcase.png",
      "bi-showcase.png",
      "cloverlabs-showcase.png",
      "creatorgraph-showcase.png",
      "ensight-extension-flow.png",
      "ensight-logo-transparent.png",
      "ensight-showcase.png",
      "merchme-showcase.png",
      "stanley-extension.png",
      "taplytics-showcase.png",
      "td-showcase.png",
      "wya-showcase-updated.png",
      "xpo-showcase.png",
    ],
  },
];

function outputName(file) {
  return `${path.parse(file).name}.webp`;
}

async function listFiles(group) {
  if (group.files) {
    return group.files;
  }

  const entries = await fs.readdir(path.join(root, group.inputDir)).catch((error) => {
    if (error.code === "ENOENT") {
      return [];
    }

    throw error;
  });
  return entries.filter((entry) => /\.(avif|heic|jpe?g|png|webp)$/i.test(entry));
}

async function optimizeGroup(group) {
  const inputDir = path.join(root, group.inputDir);
  const groupOutputDir = path.join(root, group.outputDir);
  await fs.mkdir(groupOutputDir, { recursive: true });

  const files = await listFiles(group);

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(groupOutputDir, outputName(file));
    const exists = await fs
      .access(inputPath)
      .then(() => true)
      .catch((error) => {
        if (error.code === "ENOENT") {
          return false;
        }

        throw error;
      });

    if (!exists) {
      continue;
    }

    const image = sharp(inputPath, { failOn: "none" }).rotate();
    const metadata = await image.metadata();
    const width =
      metadata.width && metadata.width > group.maxWidth
        ? group.maxWidth
        : metadata.width;

    await image
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: group.quality })
      .toFile(outputPath);
  }
}

await fs.mkdir(outputDir, { recursive: true });

for (const group of imageGroups) {
  await optimizeGroup(group);
}
