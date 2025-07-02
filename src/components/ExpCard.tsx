import { useState } from "react";

const ExpCard = ({ image }: { image: string }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const onEntered = () => {
    setIsHovered(true);
  };
  const onLeft = () => {
    setIsHovered(false);
  };
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex-1 overflow-hidden"
        onMouseEnter={onEntered}
        onMouseLeave={onLeft}
      >
        <img
          src={image}
          className={`w-full h-auto object-contain cursor-pointer transition-transform duration-300 ease-in-out ${
            isHovered ? "scale-104" : "scale-100 grayscale"
          }`}
        />
      </div>
    </div>
  );
};

export default ExpCard;
