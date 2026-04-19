#!/bin/bash
set -e

command -v node >/dev/null 2>&1 || { echo "[ERROR] Node.js is missing"; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "[ERROR] npm is missing"; exit 1; }

echo "[OK] Node.js ready"

ask_confirm() {
    read -rp "$1 (1: yes / 2: no) > " ans
    [[ "$ans" == "1" ]] || { echo "[STOP]"; exit 0; }
}

ask_confirm "[1] Create Vite React app"

npm create vite@latest my-site -- --template react
cd my-site

ask_confirm "[2] Install dependencies"
npm install

ask_confirm "[3] Install Tailwind"
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Tailwind config fix (IMPORTANT)
cat > tailwind.config.js <<EOL
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
EOL

# CSS setup
cat > src/index.css <<EOL
@tailwind base;
@tailwind components;
@tailwind utilities;
EOL

echo "[DONE] Setup complete → run: npm run dev"
