import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-dark pt-7 ">
      <div className="container  lg:px-5 mx-auto flex p-5 lg:p-0 flex-col-reverse lg:flex-row items-center gap-10 lg:gap-48">
        {/* Left */}
        <div className="w-full  text-white">
          <h1 className="font-cormorant text-center lg:text-left font-bold text-4xl lg:text-8xl">
            Welcome to Restaurantate
          </h1>
          <p className="mt-8 mb-11 text-lg  text-center lg:text-left lg:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque
            vitae veniam mollitia odit aperiam, enim provident doloremque
            similique, sunt voluptas dicta exercitationem tempore eius quo illum
            distinctio obcaecati? Placeat, quo!
          </p>
          <Link to="/menu">
            <button className=" mx-auto  block w-full lg:w-auto lg:inline-block font-josefin text-lg lg:text-xl py-3 lg:p-5 border border-cream  text-white">
              View Menus
            </button>
          </Link>
        </div>
        {/* Right */}
        <div className="w-full   ">
          <div className="translate-x-5 lg:translate-x-0 lg:translate-y-32">
            <img
              src={"https://i.ibb.co.com/yfb9SPH/banner.png"}
              alt=""
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
