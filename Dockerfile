FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --no-progress

COPY app.js .

EXPOSE 3000

CMD ["npm", "start"]
