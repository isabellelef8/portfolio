# syntax=docker/dockerfile:1
# check=error=true

FROM oven/bun:1.3.6-alpine AS build

WORKDIR /app
COPY package.json bun.lock* ./
RUN bun i --no-cache

COPY . ./
RUN bun run build

FROM caddy:2-alpine

COPY --from=build /app/build /srv
COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 80 443
