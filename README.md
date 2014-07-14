wp-launchpad
============

A Wordpress development starter using composer, node and grunt

## Getting started

The goal of WP Launchpad is to automate a modern development project structure for Wordpress site development. The setup is modeled from the guys at [roots.io](http://roots.io/using-composer-with-wordpress/). WP Launchpad uses composer and grunt to create the project structure which places the entire wordpress project in a wp/ directory, copies over wp-content/, index.php and wp-confg-sample.php and makes some modifications to ensure wordpress is cool with everything.

__Open up terminal and type:__

```bash
composer install
npm install
grunt init
```

__After that do the following:__
 - add your database creds to wp-config-sample.php moving it to wp-config.php, 
 - visit the installed url i.e http://localhost/mywpsite, go through the installation setup as usual
 - Finally from wp-admin go to settings->general settings and remove '/wp' from the end of site address (url) option

That's it! Enjoy :)
