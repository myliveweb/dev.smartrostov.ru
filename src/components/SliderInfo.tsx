import React from "react";
import Slider from "react-slick";

export default function SliderInfo() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const style = {width: '640px', margin: '30px auto'}

  return (
    <div style={style}>
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/640/480?random=1" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/640/480?random=2" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/640/480?random=3" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/640/480?random=4" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/640/480?random=5" alt="" />
        </div>
        <div>
          <img src="https://picsum.photos/640/480?random=6" alt="" />
        </div>
      </Slider>
    </div>
  );
}