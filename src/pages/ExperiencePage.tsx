import UnifestCareer from "../assets/Exp1.png";
import SpaceCareer from "../assets/Exp2.png";
import ETCCareer from "../assets/Exp3.png";
import ExpCard from "../components/ExpCard";

const ExperiencePage = () => {
  return (
    <div className="flex-1 flex p-6 h-full gap-2">
      <ExpCard image={UnifestCareer} />
      <ExpCard image={SpaceCareer} />
      <ExpCard image={ETCCareer} />
    </div>
  );
};

export default ExperiencePage;
