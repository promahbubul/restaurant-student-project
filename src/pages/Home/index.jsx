import Banner from "../../components/Home/Banner";
import Blog from "../../components/Home/Blog";
import Menu from "../../components/Home/Menu";
import OurGreatServices from "../../components/Home/OurGreatServices";
import PopularDishes from "../../components/Home/PopularDishes";
import Reservation from "../../components/Home/Reservation";
import SpecialOffer from "../../components/Home/SpecialOffer";
import Story from "../../components/Home/Story";
import Testimonial from "../../components/Home/Testimonial";
import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Story />
      <Menu />
      <Testimonial />
      <SpecialOffer />
      <PopularDishes />
      <OurGreatServices />
      <Blog />
      <Reservation />
      <Footer />
    </div>
  );
};
export default Home;

// project setup [tailwindcss, react router dom]
// color setup
// font family setup
