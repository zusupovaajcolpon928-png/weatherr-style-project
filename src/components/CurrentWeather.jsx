const descriptions = {
  0: "Ясно", 1: "Преимущественно ясно", 2: "Переменная облачность",
  3: "Пасмурно", 45: "Туман", 48: "Изморозь", 51: "Лёгкая морось",
  53: "Морось", 55: "Сильная морось", 61: "Небольшой дождь",
  63: "Дождь", 65: "Сильный дождь", 71: "Небольшой снег",
  73: "Снег", 75: "Сильный снег", 80: "Кратковременный дождь",
  81: "Ливень", 82: "Сильный ливень", 95: "Гроза",
  96: "Гроза с градом", 99: "Сильная гроза с градом"
};

function getIcon(code) {
  if (code === 0) return "☀️";
  if ([1, 2].includes(code)) return "🌤️";
  if ([3, 45, 48].includes(code)) return "☁️";
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌡️";
}

function CurrentWeather({ city, weather }) {
  const current = weather.current;

  return (
    <section className="current-weather card border-0 shadow-sm">
      <div className="card-body p-4 p-md-5">
        <p className="text-uppercase small fw-bold text-primary mb-2">Погода сейчас</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h2 className="display-6 fw-bold mb-1">{city.name}</h2>
            <p className="text-secondary mb-2">{[city.admin1, city.country].filter(Boolean).join(", ")}</p>
            <p className="mb-0">{descriptions[current.weather_code] || "Погодные условия"}</p>
          </div>
          <div className="weather-icon" aria-hidden="true">{getIcon(current.weather_code)}</div>
        </div>
        <div className="temperature">{Math.round(current.temperature_2m)}°</div>
        <p className="text-secondary">Ощущается как {Math.round(current.apparent_temperature)}°</p>
        <div className="row g-3 mt-3">
          <div className="col-6">
            <div className="weather-detail"><span>💧 Влажность</span><strong>{current.relative_humidity_2m}%</strong></div>
          </div>
          <div className="col-6">
            <div className="weather-detail"><span>🌬️ Ветер</span><strong>{Math.round(current.wind_speed_10m)} км/ч</strong></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWeather;