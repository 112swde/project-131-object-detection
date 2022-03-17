Status = "";
img = "";
objects = [];

function preload(){
    img = loadImage("gadgets.jpg");
}

function setup(){
    canvas = createCanvas(490,490);
    canvas.center();
    object_Detector = ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(img,gotResults);
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(img,0,0,490,490);
    if(Status != ""){
        for(i = 0; i < objects.length; i++){
            document.getElementById("status").innerHTML = "Status: Objects Detected";

            fill("#fc0303");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%",objects[i].x - 800, objects[i].y - 520);
            noFill();
            stroke("#fc0303");
            rect(objects[i].x - 800, objects[i].y - 520, objects[i].width - 910, objects[i].height - 2640);
        }
    }
}

