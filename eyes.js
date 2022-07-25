const balls = document.getElementsByClassName('ball');
const eyes = document.getElementById('eyes');
let One = 0;
let Creep = 0;

const OneEye = function OneEye() {
  eyes.style.top = "50%";
  One = 1 - One;
  Creep = 0;
  document.getElementById("body").style.background = "#14495e";
  document.getElementById("ball1").style.background = "black";
  document.getElementById("ball2").style.background = "black";
  document.getElementById("ball1").style.height = "80px";
  document.getElementById("ball2").style.height = "80px";
  document.getElementById("eye1").style.height = "120px";
  document.getElementById("eye2").style.height = "120px";
};

const Creepy = function Creepy() {
  Creep = 1 - Creep;
  One = 0;
  document.getElementById("body").style.background = "black";
  document.getElementById("ball1").style.background = "linear-gradient(to right, black, red, black)";
  document.getElementById("ball2").style.background = "linear-gradient(to right, black, red, black)";
  document.getElementById("ball1").style.height = "100px";
  document.getElementById("ball2").style.height = "100px";
  document.getElementById("eye1").style.height = "100px";
  document.getElementById("eye2").style.height = "100px";
};

document.onmousemove = (event) => {
  const x = (event.clientX * 100) / window.innerWidth + '%';
  const y = (event.clientY * 100) / window.innerHeight + '%';
  if (One === 1) {
    if (event.clientX > window.innerWidth / 2) {
      balls[1].style.left = x;
      balls[1].style.top = y;
      balls[1].transform = 'translate(-' + x + ',-' + y + ')';
    }
    else {
      balls[0].style.left = x;
      balls[0].style.top = y;
      balls[0].transform = 'translate(-' + x + ',-' + y + ')';
    }
  }
  else {
    for (let i = 0; i < 2; i++) {
      balls[i].style.left = x;
      balls[i].style.top = y;
      balls[i].transform = 'translate(-' + x + ',-' + y + ')';
    }
  }
  if (Creep === 1) {
    /* eyes.style.position = "relative"; */
    /* eyes.style.width = "50%"; */
    setTimeout(() => {
      eyes.style.top = ((event.clientY +100) * 100) / window.innerHeight + '%';
    }, 200);
  }
};
