import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/banner.svg";
import bannerCircleIcon from "../../assets/icons/banner-circle.svg";
const Banner = () => {
  return (
    <div className="bg-dark pt-7 relative -z-30">
      <div className="container mx-auto flex flex-row items-center gap-48">
        {/* Left */}
        <div className="w-full  text-white">
          <h1 className="font-cormorant text font-bold text-8xl">
            Welcome to Restaurantate
          </h1>
          <p className="mt-8 mb-11 text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            vitae veniam mollitia odit aperiam, enim provident doloremque
            similique, sunt voluptas dicta exercitationem tempore eius quo illum
            distinctio obcaecati? Placeat, quo!
          </p>
          <Link to="menu">
            <button
              to={"/menu"}
              className=" font-josefin text-xl p-5 border border-cream  text-white"
            >
              View Menus
            </button>
          </Link>
        </div>
        {/* Right */}
        <div className="w-full  relative -bottom-28">
          <div className="absolute -right-28 -top-10 -z-20">
            <img src={bannerCircleIcon} alt="" className="" />
          </div>
          <div className="bg-lightDark p-7 flex justify-center rounded-t-full relative -z-10">
            <img
              src={bannerImage}
              alt=""
              className="rounded-t-full relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
