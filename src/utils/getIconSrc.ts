import { pinkIcons, yellowIcons, blueIcons } from "../assets/icons";

const getIconSrc = (iconCode: string) => {
  const color = iconCode.slice(-1);
  const shapeIndex = Number(iconCode.slice(-2, -1)) - 1;

  switch (color) {
    case "B":
      return blueIcons[shapeIndex];

    case "Y":
      return yellowIcons[shapeIndex];

    default:
      return pinkIcons[shapeIndex];
  }
};

export default getIconSrc;
