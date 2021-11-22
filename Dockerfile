FROM node:12

WORKDIR /app

COPY package.json ./
COPY *.lock ./

ENV HOST https://my-deployment-d6020b.es.us-central1.gcp.cloud.es.io/

ENV PORT 9243

ENV USER elastic

ENV PASS gtHrn6uw0ym12WnDRoHEGePf

RUN npm install

COPY . .

RUN npm run build

CMD npm start