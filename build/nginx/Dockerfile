FROM pagespeed/nginx-pagespeed

#COPY nginx.conf /etc/nginx/nginx.conf

RUN apk add --no-cache bash gawk sed grep bc coreutils

COPY config/ /etc/nginx/
RUN ls -la /etc/nginx/*

EXPOSE 80

ADD /wait-for-it.sh /wait-for-it.sh
RUN chmod +x /wait-for-it.sh

ENTRYPOINT [ "/wait-for-it.sh", "mura_cfml:8080", "--" ]

CMD ["nginx", "-g", "daemon off;"]