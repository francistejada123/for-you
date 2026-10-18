import { cpSync, existsSync, rmSync } from 'node:fs';

const source = 'conforting';
if (!existsSync(`${source}/index.html`)) {
  throw new Error('Missing conforting/index.html. Keep the existing conforting folder in the repository root.');
}
rmSync('dist', { recursive: true, force: true });
cpSync(source, 'dist', { recursive: true });
console.log('Site ready in dist/');
