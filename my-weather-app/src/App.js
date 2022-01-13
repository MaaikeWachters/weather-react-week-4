import "./App.css";

import Footer from "./Footer";
import Forecast from "./Forecast";
import CurrentConditions from "./CurrentConditions";
import Greeting from "./Greeting";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Greeting />
        </div>

        <div className="weather-app-wrapper">
          <CurrentConditions />
          <Forecast />
        </div>

        <Footer />
      </div>

      <script src="src/app.js"></script>
    </div>
  );
}
