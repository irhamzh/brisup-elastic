FROM node:12

WORKDIR /app

COPY package.json ./
COPY *.lock ./

ENV PORT 9243

RUN npm install

COPY . .

RUN npm run build

RUN npm start