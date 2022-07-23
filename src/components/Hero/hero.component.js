import React from "react";

export const Hero = () => {
  return (
    <div className="banner">
      <div className="banner__navbar">
        <h3 className="banner__logo">Fitness Club</h3>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location.replace("/#workouts");
              }}
            >
              Workouts
            </a>
          </li>
        </ul>
      </div>
      <div className="main-content-box main-content-box--100">
        <h1>Keep grinding and win</h1>
        <p>
          We will help you achieve your goals, everything required you already
          poses, let's get to work!
        </p>
        <button
          onClick={() => {
            window.location.replace("/#workouts");
          }}
          className="button button--primary"
        >
          <span></span> Workouts
        </button>
      </div>
    </div>
  );
};
