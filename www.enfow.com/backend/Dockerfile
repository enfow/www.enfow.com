FROM node:16.14.2-alpine

WORKDIR /app
COPY app/ /app/

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

CMD ["npm", "start"]
