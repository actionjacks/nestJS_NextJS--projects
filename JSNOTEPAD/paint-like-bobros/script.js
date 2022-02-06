
const closeBTN = document.querySelector("span");
const aside = document.querySelector("aside");
closeBTN.addEventListener("click", () => {
  aside.style.bottom = "-60vh";
});


const canvas = document.querySelector("#draw");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth - 20;
canvas.height = window.innerHeight - 20;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function draw(e) {
  if (!isDrawing) return;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  //start from
  ctx.moveTo(lastX, lastY);
  //go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 15) {
    direction = !direction;
  }
  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}

//script for drawing rating
let timeFlag = true;
const ratings = [
  "Brzydko rysujesz..",
  "Przykro mi, nie masz talentu.",
  "Dość !!",
  "Dobra wyłącz psujesz!.",
  "W rysowaniu nic nie osiągniesz…",
  "Proszę serdecznie wyłącz aplikację.",
  "Bob Ross płacze jak to widzi : (",
  "Kurde beztalencie z ciebie!!",
  "Może spróbuj szydełkowania?",
  "Może spróbuj gotowania?",
  "Wszystko tylko nie rysowanie!",
  "Strasznie rysujesz.",
  "TRAGEDIA.",
  "Rozpacz!",
  "To jest tak paskudne! ~ Bob Ross",
  "Nawet ja ci nie pomogę ~ Bob Ross",
  "Błąd.",
  "Zostaw to już.",
  "Wróć przewijać FB, nie rysuj!",
  "Nie rysuj już.",
  "Nic z ciebie nie będzie!",
  "Byłem i odzobaczyłem.",
  "Całkiem nieźle jak na kogoś bez talentu.",
  "Strasznie fatalnie rysujesz.",
  "Ja cię nie dam rady nauczyć. ~ Bob Ross",
  "Mówiłem że każdy może rysować, myliłem się. ~ Bob Ross",
  "Z ciebie nie będzie rysownika. ~ Bob Ross",
];
const ratingBox = document.querySelector(".rating");

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  IGiveUMyRating();
});

function IGiveUMyRating() {
  if (timeFlag) {
    timeFlag = !timeFlag;

    ratingBox.classList.remove("opacity");
    setTimeout(() => {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
      const randomRating = Math.floor(Math.random() * ratings.length);
      console.log(ratings[randomRating]);

      ratingBox.innerHTML = ratings[randomRating];
      timeFlag = !timeFlag;
      setTimeout(() => {
        ratingBox.classList.add("opacity");
      }, 2000);
    }, 2000);
  }
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
