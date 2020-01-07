// Get the video
var video = document.querySelector(".video-background");

// Get the button
var btn = document.querySelector(".video-btn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "PAUSE";
  } else {
    video.pause();
    btn.innerHTML = "PLAY";
  }
}
btn.addEventListener("click", myFunction);