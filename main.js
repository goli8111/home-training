// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet example using p5.js
=== */

let video;
let poseNet;
let poses = [];
var lastCalledTime;
var fps;

var _xpoint = 0;
var _ypoint = 0;
var _diameter = 0;

var _count = 0;
function setup() {
  var canvas_root_element = document.getElementsByClassName("canvasContainer");
  //alert(canvas_root_element);
  alert(screen.width);
  alert(screen.height);
  createCanvas(screen.width/2, screen.height/2);
  video = createCapture(VIDEO);
  video.size(width, height);

  canvas.setAttribute("style", "position: fixed; top: 0%; left: 0%; height: auto; width: 100%;");

  // Create a new poseNet method with a single detection
  poseNet = ml5.poseNet(video, modelReady);

  // This sets up an event that fills the global variable "poses"
  // with an array every time new poses are detected
  poseNet.on('pose', function(results) {
    poses = results;
    if (_count > 100) {
      console.log(poses);
      _count = 0;
    }
    _count++;
    
  });
  // Hide the video element, and just show the canvas
  video.hide();
}

function modelReady() {
  select('#status').html('');
}

function draw() {
  //resize();
  requestAnimFrame();
  image(video, 0, 0, width, height);
  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  //drawFaceOverlay();
  drawSkeleton();
  drawVaild();
  drawFPS();

}

function resize() {
  // 브라우저에서 canvas가 표시되는 크기 탐색
  canvas.clientWidth = screen.width;
  canvas.clientHeight = screen.height;

  var displayWidth  = canvas.clientWidth;
  var displayHeight = canvas.clientHeight;
 
  // canvas가 같은 크기가 아닐 때 확인
  if (canvas.width  != displayWidth ||
      canvas.height != displayHeight) {
 
    // canvas를 동일한 크기로 수정
    canvas.width  = displayWidth;
    canvas.height = displayHeight;
    video.size(screen.width, screen.height);
    console.log("screen:" + screen.width  + "," + screen.height );
  }
}

function drawFaceOverlay() {

  var first_pose = poses[0];
  if (first_pose == undefined) {
    return;
  }

  let pose = first_pose.pose;
  if (pose == undefined) {
    return;
  }

  var faceSize = 0;
  var xDist = pose.nose.x - pose.leftEar.x;
  var yDist = pose.nose.y - pose.leftEar.y;
  var dist = Math.sqrt(xDist * xDist + yDist * yDist);
  faceSize = dist;

  xDist = pose.nose.x - pose.rightEar.x;
  yDist = pose.nose.y - pose.rightEar.y;
  dist = Math.sqrt(xDist * xDist + yDist * yDist);
  if (faceSize < dist) {
    faceSize = dist;
  }
  if (faceSize <= 0) {
    return;
  }

  _xpoint = lerp(_xpoint, pose.nose.x, 0.2);
  _ypoint = lerp(_ypoint, pose.nose.y, 0.2);
  _diameter = lerp(_diameter, faceSize * 2, 0.2);

  ellipse(_xpoint, _ypoint, _diameter, _diameter);

}

function drawFPS() {
  fill(255);
  textSize(32);
  text(fps, 10, height - 20);
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  /*
  0	nose
  1	leftEye
  2	rightEye
  3	leftEar
  4	rightEar
  5	leftShoulder
  6	rightShoulder
  7	leftElbow
  8	rightElbow
  9	leftWrist
  10	rightWrist
  11	leftHip
  12	rightHip
  13	leftKnee
  14	rightKnee
  15	leftAnkle
  16	rightAnkle
*/
  // Loop through all the poses detected
  //console.log("post coubt:" + poses.length);
  //_faceSize = 0;

  for (let i = 0; i < poses.length; i++) {
    if (0 != i)
      continue;
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {

      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}

// A function to draw the skeletons
function drawSkeleton() {
  if (poses.length == 0) {
    return;
  }

  var ctx = canvas.getContext("2d");
  ctx.font = "20px Arial";
  ctx.fillStyle = 'blue';
  ctx.textAlign = "center";
  stroke(255);
  ctx.lineWidth = 1;

  // Loop through all the skeletons detected
  //for (let i = 0; i < poses.length; i++) {
  //for (let i = 0; i < 1; i++) {
    let skeleton = poses[0].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);


    }
  //}
}

function requestAnimFrame() {
  if(!lastCalledTime) {
     lastCalledTime = Date.now();
     fps = 0;
     fpsCount = 0;
     return;
  }
  delta = (Date.now() - lastCalledTime)/1000;
  if (delta >= 1) {
    lastCalledTime = Date.now();
    fps = fpsCount;
    fpsCount = 0;
  }
  else {
    fpsCount++;
  }
} 

function drawVaild() {
  if (poses.length == 0) {
    return;
  }
  let pose = poses[0].pose;

  var data = pose_valid_data["Squats"];

  for (const [key, value] of Object.entries(data)) {
    var pose_name = key.split(',');
    vaild_skeleton(pose[pose_name[0]], pose[pose_name[1]], value);
  }

  // vaild_skeleton(pose["leftElbow"], pose["leftShoulder"], 274);
  // vaild_skeleton(pose["leftElbow"], pose["leftWrist"], 235);

  // vaild_skeleton(pose["rightElbow"], pose["rightShoulder"], 94);
  // vaild_skeleton(pose["rightElbow"], pose["rightWrist"], 48);
}

function vaild_skeleton(partA, partB, goal_angle) {

  if (undefined == partA || undefined == partB) {
    return;
  }

  var ctx = canvas.getContext("2d");
  ctx.font = "20px Arial";
  ctx.fillStyle = 'blue';
  ctx.textAlign = "center";

  var angle_threshold = 10;
  var confidence = 0.1;

  if (partA.confidence < confidence || partB.confidence < confidence) {
    return false;
  }

  var skelectonDir = {};
  skelectonDir.x = partB.x - partA.x;
  skelectonDir.y = partB.y - partA.y;

  var current_angle = getDegreeFormVec(skelectonDir);
  var diff = Math.abs(current_angle - goal_angle);

  var result = (diff <= angle_threshold) ? true : false;

  if (true == result) {
    stroke(0, 0, 255);
    ctx.lineWidth = 5;
  }
  else {
    stroke(255, 0, 0);
    ctx.lineWidth = 5;
  }

  line(partA.x, partA.y, partB.x, partB.y);

  return result;
}
