FROM node:18-alpine

WORKDIR /app

# Copy only the backend code and package files
COPY package*.json ./
COPY backend ./

RUN npm install

EXPOSE 5000

CMD ["node", "server.js"]
