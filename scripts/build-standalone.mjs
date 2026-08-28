import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const distRoot = join(projectRoot, 'dist');
const indexPath = join(distRoot, 'index.html');
let html = readFileSync(indexPath, 'utf8');

const scriptMatch = html.match(/<script type="module" crossorigin src="([^"]+)"><\/script>/);
const styleMatch = html.match(/<link rel="stylesheet" crossorigin href="([^"]+)">/);

if (!scriptMatch || !styleMatch) {
  throw new Error('Could not find the generated JavaScript and CSS references.');
}

const resolveDistAsset = (assetPath) => join(distRoot, assetPath.replace(/^\.\//, ''));
const javascript = readFileSync(resolveDistAsset(scriptMatch[1]), 'utf8').replace(/<\/script/gi, '<\\/script');
const stylesheet = readFileSync(resolveDistAsset(styleMatch[1]), 'utf8');
const favicon = readFileSync(join(distRoot, 'monogram.svg'), 'utf8');
const faviconData = `data:image/svg+xml,${encodeURIComponent(favicon)}`;

html = html
  .replace(scriptMatch[0], () => `<script type="module">${javascript}</script>`)
  .replace(styleMatch[0], () => `<style>${stylesheet}</style>`)
  .replace('./monogram.svg', () => faviconData);

writeFileSync(indexPath, html, 'utf8');
writeFileSync(join(distRoot, 'homepage.html'), html, 'utf8');
writeFileSync(join(projectRoot, 'homepage.html'), html, 'utf8');

console.log('Created standalone files: dist/index.html, dist/homepage.html, and homepage.html');
