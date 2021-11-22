FROM node:12

WORKDIR /app

COPY package.json ./
COPY *.lock ./

RUN yarn

COPY . .

RUN yarn run build

CMD yarn start