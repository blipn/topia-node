# topia-node

A simple node.js server that run & log a Hytopia node via PM2

## 🚀 Getting Started

### 💻 Installation (Ubuntu/Debian)

Before you begin, ensure that you have the following prerequisites installed:
> - `sudo apt install git`
> - `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt-get install -y nodejs`
> - `sudo npm install pm2@latest -g`

### ✔️ Run

1. Clone the repository:
```sh
git clone https://github.com/blipn/topia-node --recurse-submodules
```

2. Change the current directory:
```sh
cd topia-node
```

3. Start the server (daemon):
```sh
pm2 start index.js --restart-delay 5000 --name topia-testnet
```

or. Start the server on mainnet:
```sh
pm2 start index.js --restart-delay 5000 --name topia-mainnet -- -m
```

### 🧪 Monitor
```sh
pm2 monit
```

### 🎮 ToolTips
```sh
pm2 restart topia
pm2 reload topia
pm2 stop topia
pm2 delete topia
pm2 logs topia
pm2 list
pm2 plus
```

---

Related repo :
https://github.com/Topia-Game/hytopia-full-node/

---
