FROM node:26-alpine

WORKDIR /app

COPY . /app

RUN npm install

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "npm", "run", "start" ]