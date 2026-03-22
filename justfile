bun := require("bun")

# https://cheatography.com/linux-china/cheat-sheets/justfile/
[doc('List out available recipes')]
default:
    @just --list
    @echo "\nAvailable bun scripts:"
    @jq '.scripts' package.json

alias dev := run
alias serve := run
# Run the vite dev server using bun runtime
run:
    {{bun}} run dev

# Build the static site
build:
    {{bun}} run check
    {{bun}} run build

# Generate local TLS certificates using mkcert
cert:
    @mkdir -p certs
    mkcert -cert-file certs/localhost.pem -key-file certs/localhost-key.pem localhost 127.0.0.1 ::1
    @echo "Certificates generated in certs/"
    @echo "Run 'mkcert -install' if you haven't already to trust the local CA"

# Run the production version of the application locally
prod: build
    caddy start --config Caddyfile.local --pidfile caddy.pid > caddy.log 2>&1
    @echo "\n * caddy server started (logs: caddy.log)"
    @echo " * application is available at https://localhost\n"

# Builds the production compose environment
up:
    docker compose up -d --build
    docker compose ps -a
    @echo "application is available at https://localhost:443"

# Clean local development dependencies
clean:
    rm -rf build
    docker compose down -v
    -caddy stop
    -rm -f caddy.log caddy.pid
