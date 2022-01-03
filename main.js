//https://teachablemachine.withgoogle.com/models/RWtrdAXi5/

function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/RWtrdAXi5/model.json',modelReady);
}
 function modelReady(){
     //classifier.classify(gotResults);
     console.log("modelReady")
 }