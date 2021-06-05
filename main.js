function preload(){

}
function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/40753PPhY/model.json',modelLoaded);
}
function draw(){
    image(video, 0, 0, 300, 300);
    classifier.classify(video, gotResult);
}
function gotResult(error, results){
    if(error){
        console.error(error);
        console.log("failed :(");
    }
    else{
        console.log(results);
        console.log("success!!!");
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}
function modelLoaded(){
    console.log("Model loaded!");
}