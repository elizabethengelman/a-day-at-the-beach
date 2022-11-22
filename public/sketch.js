function sketchBuilder(sunscreenColor) {
  return (sketch) => {
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
      sketch.textSize(16);
      sketch.text("Loading...", width / 2, height / 2);

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

      // want to use the background mask in the sunscreenBuff as well to keep the sunscreen from loading onto the background part.
      sunscreenBuff.noStroke();
      sunscreenBuff.fill(sunscreenColor);
      sunscreenBuff.ellipse(sketch.mouseX, sketch.mouseY, 33, 33);
      sunscreenClone = sunscreenBuff.get();

      // sketch.background(120, 239, 255); //need to keep drawing the background, otherwise we get a trailing effect with the video
      if (segmentation) {
        // sketch.image(segmentation.backgroundMask, 0, 0, width, height);

        sunscreenClone.mask(segmentation.backgroundMask);
      }

      sketch.push();
      sketch.tint(255, 50);
      sketch.image(sunscreenClone, 0, 0);
      sketch.pop();
    };
  };
}
