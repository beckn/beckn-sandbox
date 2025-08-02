FROM node:18.14.0-alpine3.17

# Create and set the working directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . ./

# List files in the working directory
RUN ls -ltrh

# Expose the application port
EXPOSE 3000

# Command to start the application
CMD ["npm", "start"]
