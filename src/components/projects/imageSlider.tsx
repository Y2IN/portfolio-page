import React, { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ImageSlider = ({ images }) => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // 이미지가 2장 이상인 경우에만 자동 슬라이딩 설정
    if (images.length > 1) {
      const slider = sliderRef.current;
      let intervalId;

      // 자동 슬라이딩 설정 (3초마다)
      const autoSlide = () => {
        intervalId = setInterval(() => {
          slider.slickNext(); // 다음 슬라이드로 이동
        }, 3000);
      };

      slider.on("beforeChange", (currentSlide, nextSlide) => {
        clearInterval(intervalId); // 이전 인터벌 제거
        autoSlide(); // 새로운 인터벌 시작
      });

      autoSlide(); // 처음 자동 슬라이딩 시작
    }
  }, [images]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    ref: sliderRef, // sliderRef를 사용하여 슬라이더를 컨트롤
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default ImageSlider;
