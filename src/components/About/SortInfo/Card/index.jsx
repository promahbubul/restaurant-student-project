/* eslint-disable react/prop-types */
const Card = ({ img, title, description }) => {
  console.log(description);
  return (
    <div className="text-white flex-col gap text-center border-r last:border-r-0 border-r-[#797E89] p-9">
      <img src={img} alt="" className="mx-auto" />
      <h2 className="mt-5 font-cormorant font-bold text-3xl">{title}</h2>
      <p className={"mt-3 font-josefin text-xl font-normal"}>{description}</p>
      <button className="text-cream text-xl font-normal font-josefin mt-5">See more</button>
    </div>
  );
};
export default Card;
