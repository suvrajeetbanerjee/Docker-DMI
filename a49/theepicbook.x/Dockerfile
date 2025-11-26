FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=deps /app .
ENV NODE_ENV=production
EXPOSE 3000
CMD ["node", "server.js"]

