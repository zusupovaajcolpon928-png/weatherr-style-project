const descriptions = {
  0: "Ясно", 1: "Ясно", 2: "Облачно", 3: "Пасмурно", 45: "Туман",
  51: "Морось", 53: "Морось", 55: "Морось", 61: "Дождь", 63: "Дождь",
  65: "Сильный дождь", 71: "Снег", 73: "Снег", 75: "Сильный снег",
  80: "Ливень", 81: "Ливень", 82: "Сильный ливень", 95: "Гроза"
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

function ForecastList({ weather }) {
  const daily = weather.daily;

  function formatDate(value) {
    return new Intl.DateTimeFormat("ru-RU", {
      weekday: "short",
      day: "numeric",
      month: "short",
    }).format(new Date(`${value}T12:00:00`));
  }

  return (
    <section className="mt-4">
      <h3 className="h4 fw-bold mb-3">Прогноз на 7 дней</h3>
      <div className="row g-3">
        {daily.time.map((day, index) => (
          <div className="col-6 col-md" key={day}>
            <article className="forecast-card card h-100 border-0 shadow-sm text-center">
              <div className="card-body px-2 py-3">
                <p className="small text-secondary text-capitalize">{index === 0 ? "Сегодня" : formatDate(day)}</p>
                <div className="forecast-icon">{getIcon(daily.weather_code[index])}</div>
                <p className="small mb-3">{descriptions[daily.weather_code[index]] || "Погода"}</p>
                <div className="fw-bold">{Math.round(daily.temperature_2m_max[index])}° <span className="text-secondary fw-normal">{Math.round(daily.temperature_2m_min[index])}°</span></div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ForecastList;