import React from "react";

export const GifItem = ({ title, url, width, height }) => {
  return (
    <div className="card">
      <img className="card img" src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
