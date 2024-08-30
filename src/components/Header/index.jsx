import Navbar from "./Navbar";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <div className="bg-dark">
      <div className="container mx-auto ">
        {/* Top Header */}
        <TopHeader />
        {/* Navbar */}
        <Navbar />
      </div>
    </div>
  );
};
export default Header;
