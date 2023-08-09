if [[ ! -d "${HYTOPIA_NETWORK}/data/consensus" ]]; then
    echo "Generating consensus secrets to ${HYTOPIA_NETWORK}/data/consensus..."
    $EDGE_BIN_PATH polybft-secrets --data-dir "${HYTOPIA_NETWORK}/data" \
                                   --insecure
else
    echo "Found existing ${HYTOPIA_NETWORK}/data/consensus directory..."
fi