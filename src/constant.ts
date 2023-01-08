import partyIcon from "./assets/community/chip/party.png";
import questionIcon from "./assets/community/chip/question.png";
import recommendIcon from "./assets/community/chip/recommend.png";

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
