for(var i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        var innerHtml =  this.innerHTML;
        clicked(innerHtml);
        buttonAnimation(innerHtml);
    });
}

document.addEventListener("keydown",function(event){
    var innerHtmlKey = event.key;
    clicked(innerHtmlKey);
 });

function clicked(btnn){
    switch (btnn){
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            buttonAnimation(btnn);
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            buttonAnimation(btnn);
            break;  
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            buttonAnimation(btnn);
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            buttonAnimation(btnn);
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            buttonAnimation(btnn);
            break;
        case 'k':
            var kickBass = new Audio('sounds/kick-bass.mp3');
            kickBass.play();
            buttonAnimation(btnn);
            break;
        case 'l':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            buttonAnimation(btnn);
            break;
        default:
            console.log("press the correct key");           
            
    }
}

function buttonAnimation(key){
    var active =  document.querySelector("."+key);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed")
    },100);

}