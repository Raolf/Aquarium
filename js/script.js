

var fish = document.getElementById("fish1Id");
var blueFish = document.getElementById("fish2Id");
var blue = false;
Run();


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
    $(fish).animate({top:y,left:x},"slow");
    $(bubble).animate({top: '-=180'});
}

function BlueCheck() {
    setInterval(BlueFish(),4000);
    return;
}

function BlueFish() {
    var y = Math.random()*(window.innerHeight-188);
    var x = Math.random()*(window.innerWidth-188);

    //alert("Ran")

    if(blue === true) {
        $(blueFish).animate({top:y,left:x}, 500);
        //alert("true");
        blue = false;
    } else {
        $(blueFish).animate({top:y,left:x},3000);
    }
    //BlueCheck();
    //return;
}

function Run() {

    $(fish).stop();
    Bubble();
    $(fish).dblclick(function () {
        var fish = document.getElementById("fish1Id");
        $(fish).stop();
        $(fish).animate({left:'-=94', width: '376', top:'-=94', height:'376'}).delay(2000).animate({left:'+=94', width: '188', top:'+=94', height:'188'});

    });

    $(blueFish).mouseenter(function () {
        blue = true;
        //alert("over " + blue)
    })

    BlueFish();
    setInterval(function () {
        BlueFish();
    },4000);

    OrangeIdle().delay(1000);
    //Run();

}



}