if [[ "$(uname)" == "Darwin" ]]; then
  EDGE_BIN_OS="darwin"
elif [[ "$(expr substr $(uname -s) 1 5)" == "Linux" ]]; then
  EDGE_BIN_OS="linux"
else
  echo "Only Mac (Darwin) and Linux operating systems are currently supported for running a fullnode. Found: ${uname}" >&2
  exit 1
fi

if [[ "$(uname -m)" == "x86_64" ]]; then
    EDGE_BIN_ARCH="amd64"
elif [[ "$(uname -m)" == "aarch64" || "$(uname -m)" == "arm64" ]]; then
    EDGE_BIN_ARCH="arm64"
else
    echo "Unsupported architecture found, must be arm64 or amd64: $(uname -m)" >&2
    exit 1
fi

EDGE_BIN_PATH="./bin/polygon-edge/${EDGE_BIN_OS}_${EDGE_BIN_ARCH}/polygon-edge"
echo "EDGE_BIN_PATH=${EDGE_BIN_PATH}"