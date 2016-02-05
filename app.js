
var calc = new Calculatrice(0);
var display = '';

var toto;

function appendToDisplay(toAppend) {
    setDisplay(display + toAppend);
}

function setDisplay(toDisplay) {
    $("#display").css("opacity", 0.0);

    display = toDisplay;
    $("#display").html(toDisplay.toString());
}

$(document).ready(function() {
    $("#display").bind("animationiteration", function() {
        $("#display").css("animation-play-state", "paused");
    });

    $(".numberButton").click(function(eventData) {
        var inputNumber = eventData.currentTarget.innerText;
        appendToDisplay(inputNumber);
    });

    $(".commandButton").click(function(eventData) {
        var inputCommand = eventData.currentTarget.innerText;

        if(inputCommand === "+" || inputCommand === "-" ||
           inputCommand === "/" || inputCommand ==="*") {
            appendToDisplay(inputCommand);
        } else if (inputCommand === "=") {
            var number = eval(display);
            setDisplay(number.toString());
        } else if (inputCommand === "C") {
            setDisplay('');
        } else if (inputCommand === "M") {
        } else if (inputCommand === "sin") {
            var number = eval(display);
            number = Math.sin(number);

            setDisplay(number);
        } else if (inputCommand === "cos") {
            var number = eval(display);
            number = Math.cos(number);

            setDisplay(number);
        } else if (inputCommand === "tan") {
            var number = eval(display);
            number = Math.tan(number);

            setDisplay(number);
        }
    });
});
