#!/bin/bash

cp Dockerfile-sandbox ~/beckn-sandbox/Dockerfile
cd ~/beckn-sandbox/
docker build -t sandbox-api .
docker stop sandbox-api && docker rm sandbox-api
docker run --name sandbox-api -it -d --network host sandbox-api:latest
