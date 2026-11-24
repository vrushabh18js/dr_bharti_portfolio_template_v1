const { spawn } = require('child_process');
const path = require('path');

console.log('\x1b[36m%s\x1b[0m', '===============================================================');
console.log('\x1b[36m%s\x1b[0m', '  🚀 Starting Dr. D. B. Bharti Portfolio (React + Express)     ');
console.log('\x1b[36m%s\x1b[0m', '===============================================================\n');

const serverDir = path.join(__dirname, 'server');
const clientDir = path.join(__dirname, 'client');
const viteBin = path.join(clientDir, 'node_modules', 'vite', 'bin', 'vite.js');

// 1. Start Express Server (Port 5000)
console.log('\x1b[34m[EXPRESS]\x1b[0m Starting Backend API on http://localhost:5000 ...');
const server = spawn('node', ['server.js'], {
  cwd: serverDir,
  env: { ...process.env, PORT: '5000' }
});

server.stdout.on('data', (chunk) => {
  const lines = chunk.toString().trim().split('\n');
  lines.forEach((l) => console.log(`\x1b[34m[EXPRESS]\x1b[0m ${l}`));
});

server.stderr.on('data', (chunk) => {
  const lines = chunk.toString().trim().split('\n');
  lines.forEach((l) => console.error(`\x1b[31m[EXPRESS ERROR]\x1b[0m ${l}`));
});

// 2. Start React Vite Dev Server (Port 3000)
console.log('\x1b[32m[REACT]\x1b[0m Starting Frontend Dev Server on http://localhost:3000 ...\n');
const client = spawn('node', [viteBin], {
  cwd: clientDir,
  env: process.env
});

client.stdout.on('data', (chunk) => {
  const lines = chunk.toString().trim().split('\n');
  lines.forEach((l) => console.log(`\x1b[32m[REACT]\x1b[0m ${l}`));
});

client.stderr.on('data', (chunk) => {
  const lines = chunk.toString().trim().split('\n');
  lines.forEach((l) => console.error(`\x1b[33m[REACT INFO]\x1b[0m ${l}`));
});

// Cleanup when exiting or pressing Ctrl+C
function cleanup() {
  console.log('\n\x1b[31m[SHUTDOWN] Stopping Express and React services...\x1b[0m');
  try {
    server.kill();
    client.kill();
  } catch (e) {}
  process.exit(0);
}

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
process.on('exit', cleanup);

