#FROM node:latest
FROM ubuntu:14.04

# Copy project files and change working directory
COPY . /src
WORKDIR /src

# Expose container port
ENV PORT=8081
EXPOSE $PORT

# Install npm dependencies and run application
# RUN npm install
RUN apt-get -y update && apt-get install -y curl && curl -sL https://deb.nodesource.com/setup_4.x && apt-get install -y nodejs
CMD node -v
#CMD node server.js