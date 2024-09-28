import ServiceCard from "./ServiceCard";
import calenderIcon from "../../../assets/icons/services/calender-servce.png";
import listIcon from "../../../assets/icons/services/list-service.png";
import bakeIcon from "../../../assets/icons/services/byke-service.png";

const servicesList = [
  { id: 1, title: "Opened 24/7", img: calenderIcon },
  { id: 2, title: "Special Menus", img: listIcon },
  { id: 3, title: "Home Delivery", img: bakeIcon },
];

const OurGreatServices = () => {
  return (
    <div className="bg-dark py-20 lg:py-40 mt-16 lg:mt-36">
      <div className="container lg:px-5 mx-auto flex flex-col p-5 lg:p-0 lg:flex-row items-center justify-between gap-8 lg:gap-20">
        {/* Section Heading */}
        <div className=" text-center lg:text-left w-full lg:w-4/12 ">
          <h3 className="font-josefin text-base text-white border-y inline-block py-0.5 lg:py-1 border-cream">
            What we offer
          </h3>
          <h2 className="text-white text-3xl lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
            Our Great Services
          </h2>
          <p className="text-lg lg:text-xl font-josefin font-normal text-white mb-14">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </p>
        </div>
        {/* Information container lg:px-5 */}
        <div className=" gap-5 lg:gap-10 w-full lg:w-8/12 flex flex-col lg:flex-row items-center">
          {servicesList.map((item) => (
            <ServiceCard key={item.id} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurGreatServices;
