FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install

# if multiple compouse files
# del RUN npm install if this code
# ARG NODE_ENV
# RUN if [ "$NODE_ENV"="development" ]; \
#   then npm install; \
#   else npm install --only=production; \
#   fi

COPY . ./
ENV PORT 3000
EXPOSE $PORT
CMD ["npm","run","dev"]