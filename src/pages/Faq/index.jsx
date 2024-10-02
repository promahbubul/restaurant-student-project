import QuestionSection from "../../components/Faq";
import Header from "../../components/shared/Header";
import PageTitle from "../../components/shared/PageTitle";

const Faq = () => {
  return (
    <div>
      <Header />
      <PageTitle title={"FAQ"} />
      <QuestionSection />
    </div>
  );
};
export default Faq;
