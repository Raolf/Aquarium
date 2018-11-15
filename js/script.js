Run();

var fish = document.getElementById("fish1Id");
var dblclick = false;
var inc;

function Run() {

    $(fish).animate({width: '188', height:'188'});
    //check();

}

function check() {
    inc = 100;
    for (let i = 0; i < inc; i++) {

        $(fish).dblclick(function () {
            var dblclick = true
            i = 0;
        });

        if (inc == 10){
            i = 0;
            OrangeIdle();
        }
    }
}

function Bubble() {

    var bubble = document.getElementById("bubble1Id");
    var w = window.innerWidth;

    var a = (Math.random() * w);
    bubble.positionX = a;

    bubble.animate({"height":"+=180", a});
}
function OrangeIdle() {

    var y = Math.random()*(window.innerHeight-188);
    var x = Math.random()*(window.innerWidth-188);
    $(fish).animate({top:y,left:x});
    check();
}
function OrangeDblClick() {

    $(fish).animate({left:'-=94', width: '376', top:'-=94', height:'376'}).delay(2000).animate({left:'+=94', width: '188', top:'+=94', height:'188'});
    dblclick = false;
    check();

}

