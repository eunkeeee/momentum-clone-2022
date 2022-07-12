const images = ["0.jpg", "1.jpg", "2.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

// JS를 통해 HTML에 img를 생성하자!!!
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);
