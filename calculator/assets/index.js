function del() {
    document.getElementById('input').value = "";
};


function nine() {
    document.getElementById("input").value += "9";
};

function eight(){
    document.getElementById("input").value += '8';
};

function seven() {
    document.getElementById('input').value +='7';
}
function six() {
    document.getElementById('input').value +='6';
}
function five() {
    document.getElementById('input').value +='5';
}
function four() {
    document.getElementById('input').value +='4';
}
function three() {
    document.getElementById('input').value +='3';
}
function two() {
    document.getElementById('input').value +='2';
}
function one() {
    document.getElementById('input').value +='1';
}
function add() {
    document.getElementById('input').value +='+';
}
function subs() {
    document.getElementById('input').value +='-';
}
function mul() {
    document.getElementById('input').value +='*';
}
function devide() {
    document.getElementById('input').value +='/';
}
function dot() {
    document.getElementById('input').value +='.';
}

function calc() {
    document.getElementById('input').value = eval(document.getElementById('input').value);
}
function zero() {
        document.getElementById('input').value += "0";
}

