img ="";

function preload() {
    img = loadeImage('dog_cat.jpg');   
}
function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
}
 function draw(){
    Image(imag, 0, 0, 640, 420);
    Fill('#FF0000');
    Text("bedroom", 320, 120);
    nofill();
    stroke("#FF000")
    rect(30, 60, 450, 350);
 }