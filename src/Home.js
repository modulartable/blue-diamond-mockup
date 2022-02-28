import React from "react";
import "./Home.css";
import backArrow from './backarrow.png';
import forwardArrow from './forwardarrow.png';

const Home = (props) => {
  let carouselForward = props.carouselForward;
  let carouselBackward = props.carouselBackward;

  return (
    <div id="homeContainer">
      <div id="carouselContainer">
        <div>
          <img
            className="carouselImgs"
            src={props.image}
            alt="Carousel of various images"
          />
        </div>

        <div id="carouselBtns">

<div className="btnBoxes">
<span onClick={() => {carouselBackward()}}>
 <img src={backArrow} id="backBtn" alt="Backwards button"/>
</span>
</div>

<div className="btnBoxes">
<span onClick={() => {carouselForward()}}>
<img id="forwardBtn" src={forwardArrow} alt="Forward button" />
</span>
</div>

    </div>

        </div>

       


        <div>
        <div className="homeChildren" style={{ color: "#9DAAF2" }}>
          <h1>Welcome!</h1>
        </div>
        <div className="homeChildren">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        </div>


        <div className="homeChildren">
          <a href="/services#/services"><button id="viewServBtn">Show Me More</button></a>
        </div>
    </div>
  );
};

export default Home;
