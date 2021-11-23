FROM node:12

WORKDIR /app

COPY package.json ./
COPY *.lock ./

ENV PORT 9243
ENV PROTOCOL https

RUN yarn

COPY . .

RUN npm run build

CMD npm start