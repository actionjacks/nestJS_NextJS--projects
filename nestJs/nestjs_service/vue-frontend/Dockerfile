FROM node:14 AS dependencies

WORKDIR /app

# RUN npm install -g yarn

COPY package.json ./
COPY yarn.lock ./
COPY babel.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY vue.config.js ./

RUN yarn install

FROM dependencies AS build

COPY --from=dependencies /app/node_modules ./node_modules/

COPY src ./src/
COPY public ./public/
COPY babel.config.js ./
COPY postcss.config.js ./
COPY tailwind.config.js ./
COPY vue.config.js ./
