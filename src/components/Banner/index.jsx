import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/banner.svg";
const Banner = () => {
  return (
    <div className="bg-dark pt-7 ">
      <div className="container mx-auto flex p-5 md:p-0 flex-col-reverse md:flex-row items-center gap-48">
        {/* Left */}
        <div className="w-full  text-white">
          <h1 className="font-cormorant text font-bold text-5xl md:text-8xl">
            Welcome to Restaurantate
          </h1>
          <p className="mt-8 mb-11 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            vitae veniam mollitia odit aperiam, enim provident doloremque
            similique, sunt voluptas dicta exercitationem tempore eius quo illum
            distinctio obcaecati? Placeat, quo!
          </p>
          <Link to="/menu">
            <button className=" mx-auto  block md:inline-block font-josefin text-xl p-5 border border-cream  text-white">
              View Menus
            </button>
          </Link>
        </div>
        {/* Right */}
        <div className="w-full   ">
          <div className="translate-y-32">
            <img src={bannerImage} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
