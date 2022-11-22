const s = (sketch) => {
  const width = 600;
  const height = 450;
  let bodypix;
  let video;
  let segmentation;
  let sunscreenBuff;
  let sunscreenClone;

  const options = {
    outputStride: 8, // 8, 16, or 32, default is 16
    segmentationThreshold: 0.3, // 0 - 1, defaults to 0.5
  };

  sketch.setup = function () {
    // Set the p5Instance so that ml5 knows which instance to use
    ml5.p5Utils.setP5Instance(sketch);

    sketch.createCanvas(width, height);

    // load up your video
    video = sketch.createCapture(sketch.VIDEO);
    video.size(sketch.width, sketch.height);
    video.hide();
    bodypix = ml5.bodyPix(video, videoReady);

    sunscreenBuff = sketch.createGraphics(width, height);
  };

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

  sketch.draw = function () {
    sketch.image(video, 0, 0);
    // background(0); //need to keep drawing the background, otherwise we get a trailing effect with the video

    // want to use the background mask in the sunscreenBuff as well to keep the sunscreen from loading onto the background part.
    sunscreenBuff.noStroke();
    sunscreenBuff.fill(255, 0, 0);
    sunscreenBuff.ellipse(sketch.mouseX, sketch.mouseY, 33, 33);
    sunscreenClone = sunscreenBuff.get();

    sketch.background(43, 157, 247);
    if (segmentation) {
      // for this first iteration, we actually don't want to hide the background, but more, use this for the sunscreen buff
      // image(segmentation.backgroundMask, 0, 0, width, height);

      //don't want to show the backgroundmask as an image, but want to use it as a mask on the sunscreen buff

      //i hadn't thought this through entirely, and was thinking that I could get the red on the person... but that if they moved it would stay in place. but, if im using this backgroundSegment... then i think the red would move too? or at lease the mask
      // this allows for the person to be rendered without their background1
      sketch.image(segmentation.backgroundMask, 0, 0, width, height);

      sunscreenClone.mask(segmentation.backgroundMask);
    }

    sketch.push();
    sketch.tint(255, 50);
    sketch.image(sunscreenClone, 0, 0);
    sketch.pop();
  };
};
