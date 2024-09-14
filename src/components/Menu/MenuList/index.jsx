import demo from "../../../assets/images/menu-item/item1.svg";
// import demo from "../../../assets/images/menu-banner.svg";

const MenuList = ({ heading, items }) => {
  return (
    <div>
      <h2 className="text-[40px] font-bold font-cormorant text-dark">
        {heading}
      </h2>
      {items.map((item) => (
        <div
          key={item.id}
          className="flex flex-row gap-5 mt-8 items-center justify-between"
        >
          {/* Left */}
          <div className="w-[12%] ">
            <img
              src={item.img}
              alt=""
              className="w-[84px] h-[84px] object-cover rounded-full"
            />
          </div>
          {/* Middle */}
          <div className="w-[80%] ">
            <h3 className="text-3xl font-bold font-cormorant text-dark">
              {item.title}
            </h3>
            <div className="text-darkCream text-xl font-josefin font-normal flex flex-row  items-end ">
              <p className="  w-full"> {item.description}</p>
              <div className="flex flex-row items-center w-full">
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                {/* <div className="w-full border-2 border-dotted"></div> */}
                <hr className="w-full border-t border-t-gray-400 border-dashed " />
                <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
          </div>
          {/* Right */}
          <div className="w-[8%] ">
            <p className="text-3xl font-bold font-cormorant text-dark text-right">
              $ {item.price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuList;
