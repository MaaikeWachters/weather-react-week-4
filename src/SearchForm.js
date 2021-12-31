import React from "react";

export default function SearchForm() {
  return (
    <div>
      <div className="row">
        <span className="search-form-text">Go somewhere else?</span>
        <form id="search-form">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control"
                id="city-input"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn btn-primary" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
