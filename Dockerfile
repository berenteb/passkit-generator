FROM node:16 as base
WORKDIR /pass-server
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install
COPY . .
RUN npm run build