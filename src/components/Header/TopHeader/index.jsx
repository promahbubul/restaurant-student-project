import logo from "../../../assets/images/Logo.svg";
import { GrCart } from "react-icons/gr";

const TopHeader = () => {
  return (
    <div
      className="py-10 flex flex-row justify-between gap-20 
     border-red-500 items-center font-josefin container mx-auto"
    >
      <div className="w-full  ">
        <p className="p-5 border border-cream inline text-white">
          Call - 987 654 321{" "}
        </p>
      </div>
      <div className="w-full  flex items-center justify-center">
        <img src={logo} className="w-[350px]" />
      </div>
      <div className="w-full  flex flex-row items-center justify-end gap-10">
        <div className="text-white ">
          <GrCart size={30} />
        </div>
        <button className="bg-cream py-5 px-14 text-xl font-medium  text-dark">
          Reservation
        </button>
      </div>
    </div>
  );
};
export default TopHeader;
