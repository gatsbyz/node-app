FROM node:20 AS builder
WORKDIR /dist
COPY ./package.json ./
COPY ./package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /dist
EXPOSE 4002
COPY --chown=node:node --from=builder /dist ./
USER node
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0"]