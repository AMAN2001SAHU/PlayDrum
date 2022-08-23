// alert("working");
//
// document.querySelector(".drum").addEventListener("click", function(){
//   alert("I got clicked");
// });
//
// var numberButtons = document.querySelectorAll("button");
// // console.log(numberButtons);
//
// for (var i = 0; i < numberButtons.length; i++) {
//   numberButtons[i] = document.querySelector(numberButtons[i]).addEventListener("click", function(){
//     alert("I got clicked");
//   });
// }



var numberOfDrums = document.querySelectorAll(".drum").length;

// function handleClick() {
//   var audio = new Audio("sounds/ tom-1.mp3")
//   audio.play();
// }

//Below will play sound the mouse click happens

for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

      var buttonInnerHtml = this.innerHTML;

      makeSound(buttonInnerHtml);

      buttonAnimation(buttonInnerHtml);

  });
}

//Below code will check which key is pressed on the keyboard

document.addEventListener("keydown", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);

});


//Creating a function responsible for making sounds

function makeSound(key) {

  switch (key) {
    case "w":
      var audioW = new Audio("sounds/tom-1.mp3");
      audioW.play();
      break;
    case "a":
      var audioA = new Audio("sounds/tom-2.mp3");
      audioA.play();
      break;
    case "s":
      var audioS = new Audio("sounds/tom-3.mp3");
      audioS.play();
      break;
    case "d":
      var audioD = new Audio("sounds/tom-4.mp3");
      audioD.play();
      break;
    case "j":
      var audioJ = new Audio("sounds/snare.mp3");
      audioJ.play();
      break;
    case "k":
      var audioK = new Audio("sounds/crash.mp3");
      audioK.play();
      break;
    case "l":
      var audioL = new Audio("sounds/kick-bass.mp3");
      audioL.play();
      break;


    default:
    console.log("Invalid Key");
  }
}

//this function will make the buttons animate

function buttonAnimation (currentKey) {

  let activeButton = document.querySelector("."+ currentKey)

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
