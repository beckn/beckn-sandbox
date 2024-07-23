FROM node:18.14.0-alpine3.17

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./
COPY . ./

RUN ls -ltrh

RUN npm install
RUN npm i -g pm2
RUN npm run build

EXPOSE 3000
CMD [ "pm2-runtime", "ecosystem.config.js" ]
