import { sortInformaitonData } from "../../../constant/about.constant";
import Card from "./Card";

const SortInfo = () => {
  return (
    <div className={` bg-sort-info-bg  pt-14 pb-20`}>
      <div className="container mx-auto flex flex-row ">
        {sortInformaitonData.map((info) => (
          <Card key={info.id} {...info} />
        ))}
      </div>
    </div>
  );
};
export default SortInfo;
