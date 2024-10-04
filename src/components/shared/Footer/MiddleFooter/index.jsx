const MiddleFooter = () => {
  return (
    <div className="mt-14 flex flex-row justify-between items-start">
      {/* Left */}
      <div className="w-3/12">
        <h3 className="font-josefin text-base text-white border-y inline-block py-0.5 lg:py-1 border-cream">
          Contact
        </h3>
        <div className=" text-white text-xl font-josefin mt-8">
          <p className="">5 Rue Dalou, 75015 Paris</p>
          <p className="">
            <span className="text-cream">Call</span> - +33 156 78 89 56
          </p>
          <p className="text-cream">5 Rue Dalou, 75015 Paris</p>
        </div>
      </div>
      {/* Middle */}
      <div className="max-w-[512px] w-full mx-auto ">
        <p className="text-white mx-auto text-center text-xl font-josefin max-w-[306px]">
          Join our mailing list for updates, Get news & offers events.
        </p>
        <form className="mt-8  flex flex-row w-full">
          <input
            type="email"
            name="email"
            className="p-5 text-[22px] font-josefin text-white border placeholder:text-white w-full border-[#858585] bg-transparent"
            placeholder="Email"
          />
          <button className="text-[22px] font-josefin bg-white text-dark py-5 px-16">
            Subscribe
          </button>
        </form>
      </div>
      {/* Right */}
      <div className="w-3/12 flex items-end flex-col ">
        <h3 className="font-josefin  text-base text-white border-y inline-block py-0.5 lg:py-1 border-cream">
          Working Hours
        </h3>
        <div className=" text-white text-xl flex flex-col items-end font-josefin mt-8">
          <p className="">
            <span className="text-cream">Mon – Fri:</span> 7.00am – 6.00pm
          </p>
          <p className="">
            <span className="text-cream">Sat:</span>
            7.00am – 6.00pm
          </p>
          <p className="">
            <span className="text-cream">Sun:</span> 8.00am – 6.00pm
          </p>
        </div>
      </div>
    </div>
  );
};
export default MiddleFooter;
