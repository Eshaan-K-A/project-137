var status1 = false;

function setup() {
    canvas = createCanvas(380, 425);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 425);
    video.hide()
}

function draw() {
    image(video, 0, 0, 700, 420);
}

function start() {
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = " Detecting Objects";
    item = document.getElementById("input").value;
}

 function modelLoaded(){
     console.log("Model Loaded!!")
     status1 = true;
     vid.loop();
     vid.speed(1);
     vid.volume(5);
 }
 function draw() {
    image(video, 0, 0, 380, 380);
        if(status != "")
        {
          objectDetector.detect(video, gotResult);
          for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            
            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
  
           
            if(objects[i].label == item)
            {
              video.stop();
              objectDetector.detect(gotResult);
              document.getElementById("status").innerHTML = item + " Found";
              synth = window.speechSynthesis;
              utterThis = new SpeechSynthesisUtterance(item + "Found");
              synth.speak(utterThis);
            }
            else
            {
              document.getElementById("status").innerHTML = item + " Not Found";
            }          
           }
        }
  }