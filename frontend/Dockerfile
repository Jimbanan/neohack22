FROM node:latest

COPY . /src
WORKDIR /src

RUN npm install
RUN npm run production

EXPOSE 3000

CMD [ "node", "server.js" ]
