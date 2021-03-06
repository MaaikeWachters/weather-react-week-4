import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="credits">
        <a
          href="https://github.com/MaaikeWachters/weather-react-week-4"
          target="_blank"
          rel="noreferrer"
        >
          Open-source coded
        </a>
        &nbsp; with 💖&nbsp; by Maaike Wachters
      </div>
      <div className="credits">
        Photo by&nbsp;
        <a
          href="https://unsplash.com/@maiq?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noreferrer"
        >
          Tom Morel
        </a>
        &nbsp;on &nbsp;
        <a
          href="https://unsplash.com/s/photos/glitter-dark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          target="_blank"
          rel="noreferrer"
        >
          Unsplash
        </a>
      </div>
      <div className="credits">
        Icons by&nbsp;
        <a
          href="https://thenounproject.com/nookfulloption/"
          target="_blank"
          rel="noreferrer"
        >
          Nook Fulloption&nbsp;
        </a>
        from{" "}
        <a href="https://thenounproject.com/" target="_blank" rel="noreferrer">
          the Noun Project
        </a>
      </div>
    </div>
  );
}
