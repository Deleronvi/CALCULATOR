var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var working = document.getElementById('working');
var form = document.getElementById('forn');

form.addEventListener('submit', calc)

function calc() {
var op = document.querySelector("#operator").value;
    var x = parseFloat(num1.value);
    var y =parseFloat( num2.value);
    
     if(op=="add"){
        result = x+y;
    }
    else if(op=="min"){
        result = x-y;
    }
    else if(op=="multiply"){
        result = x*y;
    }
    else if(op=="div"){
        result = x/y;
    }
    working.innerText = result;
    event.preventDefault();
};