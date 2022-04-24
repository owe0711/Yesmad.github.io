//bgImage
const images = ["0.jpg", "1.jpg", "2.jpg"];

const rdmImage = images[Math.floor(Math.random() * images.length)];

const image = document.createElement("img");
image.classList.add("bg");
image.src = `img/${rdmImage}`;
document.body.appendChild(image);
