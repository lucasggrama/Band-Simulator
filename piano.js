const keys = document.querySelectorAll(".key"),
  note = document.querySelector(".nowplaying"),
  hints = document.querySelectorAll(".hints");

function playAgain(id) {
  const audio = document.querySelector(`audio[data-key="${id}"]`),
    key = document.querySelector(`.key[data-key="${id}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function playNote(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`),
    key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (!key) return;

  const keyNote = key.getAttribute("data-note");

  key.classList.add("playing");
  note.innerHTML = keyNote;
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

function hintsOn(e, index) {
  e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playNote);

const music =  [
  'C', 'D', 'E', 'F'
];

for(let i = 0; i < music.length; i++){
  playAgain(music[i]);
}
