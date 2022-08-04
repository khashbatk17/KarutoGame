export const images = [];

let number = 0,
  num = 0;
for (let i = 0; i < 100; i++) {
  number++;
  if (number < 10) {
    num = "00" + number;
  } else if (number < 100 && number > 9) {
    num = "0" + number;
  } else {
    num = number;
  }
  images.push("https://www.karuta.org/images/fuda_original/" + num + ".png");
}
