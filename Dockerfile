#Building the app
FROM node:alpine3.17 as jobfinderapp
WORKDIR /jobfinder
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

#Installing NGINX and Serving from NGINX Server
FROM nginx:1.9.15-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=jobfinderapp /jobfinder/build .
ENTRYPOINT ["nginx", "-g", "daemon off;"]