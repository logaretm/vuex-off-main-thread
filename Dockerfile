FROM node:12-alpine

RUN npm install -g http-server

COPY package*.json ./

RUN yarn

COPY . .

RUN yarn build

EXPOSE 8080
CMD [ "http-server", "dist" ]
