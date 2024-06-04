import React from "react";

function ContentCard({ image, title, description, onClick }) {
  return (
    <div className="content-item" onClick={onClick}>
      <div className="content-image">
        <img src={image} alt={title} />
      </div>
      <h2 className="content-title">{title}</h2>
      <p className="content-description">{description}</p>
      <button className="content-button">See More</button>
    </div>
  );
}

export default ContentCard;
