import "./App.css";
import SearchForm from "../my-weather-app/src/SearchForm";
import Footer from "./Footer";
import Forecast from "./Forecast";
import CurrentConditions from "../my-weather-app/src/CurrentConditions";
import Greeting from "./Greeting";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Greeting timeOfDay="Good afternoon" />
        </div>

        <div className="weather-app-wrapper">
          <CurrentConditions />
          <Forecast />
          <SearchForm />
        </div>

        <Footer />
      </div>

      <script src="src/app.js"></script>
    </div>
  );
}
