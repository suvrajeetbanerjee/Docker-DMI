# Dockerfile (at project root)
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (needed for any build steps)
RUN npm ci

# Copy application source
COPY . .

# Production stage
FROM node:18-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy only production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy application code from builder
COPY --from=builder /app/config ./config
COPY --from=builder /app/db ./db
COPY --from=builder /app/models ./models
COPY --from=builder /app/routes ./routes
COPY --from=builder /app/views ./views
COPY --from=builder /app/public ./public
COPY --from=builder /app/server.js ./

EXPOSE 3000

CMD ["node", "server.js"]

