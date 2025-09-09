#!/usr/bin/env node
const required = [
  'PORT',
  'POSTGRES_URL',
  'REDIS_URL',
  'JWT_SECRET',
  'VAPID_PUBLIC',
  'VAPID_PRIVATE',
  'BASE_URL'
];

const missing = required.filter((k) => !process.env[k]);
if (missing.length) {
  console.error('❌ Missing env vars:', missing.join(', '));
  process.exit(1);
}
console.log('✅ All required env vars are present.');
process.exit(0);
