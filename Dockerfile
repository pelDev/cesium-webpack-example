FROM node:20-alpine as Builder

WORKDIR /tmp
COPY ./webpack-5 .
RUN ls -la && npm i --quiet && npm run build

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY ./webpack-5/package*.json ./
RUN npm i --production
COPY --from=builder /tmp/dist ./dist 
EXPOSE 8080
RUN chown -R node /app

CMD ["npm", "run", "start:built"]