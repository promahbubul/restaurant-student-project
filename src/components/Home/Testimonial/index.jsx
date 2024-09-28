import { testimonialData } from "../../../constant/home.constant";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,

    // autoplay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg-dark">
      <div className="container lg:px-5 p-5 lg:p-0 mx-auto py-14  lg:py-24 gap-32">
        {/* Section Heading */}
        <div className="w-full text-center lg:text-left ">
          <h3 className="font-josefin text-base text-white border-y inline-block py-0.5 lg:py-1 border-cream">
            Testimonial
          </h3>
          <h2 className="text-white text-3xl lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
            What our clients say
          </h2>
          <p className="text-lg lg:text-xl font-josefin font-normal text-white mb-9 lg:mb-14">
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>
        {/* Carousel container lg:px-5 */}
        <div className="slider-container lg:px-5     ">
          <Slider {...settings}>
            {testimonialData.map((item) => (
              <div
                key={item.id}
                className="bg-dark p-2 lg:pl-10 lg:-translate-x-10 block"
              >
                <TestimonialCard
                  comment={item.comment}
                  country={item.country}
                  img={item.img}
                  name={item.name}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
