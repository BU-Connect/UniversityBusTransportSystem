#!/usr/bin/env node
import { execSync } from 'node:child_process';
import process from 'node:process';
import fs from 'node:fs';

function run(cmd) {
  console.log(`\n$ ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
}

const major = parseInt(process.versions.node.split('.')[0], 10);
if (major < 20) {
  console.error(`Node 20+ required. You have ${process.version}.
If you use nvm: nvm install 20 && nvm use 20`);
  process.exit(1);
}

// ensure scripts dir is executable-friendly (optional)
try { fs.chmodSync('./scripts/bootstrap.mjs', 0o755); } catch {}

try { run('corepack enable'); } catch {}
run('npm install');
console.log('\n✅ Bootstrap complete. Use: npm run dev');
console.log('   To start development server');
console.log('   To run tests: npm test');
console.log('   To run lint: npm run lint');
console.log('   To run typecheck: npm run typecheck');
console.log('   To build: npm run build');
console.log('   To format: npm run format');
console.log('   To check for outdated packages: npm outdated');
console.log('   To update packages: npm update');
console.log('   To see all scripts: npm run');
