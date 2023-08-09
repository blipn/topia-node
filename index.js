const { spawn } = require('node:child_process');

const HYTOPIA_NETWORK = 'testnet'
console.log(`Target network: ${HYTOPIA_NETWORK}`)

const edge = spawn('bash', ['edge.sh'])
edge.stdout.on('data', function (data) {
  const content = data.toString()
  console.log(content);
  if(content.includes('EDGE_BIN_PATH=')) {
    const EDGE_BIN_PATH = content.split('EDGE_BIN_PATH=')[1].split('\n')[0]
    handleSecret(EDGE_BIN_PATH)
  }
});
edge.stderr.on('data', function (data) {
  console.error('stderr: ' + data.toString());
  throw new Error('FAILURE')
});


function handleSecret(EDGE_BIN_PATH) {
  const secret = spawn('bash', ['../secret.sh'], {cwd: './hytopia-full-node/', env: {EDGE_BIN_PATH, HYTOPIA_NETWORK}})
  secret.stdout.on('data', function (data) {
    const content = data.toString()
    console.log(content);
  });
  secret.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
    throw new Error('FAILURE')
  });
  secret.on('exit', function (code) {
    startNode(EDGE_BIN_PATH)
  });
}

function startNode(EDGE_BIN_PATH) {
  const node = spawn(EDGE_BIN_PATH, ['server', '--data-dir', `${HYTOPIA_NETWORK}/data`, '--chain', `${HYTOPIA_NETWORK}/genesis.json`, '--seal', 'false', '2>&1', '|', 'sed', `'s/polygon/hytopia/g'`], {cwd: './hytopia-full-node/'})
  node.stdout.on('data', function (data) {
    const content = data.toString()
    console.log(content);
  });
  node.stderr.on('data', function (data) {
    const content = data.toString()
    console.log(content);
  });
  node.on('exit', function (code) {
    console.log('STOP')
  });
}








