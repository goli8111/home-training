
var recorder;
function onScreenCapture() {
    var strData = canvas.toDataURL("image/jpeg", 1.0);
    var aLink = document.createElement('a');
    aLink.href = strData;
    aLink.download = "test.jpeg";
    document.body.appendChild(aLink);
    aLink.click();
  }
  
function onRecorderStart() {
    if (undefined == recorder) {
        recorder = new CanvasRecorder(canvas, 450000);
    }
    recorder.start();
  }
  
  function onRecorderStop() {
    recorder.stop();
  }
  
  function onRecorderDownload() {
    recorder.save("test.webm");
  }
  