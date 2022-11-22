window.addEventListener(
  "load",
  () => {
    addNavigation();
  },
  false
);

const addNavigation = () => {
  const message1 = document.getElementById("message-1");
  const message2 = document.getElementById("message-2");
  const message3 = document.getElementById("message-3");
  const message4 = document.getElementById("message-4");
  const message5 = document.getElementById("message-5");
  const message6 = document.getElementById("message-6");
  const message7 = document.getElementById("message-7");
  const message8 = document.getElementById("message-8");
  const message9 = document.getElementById("message-9");
  const message10 = document.getElementById("message-10");
  const message11 = document.getElementById("message-11");
  const message12 = document.getElementById("message-12");
  const message13 = document.getElementById("message-13");
  const message14 = document.getElementById("message-14");
  const backgroundVideo = document.getElementById("background-video");
  const backgroundAudio = document.getElementById("background-audio");

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

  message10.addEventListener("click", () => {
    message10.style.display = "none";
    backgroundVideo.classList.add("brightness-125");
    message11.style.display = "flex"; //worried about sun damage
  });

  message11.addEventListener("click", () => {
    message11.style.display = "none";
    message12.style.display = "flex";
  });

  message12.addEventListener("click", () => {
    message12.style.display = "none";
    let myp5 = new p5(s, document.getElementById("p5sketch"));
    message13.style.display = "flex"; //egyptians
  });

  message13.addEventListener("click", () => {
    message13.style.display = "none";
    message14.style.display = "flex";
  });
};
