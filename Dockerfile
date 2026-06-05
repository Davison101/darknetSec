FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy application
COPY .next ./.next
COPY public ./public
COPY package.json ./

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
