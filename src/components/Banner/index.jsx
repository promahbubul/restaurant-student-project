import { Link } from "react-router-dom";
import bannerImage from "../../assets/images/banner.svg";
const Banner = () => {
  return (
    <div className="bg-dark pt-7 ">
      <div className="container mx-auto flex p-5 md:p-0 flex-col-reverse md:flex-row items-center gap-10 md:gap-48">
        {/* Left */}
        <div className="w-full  text-white">
          <h1 className="font-cormorant text-center md:text-left font-bold text-4xl md:text-8xl">
            Welcome to Restaurantate
          </h1>
          <p className="mt-8 mb-11 text-lg  text-center md:text-left md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            vitae veniam mollitia odit aperiam, enim provident doloremque
            similique, sunt voluptas dicta exercitationem tempore eius quo illum
            distinctio obcaecati? Placeat, quo!
          </p>
          <Link to="/menu">
            <button className=" mx-auto  block w-full md:w-auto md:inline-block font-josefin text-lg md:text-xl py-3 md:p-5 border border-cream  text-white">
              View Menus
            </button>
          </Link>
        </div>
        {/* Right */}
        <div className="w-full   ">
          <div className="md:translate-y-32">
            <img src={bannerImage} alt="" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
