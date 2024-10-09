// document.querySelectorAll("button")[1].addEventListener("click" , onclick);

// we can simply write the fucntion inside this also known as anoymons fucntion:
// document.querySelectorAll("button")[6].addEventListener("click" , function(){
//     alert("I got clicked inside the event lister");
// });

// function onclick(){
//     alert("I got clicked");
// }


// for click
var length_ = document.querySelectorAll(".drum").length;

for (var i = 0; i < length_; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var button_innnerhtml = this.innerHTML;

    click(button_innnerhtml);
    add_animation(button_innnerhtml);
  });
}


// for key press
document.addEventListener("keydown", function (event) {
  click(event.key);
  add_animation(event.key);
});



// function for sound
function click(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
  }
}

function add_animation(current_key){
  var active_button = document.querySelector('.' + current_key);
  active_button.classList.add('pressed');
  setTimeout(function(){
    active_button.classList.remove('pressed');
    }, 100);
}