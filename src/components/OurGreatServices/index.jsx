import ServiceCard from "./ServiceCard";
import calenderIcon from "../../assets/icons/services/calender-servce.png";
import listIcon from "../../assets/icons/services/list-service.png";
import bakeIcon from "../../assets/icons/services/byke-service.png";

const servicesList = [
  { id: 1, title: "Opened 24/7", img: calenderIcon },
  { id: 2, title: "Special Menus", img: listIcon },
  { id: 3, title: "Home Delivery", img: bakeIcon },
];

const OurGreatServices = () => {
  return (
    <div className="bg-dark py-40 mt-40">
      <div className="container mx-auto flex flex-col p-5 md:p-0 md:flex-row items-center justify-between gap-20">
        {/* Section Heading */}
        <div className=" w-full md:w-4/12">
          <h3 className="font-josefin text-base text-white border-y inline-block py-1 border-cream">
            What we offer
          </h3>
          <h2 className="text-white text-[40px] font-cormorant font-bold mt-3 mb-5">
            Our Great Services
          </h2>
          <p className="text-xl font-josefin font-normal text-white mb-14">
            Lorem Ipsum is that it has a more-or-less normal distribution
            content making it look like readable English.
          </p>
        </div>
        {/* Information container */}
        <div className=" gap-10 w-full md:w-8/12 flex flex-col md:flex-row items-center">
          {servicesList.map((item) => (
            <ServiceCard key={item.id} img={item.img} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default OurGreatServices;
