function WeatherCard() {
  return (
    <>
      <div
        className="card is-weather-card has-background-image"
        data-background="assets/img/illustrations/cards/weather-bg.svg"
      >
        <div className="card-heading">
          <div className="dropdown is-spaced is-accent is-right dropdown-trigger is-light">
            <div>
              <div className="button">
                <i data-feather="more-vertical"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="temperature">
            <span>71</span>
          </div>
          <div className="weather-icon">
            <div>
              <i data-feather="sun"></i>
              <h4>Sunny</h4>
              <div className="details">
                <span>Real Feel: 78° </span>
                <span>Rain Chance: 5%</span>
              </div>
            </div>
          </div>
          <div className="previsions">
            <div className="day">
              <span>Mon</span>
              <i data-feather="sun"></i>
              <span>69°</span>
            </div>
            <div className="day">
              <span>Tue</span>
              <i data-feather="cloud-lightning"></i>
              <span>74°</span>
            </div>
            <div className="day">
              <span>Wed</span>
              <i data-feather="cloud-lightning"></i>
              <span>73°</span>
            </div>
            <div className="day">
              <span>Thu</span>
              <i data-feather="sun"></i>
              <span>68°</span>
            </div>
            <div className="day">
              <span>Fri</span>
              <i data-feather="cloud-drizzle"></i>
              <span>55°</span>
            </div>
            <div className="day">
              <span>Sat</span>
              <i data-feather="cloud-rain"></i>
              <span>58°</span>
            </div>
            <div className="day">
              <span>Sun</span>
              <i data-feather="sun"></i>
              <span>64°</span>
            </div>
          </div>
          <div className="current-date-location has-text-centered">
            <span className="date">Sunday, 18th 2018</span>
            <span className="location">
              <i data-feather="map-pin"></i> Los Angeles, CA
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
