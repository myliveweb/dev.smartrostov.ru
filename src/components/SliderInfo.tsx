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
          <img src="/asset/img/slider/1.jpg" alt="" />
        </div>
        <div>
          <img src="/asset/img/slider/2.jpg" alt="" />
        </div>
        <div>
          <img src="/asset/img/slider/3.jpg" alt="" />
        </div>
        <div>
          <img src="/asset/img/slider/4.jpg" alt="" />
        </div>
        <div>
          <img src="/asset/img/slider/5.jpg" alt="" />
        </div>
        <div>
          <img src="/asset/img/slider/6.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}