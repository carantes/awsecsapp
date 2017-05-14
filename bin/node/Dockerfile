FROM node:7-slim
MAINTAINER carantes.ferreira@gmail.com

# set default workdir
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# bundle app source
COPY . /usr/src/app/

EXPOSE 8090

CMD ["node", "app"]