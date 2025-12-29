FROM node:20-alpine

WORKDIR /usr/src/app

COPY . .

RUN npm ci
RUN npx prisma generate

EXPOSE 6003

CMD ["npm", "run", "start"]