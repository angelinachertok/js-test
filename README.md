# JS Test Repository for Pipeline

Простой Node.js сервер для проверки автоматизации.

## Run

npm install
npm start

curl http://localhost:3000

## Docker
docker build -t js-test .
docker run -p 3000:3000 js-test
