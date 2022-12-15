import { atom } from "recoil";

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
});
