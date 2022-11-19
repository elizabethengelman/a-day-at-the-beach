const width = 400;
const height = 300;

let bodypix;
let video;
let segmentation;
let sunscreenBuff;
let sunscreenClone;

const options = {
  outputStride: 8, // 8, 16, or 32, default is 16
  segmentationThreshold: 0.3, // 0 - 1, defaults to 0.5
};

function preload() {
  bodypix = ml5.bodyPix(options);
}

function setup() {
  createCanvas(width, height);
  video = createCapture(VIDEO, videoReady);
  video.size(width, height);
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

  sunscreenBuff.noStroke();
  sunscreenBuff.fill(255, 0, 0);
  sunscreenBuff.ellipse(mouseX, mouseY, 33, 33);

  sunscreenClone = sunscreenBuff.get();

  if (segmentation) {
    sunscreenClone.mask(segmentation.backgroundMask);
  }

  tint(255, 40);
  image(sunscreenClone, 0, 0);
}
