import React from "react";
import "./Services.css";
import treatment from "./pexels-ivan-samkov-4989175.jpg";
import equipment from "./pexels-anna-shvets-3844581.jpg";
import staff from "./pexels-pixabay-263337.jpg";

const Services = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", width: "95vw" }}>

      <div className="servicesChildren">
        <div>
          <img
            className="servicePhotos"
            src={treatment}
            alt="A doctor holding medication"
          />
        </div>
        <div style={{ maxWidth: "750px" }}>
          <h3 style={{ color: "#9DAAF2" }}><i style={{ color: "#FF6A3D" }}>Accurate</i> Treatment</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>

      <div className="servicesChildren">
        <div style={{ maxWidth: "750px" }}>
        <h3 style={{ color: "#9DAAF2" }}><i style={{ color: "#FF6A3D" }}>Revolutionary</i> equipment</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        </div>
        <div>
          <img
            className="servicePhotos"
            src={equipment}
            alt="Medical equipment in an operating room"
          />
        </div>
        </div>

        <div className="servicesChildren">
        <div>
          <img
            className="servicePhotos"
            src={staff}
            alt="Doctors operating on a patient."
          />
        </div>
        <div style={{ maxWidth: "750px" }}>
          <h3 style={{ color: "#9DAAF2" }}> <i style={{ color: "#FF6A3D" }}>World Class</i> Staff</h3>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Services;
