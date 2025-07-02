import { useState } from "react";

const ArticleCard = ({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: string;
}) => {
  const [isHovered, setIsHovered] = useState<Boolean>(false);
  return (
    <div>
      <div
        className="relative w-[500px] h-full min-h-[240px] cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {isHovered ? (
          <div className="relative w-full h-full overflow-hidden group">
            <img
              src={image}
              className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-xl font-bold bg-black/60 text-center pt-4 transition-transform duration-300 ease-in-out group-hover:scale-110">
              <div>
                <p className="font-extrabold text-[50px]">{title}</p>
                <p className="font-heavy text-[25px]">{content}</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <img src={image} className="w-full h-full object-cover" />
          </>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
