FROM node:18-alpine

WORKDIR /app

# dependencies first (cache optimization)
COPY package*.json ./
RUN npm install

# then source code
COPY . .

EXPOSE 3000

CMD ["npm", "start"]
