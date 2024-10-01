/* eslint-disable react/prop-types */
const Card = ({ img, name, designation }) => {
  return (
    <div className=" text-center  w-full">
      <img src={img} alt="name" className="h-[380px] w-full  object-cover" />
      <h3 className="mt-7 text-dark font-cormorant font-bold text-3xl">
        {name}
      </h3>
      <p className="mt-2 text-xl font-josefin text-darkCream">{designation}</p>
    </div>
  );
};
export default Card;
