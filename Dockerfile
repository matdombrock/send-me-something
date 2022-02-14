# syntax=docker/dockerfile:1
FROM matdombrock/ubuntu-base:latest
WORKDIR /usr/src/app
COPY app .
RUN rm -r node_modules
RUN npm install
#CMD ["node", "app.js"]