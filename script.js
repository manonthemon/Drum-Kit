
//Function to play sound on key press
function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //Finds audio element with the keyCode of the pressed button
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //Finds key with the keyCode of the pressed button
  if (!audio) return; //If no audio element found, stop the function
  audio.currentTime = 0; //Resets the audio to the beginning each time key is pressed
  audio.play();//plays audio
  key.classList.add("playing"); //changes the look of pressed key
}

//Function to remove visual form pressed key
function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing"); // once the transition is finished, it removed css class.
}

//assigns all keys to a variable
const keys = document.querySelectorAll(".key");
//runs remove transition function on each pressed key
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
window.addEventListener("keydown" , playSound);