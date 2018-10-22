const   btn=document.querySelectorAll(".btn")
const display=document.getElementById("display")
const btnc = document.getElementById("btnc")
const btnequal = document.getElementById("btnequal")
let a="";
let b="";
let op="";
let result;
btnc.addEventListener('click', cleardisplay)
btnequal.addEventListener('click' , commence)

function cleardisplay(){
    display.value =""
    a="";
    b="";
}

btn.forEach(function (h) {
    h.addEventListener('click', add)
})


function add(e){
display.value += e.target.innerHTML
}

const   btnop=document.querySelectorAll(".btnop")
btnop.forEach(function (j) {
    j.addEventListener('click', operator)
})

function operator(k){
if (a===""){
        a = display.value
        op = k.target.innerHTML
        display.value=""
}
        else{
            b= display.value
            op = k.target.innerHTML
            display.value=""
        }
}

function commence(){
    b = display.value
    a = parseFloat(a)
    b = parseFloat(b)
    if (op == "+"){
        display.value = a+b
        a= display.value
    }
    else if (op == "/"){
        display.value = a/b
        a= display.value
    }
    else if (op == "-"){
        display.value = a-b
        a= display.value
    }
    else if (op == "*"){
        display.value = a*b
        a= display.value
    }
}
