Run();
function Run() {

    Bubble();

}
function Bubble() {

    var bubble = document.getElementById("bubble1Id")
    bubble.positionX = (Math.random() * 1920);
    posY = bubble.positionY;
    bubble.animate({posY, 1080})


}
function Idle() {

}