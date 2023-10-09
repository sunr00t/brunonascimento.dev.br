FROM node:current-alpine3.18

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]