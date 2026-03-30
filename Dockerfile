FROM nginx:1.25-alpine
COPY apps/examples/dist /usr/share/nginx/html
EXPOSE 80
