import React from "react";
import "./About.css";
import TeamMemberCard from "../Components/TeamMemberCard";

function About() {
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Our Website</h1>
        <p>
          Welcome to Biruk Broker Works, the ultimate solution for all your
          property needs. Whether you're looking to buy, sell, or rent
          properties, we provide a seamless and efficient experience tailored to
          your requirements.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to simplify the property process by connecting buyers,
          sellers, and renters through a user-friendly platform. We aim to
          provide the best listings, tools, and resources to help you make
          informed decisions.
        </p>
        <h2>Features</h2>
        <ul>
          <li>Extensive Property Listings</li>
          <li>User-Friendly Interface</li>
          <li>Broker Contacts</li>
        </ul>
        <h2>Meet the Team</h2>
        <div className="team-container">
          <TeamMemberCard
            photo="https://via.placeholder.com/100"
            name="Biruk Sisay"
            role="Owner"
          />
          <p>
            Our team consists of experienced professionals in the property and
            technology sectors. We are dedicated to providing top-notch service
            and continuously improving our platform to meet your needs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
