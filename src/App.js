import "./App.css";
import SearchForm from "./SearchForm";
import Footer from "./Footer";
import Forecast from "./Forecast";
import CurrentConditions from "./CurrentConditions";
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
