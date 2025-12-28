FROM node:25

WORKDIR /usr/src/app

COPY . .

RUN npm install
RUN npx prisma generate

EXPOSE 6003

CMD ["npm", "run", "start"]