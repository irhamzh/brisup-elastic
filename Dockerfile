FROM node:12

WORKDIR /app

COPY package.json ./
COPY *.lock ./

ENV PORT 443

RUN npm install

COPY . .

RUN npm run build

CMD npm start