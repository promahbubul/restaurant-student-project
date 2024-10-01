import Chef from "../../components/About/Chef";
import Gallery from "../../components/About/Gallery";
import QualityTradition from "../../components/About/QualityTradition";
import SortInfo from "../../components/About/SortInfo";
import Testimonials from "../../components/About/Testimonials";
import Reservation from "../../components/Home/Reservation";
import Header from "../../components/shared/Header";
import PageTitle from "../../components/shared/PageTitle";

const About = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"About Us"} />
      <QualityTradition />
      <SortInfo />
      <Chef />
      <Testimonials />
      <Gallery />
      <Reservation />
    </div>
  );
};
export default About;
