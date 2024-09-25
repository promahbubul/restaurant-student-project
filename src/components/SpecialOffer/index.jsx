import bannerImage from "../../assets/special-offer.svg";
import posterImage1 from "../../assets/special-offer-poster-1.svg";
import posterImage2 from "../../assets/special-offer-poster-2.svg";
const SpecialOffer = () => {
  return (
    <div>
      <div className="h-full md:h-[600px]">
        <img src={bannerImage} alt="" className="" />
      </div>
      {/* offer content section */}
      <div className="container mt-16 md:mt-48  p-5 md:p-0  mx-auto">
        {/* Heading */}
        <div className="max-w-[700px]   mx-auto text-center">
          <h3 className="font-josefin text-base text-dark border-y inline-block py-0.5 md:py-1 border-cream">
            OFFER
          </h3>
          <h2 className="text-dark text-3xl md:text-[40px] font-cormorant font-bold mt-3 mb-5">
            Our special Offer dishes
          </h2>
          <p className="text-lg md:text-xl font-josefin font-normal text-darkCream mb-7">
            {`Lorem Ipsum is that it has a more-or-less normal distribution of
            letters, as opposed to using 'Content here, content making.`}
          </p>
        </div>
        {/* Images */}
        <div className="flex flex-col md:flex-row gap-7">
          {/* Image 1 */}
          <div className=" flex-1 h-[400px] border-2 ">
            <img
              src={posterImage1}
              alt=""
              className="object-cover  w-full h-full "
            />
          </div>
          {/* Image 2 */}
          <div className=" flex-1 h-[400px]">
            <img
              src={posterImage2}
              alt=""
              className="object-cover  w-full h-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecialOffer;
