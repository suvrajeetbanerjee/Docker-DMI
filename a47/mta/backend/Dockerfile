FROM node:18-alpine

WORKDIR /app

# Install API dependencies
COPY package*.json ./
RUN npm install --production

# Copy source code
COPY . .

# Expose backend port (we'll use 5000)
EXPOSE 5000

# Keep server running forever
CMD ["node", "server.js"]

