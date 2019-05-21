# [Aviasales (frontend task)](https://github.com/KosyanMedia/test-tasks/tree/master/aviasales)
## Demo - https://avia.maxsmrnv.now.sh/

- [x] Рендеринг билетов с данными сортированными по цене из файла tickets.json.
- [x] Фильтрация билетов в выдаче по количеству пересадок.
- [x] Переключения валюты (используется апи https://exchangeratesapi.io/)
- [x] Верстка билета, фильтра, переключения валют
- [x] Асинхронная загрузка билетов с локального сервера при инициализации

---
### Запуск приложения
1. `cd server && node index.js`
2. `npm install`
3. `npm start`
3. Приложение будет доступно по адресу: http://localhost:3000/
---
### Запуск в докер контейнере:
1. `docker-compose up`
2. Приложение будет доступно по адресу: http://localhost:80/
