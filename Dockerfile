# Stage 1
FROM node:11-alpine as build-step

RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm build --prod

# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app /usr/share/nginx/html