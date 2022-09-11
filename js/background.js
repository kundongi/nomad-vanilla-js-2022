const bgImages = ["0.jpg", "1.jpg", "2.jpg", "4.png"];

const chosenImage = bgImages[Math.floor(Math.random() * bgImages.length)];

const body = document.querySelector("body");
body.setAttribute(
  "style",
  `background-image: url("img/${chosenImage}"); background-size: cover;`
);
