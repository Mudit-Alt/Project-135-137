video=""
Status=""
suii=""
objects = [];

function setup(){
    canvas = createCanvas(440, 350);
    canvas.center();
    video = createCapture();
    video.size(440, 350);
    video.hide();
}

function draw(){
    image(video, 0, 0, 440, 350);
    if(Status != ""){
        objectDetector.detect(video, gotResults);
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status : Objects Detected";
            document.getElementById("objectnum").innerHTML = objects.length + " objects are detected!"
            
            fill("#3dc4a0");
            percent = floor(objects[i].confidence * 100)
            text(objects[i].label + " " + percent + "%" , objects[i].x + 15, objects[i].y + 15);
            stroke("#3dc4a0");
            noFill();
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
            if (objects[i].label == suii) {
                document.getElementById("status").innerHTML = "Status : " + suii + "Is Detected!!";
                video.stop();
                synth = window.speechSynthesis;
                utterThis = new SpeechSynthesisUtterance(suii + "Has Been Found");
                synth.speak(utterThis);
            }
            else{
                document.getElementById("status").innerHTML = "Status : " + suii + "Is Not Detected";
            }
            

        }
    }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById('status').innerHTML = "Status : Detecting Objects";
    suii = document.getElementById("input_1").value
}

function modelLoaded(){
    console.log("Yayyy You Did It !!!!");
    Status = true;
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }
    console.log(results)
    objects = results;
}
