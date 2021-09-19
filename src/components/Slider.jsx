import React, { useRef } from "react";
import TinySlider from "tiny-slider-react";
import { categories } from "./categories";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import {
  Container,
  SlideContainer,
  Tag,
  BtnContainer,
  SlideBtn,
  Separator,
} from "./style/slider.style";

const Slider = () => {
  const ts = useRef(null);

  const onGoTo = (dir) => {
    ts.current.slider.goTo(dir);
  };

  const settings = {
    nav: false,
    mouseDrag: true,
    controls: false,
    autoWidth: true,
    loop: false,
    speed: 100,
    gutter: 20,
  };

  return (
    <Container className="container-md">
      {/* slider */}
      <SlideContainer className="slide-container">
        <TinySlider ref={ts} settings={settings}>
          {categories.map((category) => (
            <Tag className="tag" key={category.id}>
              {category.title}{" "}
            </Tag>
          ))}
        </TinySlider>
      </SlideContainer>
      {/* slider btn */}
      <BtnContainer className="d-none d-md-block btn-container">
        <SlideBtn
          className="slide-btn"
          type="button"
          onClick={() => onGoTo("prev")}
        >
          <BsChevronLeft />
        </SlideBtn>
        <Separator className="saparator"></Separator>
        <SlideBtn
          className="slide-btn"
          type="button"
          onClick={() => onGoTo("next")}
        >
          <BsChevronRight />
        </SlideBtn>
      </BtnContainer>
    </Container>
  );
};

export default Slider;
