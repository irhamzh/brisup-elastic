FROM node:12
#FROM docker.elastic.co/elasticsearch/elasticsearch:7.15.2

WORKDIR /app

COPY package.json ./
COPY *.lock ./

RUN yarn

COPY . .

RUN npm run build

CMD npm start
