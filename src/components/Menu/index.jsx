import OutlineButton from "../OulineButton";
import menuBanner from "../../assets/images/menu-banner.svg";

const Menu = () => {
  return (
    <div className="flex flex-row container mx-auto  py-48 gap-32">
      <div className="w-4/12 ">
        <h3 className="font-josefin text-base text-dark border-y inline-block py-1 border-cream">
          Menu
        </h3>
        <h2 className="text-dark text-[40px] font-cormorant font-bold mt-3 mb-5">
          Try Our Special Offers
        </h2>
        <p className="text-xl font-josefin font-normal text-darkCream mb-14">
          Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content making it look
          like readable English.{" "}
        </p>
        <div className="mb-14">
          <img src={menuBanner} alt="" className="" />
        </div>
        <OutlineButton title={"See all dishes"} />
      </div>
      <div className="w-8/12  border-2 border-red-500"></div>
    </div>
  );
};
export default Menu;
