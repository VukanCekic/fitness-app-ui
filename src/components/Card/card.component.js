import React from "react";
import toast from "react-hot-toast";

export const Card = ({ card }) => {
  const MAX_LENGTH = 100;

  const triggerPopup = (e) => {
    e.preventDefault();
    toast.success("Booked workout!");
  };

  return (
    <div className="card">
      <h4>{card._source.name}</h4>
      {card._source.description && (
        <p className="card__description">
          Description:{" "}
          {`${card._source.description.substring(0, MAX_LENGTH)}...`}
        </p>
      )}
      {!card._source.description && (
        <p className="card__description">
          Description: Does not exist for this workout!
        </p>
      )}
      <p className="card__created">
        Created at: {card._source.createdAt.substring(0, 10)}
      </p>
      <button
        id={`button--${card._source.id}`}
        onClick={triggerPopup}
        className="button button--secondary"
      >
        <span>Reserve</span>
      </button>
    </div>
  );
};
