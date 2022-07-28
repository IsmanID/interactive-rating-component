const mix = require('laravel-mix');

require('mix-tailwindcss');

mix.css('src/app.css', 'dist/styles.css')
    .js('src/app.js', 'dist/scripts.js')
    .tailwind();