const img = document.querySelector('#slider');
let counter = 1;

const slideStart = () => {
    counter !== 5 ? counter++ : counter = 1;
    img.src = `pic${counter}.jpg`;
    console.log(counter);
}

setInterval(slideStart, 1000);