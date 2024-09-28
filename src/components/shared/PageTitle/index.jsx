const PageTitle = ({ title }) => {
  return (
    <div className="bg-dark py-24 ">
      <div className="container lg:px-5 mx-auto text-center">
        <h1 className="font-cormorant font-bold text-6xl text-white border-y py-1 border-cream inline-block">
          {title}
        </h1>
      </div>
    </div>
  );
};
export default PageTitle;
