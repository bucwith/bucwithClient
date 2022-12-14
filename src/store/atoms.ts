import { atom } from "recoil";

export const userDataAtom = atom({
  key: "userData", // unique ID (with respect to other atoms/selectors)
  default: { nickname: "", id: "" }, // default value (aka initial value)
});

export const tokenAtom = atom({
  key: "token",
  default: "",
});
