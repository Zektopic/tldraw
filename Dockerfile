FROM node:20-bullseye as build
WORKDIR /app
RUN corepack enable
COPY . /app
RUN yarn install --immutable
RUN yarn workspace examples.tldraw.com build

FROM nginx:1.25-alpine
COPY --from=build /app/apps/examples/dist /usr/share/nginx/html
EXPOSE 80
