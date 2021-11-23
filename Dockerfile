FROM node:12

WORKDIR /app

COPY package.json ./
COPY *.lock ./

RUN yarn

COPY . .

RUN npm run build

# CMD npm start