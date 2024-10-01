/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const Testimonial = ({ name, comment, img, designation }) => {
  return (
    <div className="max-w-[815px]   text-white text-center mx-auto">
      <img src="/images/qutation.png" alt="" className="mx-auto mt-10" />
      <p className="font-cormorant italic text-2xl text-center my-9">
        {comment}
      </p>
      <div className="relative text-center w-max mx-auto">
        <img src="/images/icon-cotte.png" alt="" className="absolute" />
        <img src={img} alt="" className="mx-auto" />
      </div>
      <div className="mt-5">
        <h3 className="font-cormorant text-3xl font-bold">{name}</h3>
        <p className="font-josefin text-xl text-cream mt-3">{designation}</p>
      </div>
    </div>
  );
};
export default Testimonial;
