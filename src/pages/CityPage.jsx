import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getForecastByCity, searchCity } from "../api/weatherApi";
import CitySearch from "../components/CitySearch";
import CurrentWeather from "../components/CurrentWeather";
import ForecastList from "../components/ForecastList";

function CityPage() {
  const { cityName } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadWeather() {
      setLoading(true);
      setError("");
      setCity(null);
      setWeather(null);

      try {
        const foundCity = await searchCity(cityName || "");
        const forecast = await getForecastByCity(foundCity);
        if (active) {
          setCity(foundCity);
          setWeather(forecast);
        }
      } catch (requestError) {
        if (active) setError(requestError.message || "Не удалось загрузить погоду.");
      } finally {
        if (active) setLoading(false);
      }
    }

    loadWeather();
    return () => { active = false; };
  }, [cityName]);

  function handleSearch(nextCity) {
    if (nextCity.trim()) {
      navigate(`/city/${encodeURIComponent(nextCity.trim())}`);
    }
  }

  return (
    <main className="container city-page py-4 py-md-5">
      <Link to="/" className="back-link text-decoration-none">← На главную</Link>
      <div className="row justify-content-center mt-3">
        <div className="col-12 col-lg-10">
          <CitySearch key={cityName} onSearch={handleSearch} loading={loading} initialValue={cityName || ""} />
          {loading && <div className="alert alert-info mt-4">Загружаем погоду...</div>}
          {error && <div className="alert alert-warning mt-4">{error}</div>}
          {city && weather && (
            <>
              <div className="mt-4"><CurrentWeather city={city} weather={weather} /></div>
              <ForecastList weather={weather} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default CityPage;