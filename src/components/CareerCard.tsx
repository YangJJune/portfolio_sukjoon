import ReactIcon from "../assets/react.svg";

const CareerCard = ({ image }: { image: string }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex-1 overflow-auto">
        <img src={image} />
        <p className="text-right">ㅎㅎ</p>
      </div>
    </div>
  );
};

export default CareerCard;
