FROM node:19
MAINTAINER Hyunjun Park <hyunjun1325@icloud.com>
WORKDIR /home/node

ADD *.* /home/node/
COPY API /home/node/API
COPY node_modules /home/node/node_modules

RUN npm install
CMD ["npm", "start"]