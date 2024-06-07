import React from "react";
import "./TeamMemberCard.css";

function TeamMemberCard({ photo, name, role }) {
  return (
    <div className="team-member">
      <img className="member-photo" src={photo} alt={name} />
      <div className="member-name">{name}</div>
      <div className="member-role">{role}</div>
    </div>
  );
}

export default TeamMemberCard;
