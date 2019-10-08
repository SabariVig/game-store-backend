FROM node:12-alpine

WORKDIR /app

COPY . /app

RUN npm install 

RUN  npm start

EXPOSE 1215
