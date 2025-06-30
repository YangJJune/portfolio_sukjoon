import type Badge from "./interfaces/Badge";

export const TopMenuList = ["About Me", "Career", "Experience", "Github"];

export const CardTitleList = [
  "Framework",
  "Languages",
  "Dev",
  "API / Library",
  "Co-op",
];

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
