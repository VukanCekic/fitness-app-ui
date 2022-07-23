import React from "react";
import { Card } from "../Card/card.component";
import { useEffect, useState } from "react";

export const CardList = ({ cards }) => {
  return (
    <div className="container">
      {cards.length > 0 &&
        cards.map((item, index) => {
          return <Card key={index} card={item} index={index}></Card>;
        })}
      {cards.length === 0 && (
        <div className="main-content-box main-content-box--100">
          <h1>No workouts found</h1>
          <p>
            We have difficulties fetching the best workouts for you, please try
            again later. Stay hydrated!
          </p>
        </div>
      )}
    </div>
  );
};
