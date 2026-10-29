import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CitySearch from "../components/CitySearch";

function HomePage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSearch(cityName) {
    if (!cityName.trim()) {
      setError("Сначала введи название города.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      navigate(`/city/${encodeURIComponent(cityName.trim())}`);
    } catch {
      setError("Не удалось открыть страницу города.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="home-page">
      <section className="home-hero container">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" />Погода без лишнего шума</p>
          <h1>Планируй день.<br /><span>Не по ощущениям.</span></h1>
          <p className="hero-description">Точный прогноз для твоего города — сейчас и на ближайшие семь дней.</p>
          <CitySearch onSearch={handleSearch} loading={loading} initialValue="Бишкек" />
          {error && <div className="alert alert-danger mt-3 mb-0">{error}</div>}
          <p className="search-hint">Попробуй: Бишкек, Алматы, Ош, Рим</p>
        </div>
        <div className="hero-image" role="img" aria-label="Горы над облаками в ясный день">
          <div className="image-caption"><span>01 / 04</span><span>Небо меняет планы</span></div>
          <div className="image-mark" aria-hidden="true">↗</div>
        </div>
      </section>
      <div className="home-footer container">
        <span>ПРОГНОЗ, КОТОРОМУ МОЖНО ДОВЕРЯТЬ</span>
        <span>Данные Open-Meteo <span className="footer-separator">/</span> Весь мир</span>
      </div>
    </main>
  );
}

export default HomePage;