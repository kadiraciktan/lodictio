FROM nginx:latest
COPY ./dist/apps/app /usr/share/nginx/html
COPY ./apps/app/nginx.config /etc/nginx/conf.d/default.conf
EXPOSE 80 443 8080