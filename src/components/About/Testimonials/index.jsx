import { testimonialData } from "../../../constant/home.constant";
import Testimonial from "./Testimonial";
import Slider from "react-slick";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="bg-dark py-28">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="w-full  lg:text-left flex flex-col items-center text-center ">
          <h3 className="font-josefin mx-auto text-center text-base uppercase text-white border-y inline-block py-0.5 lg:py-1 border-cream ">
            Testimonial
          </h3>
          <h2 className="text-white text-3xl text-center lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
            What our clients say
          </h2>
        </div>
        {/* Testomonial Slider container */}
        <Slider {...settings}>
          {testimonialData.map((item) => (
            <Testimonial key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};
export default Testimonials;
