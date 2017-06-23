# Простенький шаблон Gulp
Що входить в склад
-----------------------------------
Gulp:
* gulp-less
* browser-sync
* gulp-concat
* gulp-uglifyjs
* gulp-cssnano
* gulp-autoprefixer

Html шаблон:
* Less файли для стилів та адаптиву
* jQuery, Bootstrap(тільки сітка), FontAwesome
* XCF заготовки для favicon та og_image

Налаштування
-----------------------------------
Для початку роботи введіть в терміналі **npm i**

Основні команди gulp:
* **gulp watch** - запускає фоновий процес, який слідкує за оновленням файлів, компілює і мініфікує less та оновлює сторінку
* **gulp libs** - збирає css бібліотеки з теки libs/css
* **gulp scripts** - збирає js бібліотеки з теки libs/js
* **gulp build** - збирає готовий проект в папку dist

![скріншот](http://i.imgur.com/e4L5w26.png)