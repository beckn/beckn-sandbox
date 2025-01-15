#!/bin/bash

set -e  # Exit immediately if a command exits with a non-zero status

# Navigate to the sandbox directory
cd ~/beckn-sandbox/

# Build the Docker image
if docker build -t sandbox-api .; then
  # Stop and remove the existing Docker container if it is running
  if docker ps | grep -q sandbox-api; then
    docker stop sandbox-api && docker rm sandbox-api
  fi
  
  # Run the Docker container if the build succeeds
  docker run --name sandbox-api -it -d -p 3000:3000 sandbox-api:latest
  echo "Deployment successful: sandbox-api is running on port 3000."
else
  echo "Docker build failed. The existing sandbox-api container has not been stopped or removed."
fi
