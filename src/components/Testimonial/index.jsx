import { testimonialData } from "../../constant/home.constant";
import TestimonialCard from "./TestimonialCard";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    // autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    arrows: false,
  };
  return (
    <div className="bg-dark">
      <div className="container mx-auto  py-24 gap-32">
        {/* Section Heading */}
        <div className="w-full ">
          <h3 className="font-josefin text-base text-white border-y inline-block py-1 border-cream">
            Testimonial
          </h3>
          <h2 className="text-white text-[40px] font-cormorant font-bold mt-3 mb-5">
            What our clients say
          </h2>
          <p className="text-xl font-josefin font-normal text-white mb-14">
            We love to hear from customers, so please leave a comment or say
            hello in an email.
          </p>
        </div>
        {/* Carousel Container */}
        <div className="slider-container     ">
          <Slider {...settings}>
            {testimonialData.map((item) => (
              <div key={item.id} className="pl-10 -translate-x-10 block">
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
