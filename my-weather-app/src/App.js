import "./App.css";
import SearchForm from "./SearchForm";
import Footer from "./Footer";

import Greeting from "./Greeting";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Greeting />
        </div>

        <div className="weather-app-wrapper">
          <SearchForm defaultCity="Rotterdam" />
        </div>

        <Footer />
      </div>

      <script src="src/app.js"></script>
    </div>
  );
}
