FROM node:lts-alpine
WORKDIR /api
COPY ./dist/apps/api .
COPY ./apps/api/src/app/graphql ./apps/api/src/app/graphql
RUN npm install --production
RUN npm install pg --save
RUN npm install ts-morph --save
RUN npm install @apollo/gateway --save
CMD ["node", "main.js"]
