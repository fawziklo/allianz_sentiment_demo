# Stage 1
FROM node:14-alpine as build-step

FROM node:10
WORKDIR /
COPY package.json /
RUN npm install
COPY . /
CMD node app.js
