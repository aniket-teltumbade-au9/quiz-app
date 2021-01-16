import * as female from "../img/profiles/female";
import * as male from "../img/profiles/male";

export const imageGenerator = (user) => {
  const rand = parseInt(0 + Math.random() * 4);
  const fimg = [female.a, female.b, female.c, female.d];
  const mimg = [male.a, male.b, male.c, male.d];
  if (user.gender === "male") {
    return mimg[rand];
  } else {
    return fimg[rand];
  }
};

export const highestFinder = (array) => {
  array.sort(function (a, b) {
    return b.points - a.points;
  });
  return array;
};

export const positionHandler = (index) => {
  let position = "1st";
  if (index === 2) {
    position = "2nd";
  } else if (index === 3) {
    position = "3rd";
  } else if (index > 3) {
    position = `${index}th`;
  }
  return position;
};
