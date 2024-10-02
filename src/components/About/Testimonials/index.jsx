import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { testimonialData } from "../../../constant/home.constant";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import { useRef } from "react";

const Testimonials = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="bg-dark py-28">
      <div className="container mx-auto relative">
        {/* Section Heading */}
        <div className="w-full  lg:text-left flex flex-col items-center text-center ">
          <h3 className="font-josefin mx-auto text-center text-base uppercase text-white border-y inline-block py-0.5 lg:py-1 border-cream ">
            Testimonial
          </h3>
          <h2 className="text-white text-3xl text-center lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
            What our clients say
          </h2>
        </div>
        {/*   Slder Button */}
        <div className="flex flex-row justify-between   w-full top-1/2 -translate-y-10 absolute z-30 ">
          <button
            onClick={previous}
            className="text-5xl font-light  text-cream"
          >
            <IoIosArrowBack />
          </button>
          <button onClick={next} className="text-5xl font-light text-cream">
            <IoIosArrowForward />
          </button>
        </div>
        {/* Testomonial Slider container */}
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {testimonialData.map((item) => (
            <Testimonial key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
