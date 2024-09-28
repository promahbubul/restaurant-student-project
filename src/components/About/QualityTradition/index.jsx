import bannerImage from "../../../assets/images/about-page/hero-bg.png";
import storySignature from "../../../assets/images/story-signature.svg";
import OutlineButton from "../../shared/OulineButton";
const QualityTradition = () => {
  return (
    <div className="container mx-auto my-36 gap-36 flex flex-col md:flex-row ">
      <div className="w-full ">
        {/* Heading */}
        <div className="max-w-[700px]   mx-auto ">
          <h3 className="font-josefin text-base text-dark border-y inline-block py-0.5 lg:py-1 border-cream">
            About us
          </h3>
          <h2 className="text-dark text-3xl lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
            Quality and Tradition
          </h2>
          <p className="text-lg lg:text-xl font-josefin font-normal text-darkCream mb-7">
            {`Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content gfshere making look like readable English. Many desktop publishing packages.`}
          </p>
        </div>
        <div className="">
          <div className="mt-9 mb-10">
            <h5 className="text-lg lg:text-xl text-dark text-right lg:text-left">
              JOSEFINE
            </h5>
            <div className="flex justify-end lg:justify-start">
              <img src={storySignature} alt="" className="w-28 lg:w-auto" />
            </div>
          </div>
          <OutlineButton title={"See More"} />
        </div>
      </div>
      <div className="w-full ">
        <div className="  ">
          <img src={bannerImage} alt="" className="  object-cover w-full " />
        </div>
      </div>
    </div>
  );
};
export default QualityTradition;
