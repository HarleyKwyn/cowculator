# ADAPTED FROM:
# Node.js Dockerfile
#
# https://github.com/dockerfile/nodejs
#

# Pull base image.
FROM node:4.2

ADD . /src
ENV PORT 8080
ENV NODE_ENV production
RUN apt-get install git -y

RUN \
  npm install --global nodemon && \
  cd /src && \
  npm install

EXPOSE 8080:8080

CMD cd /src && npm start
