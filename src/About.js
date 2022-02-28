import React from "react";
import "./About.css";
import company from "./pexels-fauxels-3184433.jpg";

const About = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div>
          <h1>We're a <i style={{ color: "#FF6A3D" }}>company</i></h1>
        </div>
      </div>

      <div id="aboutContainer">
        <div className="aboutChildren">
          <img className="aboutPhotos" src={company} alt="Our company" />
        </div>

        <div className="aboutChildren">
          <h4 style={{ color: "#9DAAF2" }}>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.</h4>
          <p style={{ color: "#1A2238" }}> Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
