import partyIcon from "./assets/community/chip/party.png";
import questionIcon from "./assets/community/chip/question.png";
import recommendIcon from "./assets/community/chip/recommend.png";
import blue_comet from "./assets/main_icons/blue_comet.png";
import blue_star from "./assets/main_icons/blue_star.png";
import blue_planet from "./assets/main_icons/blue_planet.png";
import blue_rocket from "./assets/main_icons/blue_rocket.png";
import pink_comet from "./assets/main_icons/pink_comet.png";
import pink_star from "./assets/main_icons/pink_star.png";
import pink_planet from "./assets/main_icons/pink_planet.png";
import pink_rocket from "./assets/main_icons/pink_rocket.png";
import yellow_comet from "./assets/main_icons/yellow_comet.png";
import yellow_star from "./assets/main_icons/yellow_star.png";
import yellow_planet from "./assets/main_icons/yellow_planet.png";
import yellow_rocket from "./assets/main_icons/yellow_rocket.png";

export const BASE_URL = "https://bucwiths.shop:8443";
export const TOKEN =
  "eyJ0eXBlIjoiand0IiwiYWxnIjoiSFMyNTYifQ.eyJ1c2VySWQiOjMsIm5hbWUiOiLquYDrr7zsobAiLCJpYXQiOjE2NzEwMzQ2MjksImV4cCI6MTY3MTAzNTIyOX0.eN3_0GvQwaMwJ8kxl3Jnmk6S8s-kUDH8qlGr-bXKJJ4";

export const CHEER_STAR_LOCATION = [
  { top: 217, left: 172 },
  { top: 277, right: 32 },
  { top: 420, right: 22 },
  { top: 527, right: 61 },
  { top: 552, left: 138 },
  { top: 465, left: 35 },
  { top: 290, left: 35 },
];

export const TEXTAREA_HEIGHT = 164;

export const COMMUNITY_POST_CHIP = {
  party: { text: "벅윗 파티원 모집", icon: partyIcon, color: "#306A83" },
  question: { text: "질문있어요", icon: questionIcon, color: "#479E74" },
  recommend: { text: "추천해주세요", icon: recommendIcon, color: "#475A9E" },
};

export const CATEGORY_CHIP = [
  "영화",
  "여행",
  "대학합격",
  "미용/뷰티",
  "연애",
  "자격증",
  "공부",
  "다이어트",
  "음식",
  "동물",
  "게임",
  "IT",
  "돈",
  "건강",
  "운동",
  "휴식/힐링",
  "외국어",
  "심리/마음",
  "운전",
  "취미",
  "기타",
];

export const ICON_COLOR = {
  icon_color: ["#FF68DE", "#F5E148", "#007BED"],
  bg_color: {"BG001": "#88BF9E","BG002": "#E06C6C","BG003": "#175F5A", "BG004": "#172C5F", "BG005": "#000000", "BG006": "#602E9E"}
}

export const ICON_CODE = {
  "CS004P": pink_comet, "CS001P": pink_star, "CS003P": pink_planet, "CS002P": pink_rocket,
  "CS004Y": yellow_comet, "CS001Y": yellow_star, "CS003Y": yellow_planet, "CS002Y": yellow_rocket,
  "CS004B": blue_comet, "CS001B": blue_star, "CS003B": blue_planet, "CS002B": blue_rocket
};
