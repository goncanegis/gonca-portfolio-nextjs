#!/usr/bin/env bash
set -euo pipefail

REMOTE_DIR="/opt/gonca-portfolio"

if [ -z "${REMOTE:-}" ]; then
  echo "Error: REMOTE is not set. Export it first, e.g.:"
  echo "  export REMOTE=user@host"
  exit 1
fi

echo "==> Installing production dependencies locally..."
npm ci --omit=dev

echo "==> Building locally..."
npm run build

echo "==> Syncing to $REMOTE:$REMOTE_DIR..."
rsync -avz --delete \
  --exclude .git \
  --exclude .next/cache \
  ./ "$REMOTE:$REMOTE_DIR/"

echo "==> Restarting on remote..."
ssh "$REMOTE" 'sudo systemctl restart gonca-portfolio && sleep 2 && sudo systemctl status gonca-portfolio --no-pager'

echo "==> Done! Site should be live at https://goncanegis.com"
