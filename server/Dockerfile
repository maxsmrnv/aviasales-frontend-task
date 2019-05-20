FROM node:carbon as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app
EXPOSE 8080
CMD node index.js