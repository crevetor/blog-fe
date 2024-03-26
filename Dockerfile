FROM node:latest AS node_build

ENV NODE_OPTIONS=--openssl-legacy-provider
WORKDIR /home/node/app
COPY . .

RUN npm install
RUN /home/node/app/node_modules/.bin/ng build --prod --configuration=production

FROM nginx:latest
COPY --from=node_build /home/node/app/dist/blog /usr/share/nginx/html
