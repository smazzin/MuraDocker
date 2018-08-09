# Mura Docker 
Designed as a starting point for your next Mura project. 
Uses [pagespeed/ngx_pagespeed image](https://hub.docker.com/r/pagespeed/nginx-pagespeed/)

## Setup
* Starting the project
```
docker-compose up
```


### Pagespeed filters defined 
``` 
pagespeed on;
pagespeed RewriteLevel PassThrough;
pagespeed EnableFilters combine_css,extend_cache,rewrite_images;
pagespeed EnableFilters rewrite_css,rewrite_javascript;
pagespeed FileCachePath /var/pagespeed/cache;
```

Info on [configuring pagespeed filters](https://www.modpagespeed.com/doc/config_filters)

To enable or disable filters, you can edit
```
build/nginx/config/sites-enabled/_default
```
