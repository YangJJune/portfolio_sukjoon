import GateImage from "../assets/Gate_Img.jpg";
const Gate = () => {
  return (
    <div className="relative h-[600px] aspect-[3/4] ml-[71px]">
      <img src={GateImage} className="w-full h-full object-contain" />
      <div className="absolute inset-0 flex flex-col items-start justify-end text-white text-xl font-bold bg-black/50 pl-[49px] pb-[69px]">
        <p className="font-extrabold text-[50px]">양석준</p>
        <p className="font-heavy text-[25px] text-right ">
          기획, 영업, 백엔드 다 뛰어본
          <br />
          프론트엔드 개발자
        </p>
      </div>
    </div>
  );
};

export default Gate;
