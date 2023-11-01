1. инициализируем папку как проект

### npm init --yes

2. устанавливаем зависимости

### npm i express

### npm i nodemon --dev

3. для запуска в режиме дебага(можем дебажить в браузере)

### npx nodemon --inspect index.js

4. устанавливаем typescript

### npm i typescript ts-node @types/node @types/express --dev

5. инициализируем tsc

### npx tsc --init

6. если в все файлы находятся в src, то меняем в файле tsconfig.json

### "rootDir": "./src",

7. указываем куда компилировать файлы

### "outDir": "./dist",

8. компилируем и создаем папку dist

### npx tsc

9. добавляем скрипты для быстрого запуска

### "watch": "tsc -w" //запускаем в режиме вотчера, чтобы при изменении в ts, сразу скомпилироваля в js

### "dev": "nodemon --inspect dist/index.js" и в режиме инспектора запускаем уже js файл

### "build": "tsc" // для билда нам не нужен вотчер, а только папка dist

### "start": "node dist/index.js" //для запуска на сервере просто запускаем, скомпилированный js файл

"scripts": {
"watch": "tsc -w",
"dev": "nodemon --inspect dist/index.js",
"build": "tsc",
"start": "node dist/index.js"
}

10. для того чтобы ts нормально работал не используем require, используем import

11. для деплоя делаем так const port = process.env.PORT || 3000, потому что на хостинге могут быть свои порты
