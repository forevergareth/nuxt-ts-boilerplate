FROM node:10 as builder
WORKDIR /app
ENV NODE_ENV development
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
RUN npm install
COPY . /app
ENV NODE_ENV production
RUN npm run build && npm prune --production

#######################################################

FROM node:11.13.0-alpine
WORKDIR /app
EXPOSE 3000
ENV NODE_ENV production
COPY --from=builder /app /app
RUN chown -R node:node /app
USER node
WORKDIR /app
#CMD ["npm", "run", "start"]
CMD ["npx", "nuxt", "start"]