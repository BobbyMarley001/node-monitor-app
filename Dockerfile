# Use official Node.js 18 image
FROM node:18

# Create app folder inside container
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .

# App listens on port 3000
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]
