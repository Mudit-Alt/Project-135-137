video=""
Status=""
suii=""

function setup(){
    canvas = createCanvas(440, 350);
    canvas.center();
    video = createCapture();
    video.size(440, 350);
    video.hide();
}

function draw(){
    image(video, 0, 0, 440, 350);
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
