window.addEventListener(
  "load",
  () => {
    addNavigation();
  },
  false
);

const addNavigation = () => {
  const message1 = document.querySelector("#message-1");
  const message2 = document.querySelector("#message-2");
  const message3 = document.querySelector("#message-3");
  const message4 = document.querySelector("#message-4");
  const message5 = document.querySelector("#message-5");
  const message6 = document.querySelector("#message-6");
  const message7 = document.querySelector("#message-7");
  const message8 = document.querySelector("#message-8");
  const message9 = document.querySelector("#message-9");
  const message10 = document.querySelector("#message-10");
  const backgroundVideo = document.querySelector("#background-video");
  const backgroundAudio = document.querySelector("#background-audio");

  message1.addEventListener("click", () => {
    message1.style.display = "none";
    message2.style.display = "flex";
  });

  message2.addEventListener("click", () => {
    message2.style.display = "none";
    backgroundVideo.play();
    message3.style.display = "flex"; //breeze
  });

  message3.addEventListener("click", () => {
    message3.style.display = "none";
    backgroundAudio.volume = 0.5;
    backgroundAudio.play();
    message4.style.display = "flex"; //sound
  });

  message4.addEventListener("click", () => {
    message4.style.display = "none";
    backgroundVideo.classList.add("brightness-105");
    message5.style.display = "flex"; //sun
  });

  message5.addEventListener("click", () => {
    message5.style.display = "none";
    message6.style.display = "flex";
  });

  message6.addEventListener("click", () => {
    message6.style.display = "none";
    message7.style.display = "flex";
  });

  message7.addEventListener("click", () => {
    message7.style.display = "none";
    let myp5 = new p5(s, document.getElementById("p5sketch"));
    message8.style.display = "flex";
  });

  message8.addEventListener("click", () => {
    message8.style.display = "none";
    message9.style.display = "flex";
  });

  message9.addEventListener("click", () => {
    message9.style.display = "none";
    message10.style.display = "flex";
  });
};
