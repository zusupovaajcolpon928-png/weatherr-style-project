# Weather App

Учебное приложение на React. Оно находит город, показывает текущую погоду и прогноз на семь дней. Данные предоставляет бесплатный API Open-Meteo, поэтому API-ключ не нужен.

## Запуск

Нужен установленный Node.js. Открой папку проекта в VS Code и в терминале выполни:

```bash
npm install
npm start
```

`npm install` устанавливает библиотеки проекта. `npm start` запускает сайт; открой `http://localhost:3000` в браузере. Чтобы остановить сервер, нажми `Ctrl+C` в терминале.

Для проверки production-сборки выполни `npm run build`.

## Как устроен проект

```text
public/
└── index.html
src/
├── api/
│   └── weatherApi.js
├── components/
│   ├── CitySearch.jsx
│   ├── CurrentWeather.jsx
│   ├── ForecastList.jsx
│   └── Navbar.jsx
├── pages/
│   ├── CityPage.jsx
│   └── HomePage.jsx
├── App.jsx
├── index.jsx
└── index.css
package.json
└── README.md
```

Файлы с интерфейсом и React-компонентами имеют расширение `.jsx`. В `weatherApi.js` находится обычная JavaScript-логика запросов к API.

## Для чего нужен каждый файл

- `public/index.html` — HTML-страница, в которую React помещает приложение.
- `src/index.jsx` — запускает React и подключает общий CSS и Bootstrap.
- `src/App.jsx` — собирает приложение и настраивает адреса главной страницы и страниц городов.
- `src/index.css` — задаёт общий дизайн и адаптацию для небольших экранов.
- `src/api/weatherApi.js` — ищет город и загружает его погоду из Open-Meteo.
- `src/components/Navbar.jsx` — верхняя навигация.
- `src/components/CitySearch.jsx` — форма поиска города.
- `src/components/CurrentWeather.jsx` — карточка текущей температуры, описания, влажности и ветра.
- `src/components/ForecastList.jsx` — список прогноза по дням.
- `src/pages/HomePage.jsx` — главная страница с поиском.
- `src/pages/CityPage.jsx` — отдельная страница выбранного города; показывает загрузку и сообщения об ошибках.
- `package.json` — список библиотек и команды для запуска, тестов и сборки.

## Как работает поиск и погода

Сначала приложение отправляет название города в геокодер Open-Meteo и получает координаты. Затем по координатам запрашивает текущие условия и прогноз на семь дней. Ошибки сети и ненайденный город отображаются на странице города.
