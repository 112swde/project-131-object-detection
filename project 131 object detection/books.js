
img = "";
status = "";
objects = [];
percent = 0;

function setup()
{
    canvas = createCanvas(490,490);
    canvas.center();
    object_Detector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting objects";
}

function modelLoaded()
{
    console.log("model Loaded!");
    status = true;
    object_Detector.detect(img,gotResult);
}

function gotResult(error,results)
{
    if(error){
       console.log(error);
    }
    console.log(results);
    object = results;
}

function preload()
{
     img = loadImage("books.jpg");
}

function draw()
{
    image(img,0,0,490,490);

    if(status != "")
    {
        for(i = 0;objects.length; i++);
        {
            document.getElementById("status").innerHTML = "Status : object detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%",objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }

}

