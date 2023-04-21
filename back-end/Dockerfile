FROM node

WORKDIR /src/usr/

COPY package*.json .

RUN npm i

COPY . .

EXPOSE 5000

RUN npx prisma generate

RUN npm run build

CMD ["npm", "start"]