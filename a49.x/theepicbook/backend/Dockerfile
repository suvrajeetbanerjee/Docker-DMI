# syntax=docker/dockerfile:1

###########################
# 1) Dependencies / Build #
###########################
FROM node:20-alpine AS deps

# Set working dir inside container
WORKDIR /app

# Copy only dependency manifests first (layer cache)
COPY package*.json ./

# Install ONLY production dependencies
# (no devDependencies in the final image)
RUN npm ci --omit=dev

# Now copy the rest of the app source
COPY . .

# If your app had a frontend build step (React/Vite/etc),
# it would run here (we keep it commented as this app is SSR):
# RUN npm run build


###########################
# 2) Runtime Image (Lean) #
###########################
FROM node:20-alpine AS runtime

WORKDIR /app

# Set runtime env
ENV NODE_ENV=production

# Copy only the node_modules and app sources from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package*.json ./
COPY --from=deps /app/server.js ./server.js
COPY --from=deps /app/config ./config
COPY --from=deps /app/db ./db
COPY --from=deps /app/models ./models
COPY --from=deps /app/routes ./routes
COPY --from=deps /app/views ./views
COPY --from=deps /app/public ./public

# Expose the backend port (replace 3000 if your Phase 0
# inspection found a different one in server.js / config)
EXPOSE 3000

# Default command – start the Node app
CMD ["node", "server.js"]

