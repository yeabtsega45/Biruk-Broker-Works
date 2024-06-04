import React from "react";
import { useNavigate } from "react-router-dom";
import contentData from "../Utils/contentData";
import ContentCard from "../Components/ContentCard";
import "./Contents.css";

function Contents() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <div className="contents-container">
      <div className="contents-section">
        <h1 className="contents-title">Our Contents</h1>
        <hr className="contents-divider" />

        <div className="contents-grid">
          {contentData.map((content, index) => (
            <ContentCard
              key={index}
              image={content.image}
              title={content.title}
              description={content.description}
              onClick={() => handleClick(content.navigateTo)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contents;
