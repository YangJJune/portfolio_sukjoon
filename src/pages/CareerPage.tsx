import CareerCard from "../components/CareerCard";
import UnifestCareer from "../assets/Unifest_Career.png";
import SpaceCareer from "../assets/Space_Career.png";
import ETCCareer from "../assets/ETC_Career.png";
const CareerPage = () => {
  return (
    <div className="flex-1 flex p-8 h-full">
      <CareerCard image={UnifestCareer} />
      <CareerCard image={SpaceCareer} />
      <CareerCard image={ETCCareer} />
    </div>
  );
};

export default CareerPage;
