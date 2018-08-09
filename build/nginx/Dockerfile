FROM pagespeed/nginx-pagespeed

#COPY nginx.conf /etc/nginx/nginx.conf

RUN apk add --no-cache bash gawk sed grep bc coreutils

COPY config/ /etc/nginx/
RUN ls -la /etc/nginx/*

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]