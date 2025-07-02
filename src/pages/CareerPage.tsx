import {
  P_H1,
  P_H2,
  P_Text,
  P_Text_B,
  highlightKeywords,
} from "../components/Typography";
import {
  CareerCarouselList,
  CareerData,
  CareerData2,
  EducationList,
  HighlightTerms,
} from "../constants";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const CareerPage = () => {
  //TODO : 특정 커리어 선택 시 이미지 바로 넘어가기
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay({ delay: 4000 }),
  ]);
  const emblaApiRef = useRef<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (emblaApi) {
      emblaApiRef.current = emblaApi;
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="p-10">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {CareerCarouselList.map(({ src, text }, index) => {
            return (
              <div
                className="embla__slide flex justify-center flex-col"
                key={index}
              >
                <img className="h-[500px] object-contain" src={src}></img>
                <P_Text_B className="text-center">{text}</P_Text_B>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex gap-4 my-4 flex justify-center">
        <button
          className="bg-yellow-500 text-black px-3 py-1 rounded cursor-pointer"
          onClick={() => emblaApiRef.current?.scrollPrev()}
        >
          {"< Prev"}
        </button>
        <button
          className="bg-yellow-500 text-black px-3 py-1 rounded cursor-poimter"
          onClick={() => emblaApiRef.current?.scrollNext()}
        >
          {"Next >"}
        </button>
      </div>
      <P_H1>Education</P_H1>
      <div className="mt-6 mb-2">
        {EducationList.map(({ period, title }, index) => (
          <div key={index} className="flex gap-4 pb-1">
            <P_Text_B className="text-gray-400 whitespace-nowrap">
              {period}
            </P_Text_B>
            <P_Text className="text-white">{title}</P_Text>
          </div>
        ))}
      </div>
      <hr className="my-6 border-gray-600" />
      <P_H1>Career</P_H1>
      {/* <YellowTag>dddd</YellowTag> */}
      <div className="mt-6 space-y-1 flex gap-10">
        {CareerData.map(({ year, items }) => (
          <div key={year}>
            <P_H2>{year}</P_H2>
            <section className="pl-1">
              {items.map((item, index) => (
                <P_Text key={index}>
                  {highlightKeywords(item, HighlightTerms)}
                </P_Text>
              ))}
            </section>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-1 flex gap-10 ">
        {CareerData2.map(({ year, items }) => (
          <div key={year}>
            <P_H2>{year}</P_H2>
            <section className="pl-1">
              {items.map((item, index) => (
                <P_Text key={index}>
                  {highlightKeywords(item, HighlightTerms)}
                </P_Text>
              ))}
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerPage;
