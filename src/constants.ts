import type Badge from "./interfaces/Badge";

import Img1 from "./assets/carousel/Unifest_transp.jpg";
import Img2 from "./assets/carousel/Unifest_transp2.jpg";
import Img3 from "./assets/carousel/Unifest_korea.jpg";
import Img4 from "./assets/carousel/Unifest.png";
import Img5 from "./assets/carousel/Space.jpg";
import Img6 from "./assets/carousel/KUIT.jpg";
import Img7 from "./assets/carousel/KUIT2.jpg";
import Img8 from "./assets/carousel/Kelowna.jpg";
import Img9 from "./assets/carousel/Univ1.jpg";
import Img10 from "./assets/carousel/Univ3.jpg";

export const CareerCarouselList = [
  { src: Img1, text: "유니페스 한국교통대학교 홍보 부스 2024.11" },
  { src: Img2, text: "유니페스 한국교통대학교 홍보 부스 2024.11" },
  { src: Img3, text: "유니페스 고려대학교 실서비스 2025.05" },
  { src: Img4, text: "건국투데이 유니페스 인터뷰 2024.06" },
  { src: Img5, text: "KUIT 3기 데모데이 최우수상 Space 2024.08" },
  { src: Img6, text: "KUIT 5기 협업 세션 진행 2025.04" },
  { src: Img7, text: "KUmmIT 해커톤 운영진 참여 2025.07" },
  { src: Img8, text: "Vanwest Kelowna ESL 수료 2024.08" },
  { src: Img9, text: "구름톤 유니브 3기 프론트엔드 2024.11" },
  { src: Img10, text: "구름톤 유니브 3기 연합 세션 발표 2024.11" },
];
export const TopMenuList = ["About Me", "Career", "Experience", "Github"];

export const CardTitleList = [
  "Framework",
  "Languages",
  "Dev",
  "API / Library",
  "Co-op",
];

//TODO : FAST API, React Query, Slack 추가
//TODO : 이거
const ReactBadge: Badge = {
  bgColor: "#5bc9e6",
  content: "React",
};

const AndroidBadge: Badge = {
  bgColor: "#3ac97a",
  content: "Android",
};

const TSBadge: Badge = {
  bgColor: "#1d5288",
  content: "TypeScript",
};

const JSBadge: Badge = {
  bgColor: "#e3cd1f",
  content: "JavaScript",
};

const PythonBadge: Badge = {
  bgColor: "#3772a6",
  content: "Python",
};

const KotlinBadge: Badge = {
  bgColor: "#8876f2",
  content: "Kotlin",
};

const JavaBadge: Badge = {
  bgColor: "#ed7305",
  content: "Java",
};

const StyledCompBadge: Badge = {
  bgColor: "#d57494",
  content: "Styled Components",
};

const TailwindBadge: Badge = {
  bgColor: "#13b2cd",
  content: "Tailwind CSS",
};

const LiveKitBadge: Badge = {
  bgColor: "#f50f0f",
  content: "Livekit",
};

const YouTubeBadge: Badge = {
  bgColor: "#de0303",
  content: "YouTube API",
};

const AxiosBadge: Badge = {
  bgColor: "#5529d2",
  content: "Axios",
};
const NaverBadge: Badge = {
  bgColor: "#06b754",
  content: "Naver Map API",
};

const GithubBadge: Badge = {
  bgColor: "#14181c",
  content: "Github",
};

const GitBadge: Badge = {
  bgColor: "#dd4d32",
  content: "Git",
};

const FCMBadge: Badge = {
  bgColor: "#cc2d05",
  content: "Firebase Cloud Message",
};

const EC2Badge: Badge = {
  bgColor: "#f6b657",
  content: "EC2",
};

const FigmaBadge: Badge = {
  bgColor: "#df4b20",
  content: "Figma",
};

const NotionBadge: Badge = {
  bgColor: "#0e0e0e",
  content: "Notion",
};

const TeamsBadge: Badge = {
  bgColor: "#546fb4",
  content: "Teams",
};

const DiscordBadge: Badge = {
  bgColor: "#546fb4",
  content: "Discord",
};

// const SlackBadge:Badge={
//   bgColor
// }
export const FrameworkCardList: Badge[] = [ReactBadge, AndroidBadge];
export const LanguagesCardList: Badge[] = [
  TSBadge,
  JSBadge,
  PythonBadge,
  KotlinBadge,
  JavaBadge,
];
export const APICardList: Badge[] = [
  StyledCompBadge,
  TailwindBadge,
  LiveKitBadge,
  YouTubeBadge,
  AxiosBadge,
  NaverBadge,
];
export const DevCardList: Badge[] = [GithubBadge, GitBadge, FCMBadge, EC2Badge];
export const CoopCardList: Badge[] = [
  FigmaBadge,
  NotionBadge,
  TeamsBadge,
  DiscordBadge,
];

export const EducationList = [
  { period: "2024.09 ~ 2024.12", title: "구름톤 유니브 3기 프론트엔드" },
  {
    period: "2024.06 ~ 2024.08",
    title: "VanWest College, Kelowna ESL Level 7",
  },
  { period: "2024.03 ~ 2024.08", title: "KUIT 3기 PM 수료" },
  {
    period: "2019.03 ~ 2025.08 (졸업예정)",
    title: "건국대학교 서울캠퍼스 컴퓨터공학부 재학",
  },
  { period: "2016.03 ~ 2019.02", title: "경북 구미시 현일고등학교 졸업" },
];

export const CareerData = [
  {
    year: "2025",
    items: [
      "팀 프로젝트 ‘U-Compass’ PM, BE, Network 담당",
      "팀 프로젝트 ‘MeetDay’ PM, BE 담당",
      "졸업 프로젝트 ‘Pen2Moon’ PM, FE, Design 담당",
      "다이닝코드 서비스 기획자 인턴 (2024.12.26 ~ 2025.02.28)",
    ],
  },
  {
    year: "2024",
    items: [
      "팀 프로젝트 ‘유니페스(Uni-Fest)’ PM, FE 담당",
      "팀 프로젝트 ‘스페이스(Space)’ PM, FE 담당, KUIT 데모데이 최우수상 수상",
      "팀 프로젝트 ‘T-money GO UX 개선’ FE/Design 담당",
      "졸업 프로젝트 ‘펜투문 : 필기체를 포함한 PDF 문서 변환’ PM, FE 담당",
      "팀 프로젝트 ‘빅데이터 기반 대중교통 혼잡도 예측 모델 서비스’ PM 담당",
      "가을 구름톤 2024 ‘YE:Summit’ FE 담당",
      "뤼튼 아이디어톤 ‘학습자료 기반 자동 문제 생성 에듀테크 서비스’ 장려상",
    ],
  },
];

export const CareerData2 = [
  {
    year: "2023",
    items: [
      "팀 프로젝트 ‘Koogle Maps’ PM, FE 담당",
      "팀 프로젝트 ‘MCheaps’, FE 담당",
      "팀 프로젝트 ‘인공지능을 이용한 자동 원단 검사’ PM, FE 담당",
      "개인 프로젝트 ‘CW Clan App’ 제작 1인 개발",
      "개인 프로젝트 ‘CW-CLAN-Ladder Event’ 제작 1인 개발",
    ],
  },
  {
    year: "2021 ~ 2022",
    items: ["제 25 보병사단 무선전송장비 운용병 복무, 병장 만기전역"],
  },
];
export const HighlightTerms = ["PM", "BE", "FE", "Design", "인턴", "Network"];
