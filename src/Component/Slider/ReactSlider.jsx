import React from "react";
import Slider from "react-slick";
import i1 from "../../images/shop5.jpg";
import i2 from "../../images/shop6.jpg";
const ReactSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="containers">
      <Slider {...settings}>
        <div>
          <div style={{ position: "relative" }}>
            <img style={{ width: "100%" }} src={i1} />
            <div class="centered">
              <button className="buttons">Buy Now</button>
            </div>
          </div>
        </div>
        <div>
          <div style={{ position: "relative" }}>
            <img style={{ width: "100%" }} src={i2} />
            <div class="centered">
              <button className="buttons">Give Away's</button>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ReactSlider;
