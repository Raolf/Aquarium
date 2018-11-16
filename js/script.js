Run();

var fish = document.getElementById("fish1Id");
var inc;
//$(fish).animate({width: '188', height:'188'});

function Run() {
    Bubble();
    OrangeDblClick();
    var interval = setInterval(OrangeIdle(),2000);

    BlueFish();
    Run();
}

function Bubble() {

    var bubble = document.getElementById("bubble1Id");
    var w = window.innerWidth;

    var a = (Math.random() * w);
    $(bubble).positionX = a;
    $(bubble).positionY = window.innerHeight;
    $(bubble).animate({top:'-=180'});
}
function OrangeIdle() {
    var fish = document.getElementById("fish1Id");
    var y = Math.random()*(window.innerHeight-188);
    var x = Math.random()*(window.innerWidth-188);
    $(fish).animate({top:'-=0',left:'-=0'});
    $(fish).animate({top:y,left:x});
}
function OrangeDblClick() {
    var fish = document.getElementById("fish1Id");
    $(fish).dblclick(function () {
        var fish = document.getElementById("fish1Id");
        $(fish).animate({left:'-=94', width: '376', top:'-=94', height:'376'}).delay(2000).animate({left:'+=94', width: '188', top:'+=94', height:'188'});
    });

}

function BlueFish() {
    var blueFish = document.getElementById("fish2Id");
    $(blueFish).mouseover(function () {
        var blueFish = document.getElementById("fish2Id");
        var y = Math.random()*(window.innerHeight-188);
        var x = Math.random()*(window.innerWidth-188);
        $(blueFish).animate({top:y,left:x})
    })

}

