function sum(){
    let x = document.getElementById("fir").value
    let y = document.getElementById("sec").value
    let z = +x + +y
    document.getElementById("result").value = z
}

function sub(){
    let x = document.getElementById("fir").value;
    let y = document.getElementById("sec").value;
    let z = x - y
    document.getElementById("result").value = z
}

function mul(){
    let x = document.getElementById("fir").value;
    let y = document.getElementById("sec").value;
    let z = x * y
    document.getElementById("result").value = z
}

function div(){
    let x = document.getElementById("fir").value;
    let y = document.getElementById("sec").value;
    let z = x / y
    document.getElementById("result").value = z
}

function clr(){
    document.getElementById("fir").value=""
    document.getElementById("sec").value=""
    document.getElementById("result").value=""
}   