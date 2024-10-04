import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";

const TopFooter = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <p className="font-josefin text-[22px] text-white underline">
        Instagram Feed
      </p>
      <div className="max-w-[300px]">
        <img src="https://i.ibb.co.com/HKW3pdx/Logo.png" alt="" className="" />
      </div>
      <div className="flex flex-row items-center text-2xl text-white gap-5">
        <FaFacebook />
        <FaInstagram />
        <FaTwitter />
        <FaPinterest />
      </div>
    </div>
  );
};
export default TopFooter;
