# Dockerfile for package.json

# Use the official Node.js image as the base image
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Use a minimal base image for the final stage
FROM nginx:alpine

# Copy the build output to the nginx html directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the port that nginx will run on
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]