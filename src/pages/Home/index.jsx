import Banner from "../../components/Banner";
import Blog from "../../components/Blog";
import Header from "../../components/Header";
import Menu from "../../components/Menu";
import OurGreatServices from "../../components/OurGreatServices";
import PopularDishes from "../../components/PopularDishes";
import Reservation from "../../components/Reservation";
import SpecialOffer from "../../components/SpecialOffer";
import Story from "../../components/Story";
import Testimonial from "../../components/Testimonial";

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
    </div>
  );
};
export default Home;

// project setup [tailwindcss, react router dom]
// color setup
// font family setup
