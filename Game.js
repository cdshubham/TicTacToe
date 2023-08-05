"use strict";
let sign = "X";
let iswin = false;
let btn = document.querySelectorAll(".btn");

let audioTurn = new Audio("ting.mp3");

Array.from(btn).forEach((element) => {
  element.addEventListener("click", function () {
    if (element.innerText == "" && iswin === false) {
      element.innerHTML = sign;
      changeSign();
      checkWin();
      audioTurn.play();
    }
  });
});

function changeSign() {
  sign = sign == "X" ? "O" : "X";
  document.querySelector("#turn").innerHTML = `${sign} Turn`;
}

function checkWin() {
  let btn1 = btn[0].innerHTML;
  let btn2 = btn[1].innerHTML;
  let btn3 = btn[2].innerHTML;
  let btn4 = btn[3].innerHTML;
  let btn5 = btn[4].innerHTML;
  let btn6 = btn[5].innerHTML;
  let btn7 = btn[6].innerHTML;
  let btn8 = btn[7].innerHTML;
  let btn9 = btn[8].innerHTML;

  if (
    (btn1 === "X" && btn2 === "X" && btn3 === "X") ||
    (btn1 === "O" && btn2 === "O" && btn3 === "O")
  )
    win();
  if (
    (btn4 === "X" && btn5 === "X" && btn6 === "X") ||
    (btn4 === "O" && btn5 === "O" && btn6 === "O")
  )
    win();
  if (
    (btn7 === "X" && btn8 === "X" && btn9 === "X") ||
    (btn7 === "O" && btn8 === "O" && btn9 === "O")
  )
    win();
  if (
    (btn1 === "X" && btn5 === "X" && btn9 === "X") ||
    (btn1 === "O" && btn5 === "O" && btn9 === "O")
  )
    win();
  if (
    (btn3 === "X" && btn5 === "X" && btn7 === "X") ||
    (btn3 === "O" && btn5 === "O" && btn7 === "O")
  )
    win();
  if (
    (btn1 === "X" && btn4 === "X" && btn7 === "X") ||
    (btn1 === "O" && btn4 === "O" && btn7 === "O")
  )
    win();
  if (
    (btn2 === "X" && btn5 === "X" && btn8 === "X") ||
    (btn2 === "O" && btn5 === "O" && btn8 === "O")
  )
    win();
  if (
    (btn3 === "X" && btn6 === "X" && btn9 === "X") ||
    (btn3 === "O" && btn6 === "O" && btn9 === "O")
  )
    win();
  if (
    btn1 != "" &&
    btn2 != "" &&
    btn3 != "" &&
    btn4 != "" &&
    btn5 != "" &&
    btn6 != "" &&
    btn7 != "" &&
    btn8 != "" &&
    btn9 != ""
  )
    draw();
}

function win() {
  document.body.style.backgroundImage =
    "url('https://i.pinimg.com/originals/e0/78/e0/e078e0f017b5f194781cba20a7cdd25b.gif')";
  document.getElementById("main").innerHTML = `${sign == "X" ? "O" : "X"} Wins`;
  document.getElementById("main").style.display = "block";
  document.getElementById("turn").style.visibility = "hidden";
  iswin = true;
}

function draw() {
  document.body.style.backgroundImage =
    "url('https://i.pinimg.com/originals/e0/78/e0/e078e0f017b5f194781cba20a7cdd25b.gif')";
  document.getElementById("main").innerHTML = `Draw Match`;
  document.getElementById("main").style.display = "block";
  document.getElementById("turn").style.visibility = "hidden";
  iswin = true;
}

document.getElementById("reset").addEventListener("click", function () {
  console.log("hello");
  let btn1 = (btn[0].innerHTML = "");
  let btn2 = (btn[1].innerHTML = "");
  let btn3 = (btn[2].innerHTML = "");
  let btn4 = (btn[3].innerHTML = "");
  let btn5 = (btn[4].innerHTML = "");
  let btn6 = (btn[5].innerHTML = "");
  let btn7 = (btn[6].innerHTML = "");
  let btn8 = (btn[7].innerHTML = "");
  let btn9 = (btn[8].innerHTML = "");
  document.getElementById("turn").style.visibility = "visible";
  document.getElementById("main").style.display = "none";
  document.body.style.backgroundImage = "";
  iswin = false;
});
