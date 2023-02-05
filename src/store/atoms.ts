import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const userDataAtom = atom({
  key: "userData",
  default: {
    bgColor: "",
    email: "",
    iconCode: "",
    name: "N",
    registDate: "",
    userId: -1,
  },
  effects_UNSTABLE: [persistAtom],
});

export const isDarkWrapper = atom({
  key: "isDarkWrapper",
  default: false,
});
