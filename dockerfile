FROM node:19
MAINTAINER Hyunjun Park <hyunjun1325@icloud.com>
WORKDIR /home/node

ADD *.* /home/node/
COPY lib_login /home/node/lib_login
COPY node_modules /home/node/node_modules
COPY views /home/node/views

RUN npm install
CMD ["npm", "start"]