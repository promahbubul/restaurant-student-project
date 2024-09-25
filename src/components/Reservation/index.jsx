import Button from "../Button";
import Input from "../Input";

// import reservationBg from "../../assets/images/reservation-form-background.jpg";
const Reservation = () => {
  return (
    <div className={`bg-reservation-image py-48 mt-48 `}>
      <form
        action=""
        className="max-w-5xl bg-dark/95 py-32 px-5 md:px-36 mx-auto  w-full"
      >
        {/* Section Heading */}
        <div className="text-center">
          <h3 className="font-josefin text-base text-white border-y inline-block py-1 border-cream">
            Reservation
          </h3>
          <h2 className="text-white text-[40px] font-cormorant font-bold mt-3 mb-5">
            Book your table now
          </h2>
        </div>
        {/* Input Field Container */}
        <div className="grid grid-cols-12 gap-5 md:gap-7">
          <Input
            className={"col-span-12 md:col-span-6"}
            placeholder={"Name"}
            type={"text"}
          />
          <Input
            className={"col-span-12 md:col-span-6"}
            placeholder={"Email"}
            type={"email"}
          />
          <Input
            className={"col-span-12 md:col-span-4"}
            placeholder={"Person"}
            type={"number"}
          />
          <Input
            className={"col-span-12 md:col-span-4 !text-black invert "}
            placeholder={"Timing"}
            type={"time"}
          />
          <Input
            className={"col-span-12 md:col-span-4 !text-black invert "}
            placeholder={"Date"}
            type={"date"}
          />
        </div>
        <div className="text-center mt-8">
          <Button title={"Book a Table"} />
        </div>
      </form>
    </div>
  );
};
export default Reservation;
