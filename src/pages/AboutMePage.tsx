import ArticleCard from "../components/ArticleCard";
import Gate from "../components/Gate";
import RightGate from "../components/RightGate";
import TopBar from "../components/TopBar";

import Unifest from "../assets/Unifest.svg";
import Construction from "../assets/25115.jpg";
import KUIT from "../assets/KUIT.svg";
const AboutMePage = () => {
  return (
    <>
      <div className="flex">
        <Gate />
        <RightGate />
      </div>
      <div className="mt-2 flex ml-[71px]">
        <ArticleCard
          title="대표작 유니페스"
          content="대학 축제 올인원, Uni-Fest"
          image={Unifest}
        />
        <ArticleCard
          title="학술동아리 KUIT"
          content="운명적인 동아리와의 만남"
          image={KUIT}
        />
        <ArticleCard title="SJ 실험실" content="공사중!" image={Construction} />
      </div>
    </>
  );
};

export default AboutMePage;
