const voteButton = () => {
  const lights = document.getElementsByClassName("light");
  const dot = document.getElementsByClassName("dot")[0];
  const audio = document.getElementById("beep");
  navigator.vibrate(1000);

  // Turn on selected light & dot
  lights[1].classList.add("light-on");
  dot.classList.add("dot-light");

  audio.currentTime = 0; // Restart sound
  audio.play();

  setTimeout(() => {
    audio.pause();
    audio.currentTime = 0;

    // Turn off lights again
    lights[1].classList.remove("light-on");
    dot.classList.remove("dot-light");

    document.getElementsByClassName("not-confirm")[0].classList.add("confirm");
    document
      .getElementsByClassName("confirmation-not")[0]
      .classList.add("confirmation");
    document
      .getElementsByClassName("not-checked")[0]
      .classList.add("checkmark");
    document
      .getElementsByClassName("show-vikasanam")[0]
      .classList.add("vikasanam");
  }, 1000);
};
