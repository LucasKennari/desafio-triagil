
FROM node:20.11

WORKDIR /usr/app


COPY package*.json ./


RUN npm install

COPY . .


EXPOSE 3000

