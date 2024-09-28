import Button from "../../shared/Button";
import Input from "../Input";

// import reservationBg from "../../assets/images/reservation-form-background.jpg";
const Reservation = () => {
  return (
    <div
      className={`bg-reservation-image py-20 px-5 lg:px-0 lg:py-48 mt-16 lg:mt-48 `}
    >
      <form
        action=""
        className="max-w-5xl bg-dark/85 lg:bg-dark/95 py-16 lg:py-32 px-5 lg:px-36 mx-auto  w-full"
      >
        {/* Section Heading */}
        <div className="text-center">
          <h3 className="font-josefin text-base text-white border-y inline-block py-0.5 lg:py-1 border-cream">
            Reservation
          </h3>
          <h2 className="text-white text-3xl lg:text-[40px] font-cormorant font-bold mt-3 mb-5">
            Book your table now
          </h2>
        </div>
        {/* Input Field container lg:px-5 */}
        <div className="grid grid-cols-12 gap-5 lg:gap-7">
          <Input
            className={"col-span-12 lg:col-span-6"}
            placeholder={"Name"}
            type={"text"}
          />
          <Input
            className={"col-span-12 lg:col-span-6"}
            placeholder={"Email"}
            type={"email"}
          />
          <Input
            className={"col-span-12 lg:col-span-4"}
            placeholder={"Person"}
            type={"number"}
          />
          <Input
            className={"col-span-12 lg:col-span-4 !text-black invert "}
            placeholder={"Timing"}
            type={"time"}
          />
          <Input
            className={"col-span-12 lg:col-span-4 !text-black invert "}
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
