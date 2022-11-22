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
  const message15 = document.getElementById("message-15");
  const message16 = document.getElementById("message-16");
  const message17 = document.getElementById("message-17");
  const message18 = document.getElementById("message-18");
  const message19 = document.getElementById("message-19");
  const message20 = document.getElementById("message-20");
  const message21 = document.getElementById("message-21");
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
    document.getElementById("p5sketch").classList.add("border-2");
    let myp5 = new p5(
      sketchBuilder("purple"),
      document.getElementById("p5sketch")
    );
    message13.style.display = "flex"; //egyptians
  });

  message13.addEventListener("click", () => {
    document.getElementById("defaultCanvas0").classList.add("hidden"); //fixme: is there a way to set this?
    message13.style.display = "none";
    let myp5 = new p5(
      sketchBuilder("green"),
      document.getElementById("p5sketch")
    );
    message14.style.display = "flex";
  });

  message14.addEventListener("click", () => {
    document.getElementById("defaultCanvas1").classList.add("hidden"); //fixme: is there a way to set this?
    message14.style.display = "none";
    let myp5 = new p5(
      sketchBuilder("white"),
      document.getElementById("p5sketch")
    );
    message15.style.display = "flex";
  });

  message15.addEventListener("click", () => {
    document.getElementById("p5sketch").classList.remove("border-2");
    document.getElementById("defaultCanvas2").classList.add("hidden"); //fixme: is there a way to set this?
    message15.style.display = "none";
    message16.style.display = "flex";
  });

  message16.addEventListener("click", () => {
    message16.style.display = "none";
    message17.style.display = "flex";
  });

  message17.addEventListener("click", () => {
    message17.style.display = "none";
    message18.style.display = "flex";
  });

  message18.addEventListener("click", () => {
    message18.style.display = "none";
    message19.style.display = "flex";
  });

  message19.addEventListener("click", () => {
    message19.style.display = "none";
    message20.style.display = "flex";
  });

  message20.addEventListener("click", () => {
    message20.style.display = "none";
    message21.style.display = "flex";
  });

  message21.addEventListener("click", () => {
    let title = document.getElementById("title");
    document.querySelector("main").classList.add("bg-black");
    backgroundAudio.pause();
    backgroundVideo.pause();
  });
};
