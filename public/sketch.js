const width = 400;
const height = 300;

let bodypix;
let video;
let segmentation;
let sunscreenBuff;
let sunscreenClone;
let videoStarted = false;

const options = {
  outputStride: 8, // 8, 16, or 32, default is 16
  segmentationThreshold: 0.3, // 0 - 1, defaults to 0.5
};

function preload() {
  console.log("preload");
  bodypix = ml5.bodyPix(options);
}

function setup() {
  createCanvas(width, height); //i think that if i don't add this, it defaults to a 200x200 canvas

  video = createCapture(VIDEO, videoReady);
  console.log(video);

  video.position(0, 0);
  video.size(400, 400);
  video.hide();
  sunscreenBuff = createGraphics(width, height);
}

function videoReady() {
  bodypix.segment(video, gotResults);
}

function gotResults(error, result) {
  if (error) {
    console.log(error);
    return;
  }
  segmentation = result;
  bodypix.segment(video, gotResults);
}

function draw() {
  image(video, 0, 0);
  // background(0); //need to keep drawing the background, otherwise we get a trailing effect with the video

  // want to use the background mask in the sunscreenBuff as well to keep the sunscreen from loading onto the background part.
  sunscreenBuff.noStroke();
  sunscreenBuff.fill(255, 0, 0);
  sunscreenBuff.ellipse(mouseX, mouseY, 33, 33);
  sunscreenClone = sunscreenBuff.get();

  if (segmentation) {
    // for this first iteration, we actually don't want to hide the background, but more, use this for the sunscreen buff
    // image(segmentation.backgroundMask, 0, 0, width, height);

    //don't want to show the backgroundmask as an image, but want to use it as a mask on the sunscreen buff

    //i hadn't thought this through entirely, and was thinking that I could get the red on the person... but that if they moved it would stay in place. but, if im using this backgroundSegment... then i think the red would move too? or at lease the mask

    sunscreenClone.mask(segmentation.backgroundMask);
  }

  tint(255, 50);
  image(sunscreenClone, 0, 0);
}
