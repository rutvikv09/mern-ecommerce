# # Use official Node.js 14 as base image
# FROM node:16.20.2-buster-slim

# # Set working directory
# WORKDIR /usr/src/app

# # Copy package.json and package-lock.json
# COPY package*.json ./

# # Install dependencies
# RUN npm install

# # Copy the rest of the server code
# COPY . .

# # Copy the .env file into the container
# COPY .env.example .env

# # Expose port 3000 for the server
# EXPOSE 3000

# # Default command to start the application
# CMD ["npm", "start"]
# Use official Node.js 16 slim image
# Use the same base image as the backend
FROM node:16.20.2-buster-slim

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the server code
COPY . .

# Copy the .env file into the container
COPY .env.example .env

# Expose port 3000 for the server
EXPOSE 3000

# Seed the database during the build process
RUN npm run seed:db admin@example.com admin123

# Default command to start the server
CMD ["npm", "start"]
