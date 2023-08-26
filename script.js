var fahrenheit;

function convert() {
    var cels = parseFloat(document.getElementById("celsius").value);
    fahrenheit = (cels * 9 / 5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit;
    updatebg();
}

function updatebg() {
    var bgcolor = getcolor();
    document.body.style.backgroundColor = bgcolor;  // Change 'background' to 'backgroundColor'
}

function getcolor() {
    if (fahrenheit <= 14) {
        return "blue";
    } else if (fahrenheit <= 22) {
        return "lightblue";
    } else if (fahrenheit <= 50) {
        return "green";
    } else if (fahrenheit <= 86) {
        return "yellow";
    }
    else if(fahrenheit>=86){
        return "red"
    }
}