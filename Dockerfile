FROM node:12.13.0-alpine

WORKDIR /app
COPY ./ ./

RUN yarn install

EXPOSE 9001
CMD yarn dev
