# Create image based on the official Node 14 alpine image from dockerhub
FROM node:16.4.0-buster-slim
ARG REACT_APP_API_URL
# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app
# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app
# Copy dependency definitions
COPY package.json /usr/src/app/
# Get all the code needed to run the app
COPY . /usr/src/app/
# Install dependecies
RUN npm install
# Install serve
RUN npm install serve -g
# Build app
RUN npm run build
ENTRYPOINT ["serve", "-l", "3000", "-s", "build"]
