import {
  APICardList,
  CardTitleList,
  CoopCardList,
  DevCardList,
  FrameworkCardList,
  LanguagesCardList,
} from "../constants";
import Card from "./Card";
import CardTitle from "./CardTitle";

const RightGate = () => {
  return (
    <div className="ml-6 flex flex-col justify-end mb-2">
      <div className="animate-float-fade-in">
        <p className="font-bold text-[36px] text-white">
          저는 여러 방면에서 활약하는 개발자를 꿈꾸는
          <br />
          프론트엔드 개발자입니다
        </p>
      </div>
      {CardTitleList.map((value, index) => {
        return (
          <>
            <CardTitle key={index}>{value}</CardTitle>
            <div className="flex">
              {index === 0 &&
                FrameworkCardList.map((value, index) => (
                  <Card
                    key={index}
                    content={value.content}
                    bgColor={value.bgColor}
                  />
                ))}
              {index === 1 &&
                LanguagesCardList.map((value, index) => (
                  <Card
                    key={index}
                    content={value.content}
                    bgColor={value.bgColor}
                  />
                ))}
              {index === 2 &&
                DevCardList.map((value, index) => (
                  <Card
                    key={index}
                    content={value.content}
                    bgColor={value.bgColor}
                  />
                ))}
              {index === 3 &&
                APICardList.map((value, index) => (
                  <Card
                    key={index}
                    content={value.content}
                    bgColor={value.bgColor}
                  />
                ))}
              {index === 4 &&
                CoopCardList.map((value, index) => (
                  <Card
                    key={index}
                    content={value.content}
                    bgColor={value.bgColor}
                  />
                ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default RightGate;
