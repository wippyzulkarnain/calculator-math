var value1=parseInt(prompt("Enter value 1"))
var value2=parseInt(prompt("Enter value 2"))

function add(a,b){
    return hasil=a+b
}
function multiply(a,b){
    return hasil=a*b
}
function substract(a,b) {
    return hasil=a-b
}
function divide(a,b) {
    return hasil=a/b
}
function modulo(a,b) {
    return hasil=a%b
}

console.log(value1+" + "+value2+" = "+add(value1,value2))
console.log(value1+" * "+value2+" = "+multiply(value1,value2))
console.log(value1+" - "+value2+" = "+substract(value1,value2))
console.log(value1+" / "+value2+" = "+divide(value1,value2))
console.log(value1+" % "+value2+" = "+modulo(value1,value2))
