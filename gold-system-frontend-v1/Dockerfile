FROM node:18.9
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install -g serve
COPY . .
RUN chown -R node:node /app/node_modules

EXPOSE 3000:3000
CMD [ "npm","run","dev"]
