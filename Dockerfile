FROM node:10.13-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 1215
CMD ["npm", "start"]