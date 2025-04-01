# Use the official Node.js image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy only the package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the app for production
RUN npm run build

# Use a lightweight server to serve static files
RUN npm install -g serve

# Expose port 5173 for development preview or 4173 for production preview
EXPOSE 4173

# Start the app in preview mode (use this if you ran `npm run build`)
CMD ["serve", "-s", "dist", "-l", "4173"]
