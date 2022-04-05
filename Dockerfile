FROM node:17-bullseye-slim
WORKDIR /code
COPY package-lock.json .
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
CMD [ "npm", "start" ]