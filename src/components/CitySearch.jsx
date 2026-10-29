import { useState } from "react";

function CitySearch({ onSearch, loading, initialValue = "" }) {
  const [cityName, setCityName] = useState(initialValue);

  function handleSubmit(event) {
    event.preventDefault();
    onSearch(cityName);
  }

  return (
    <form className="city-search input-group" onSubmit={handleSubmit}>
      <input
        className="form-control"
        value={cityName}
        onChange={(event) => setCityName(event.target.value)}
        placeholder="Введи название города"
        aria-label="Название города"
      />
      <button className="btn btn-primary" type="submit" disabled={loading}>
        {loading ? "Загрузка..." : "Найти"}
      </button>
    </form>
  );
}

export default CitySearch;