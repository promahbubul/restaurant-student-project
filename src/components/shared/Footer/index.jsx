import BottomFooter from "./BottomFooter";
import MiddleFooter from "./MiddleFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <div className="bg-dark pt-24">
      <div className="container mx-auto">
        <TopFooter />
        <MiddleFooter />
      </div>
      <BottomFooter />
    </div>
  );
};
export default Footer;
