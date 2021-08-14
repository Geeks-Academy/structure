FROM node:16.6.2-buster-slim

WORKDIR /opt/app
COPY package*.json .
RUN npm install

COPY . .
RUN npm run build

CMD [ "npm", "run", "prod" ]
