function checkGrades(value1){
    return value1 >= 1 && value1 <= 10;
}

var myName = prompt("Ingrese su nombre");
console.log(myName);
while(myName == "" || myName == " " || myName == null){
    myName = prompt("Ingrese un nombre valido");
}

var aux = prompt("Ingrese tu primer nota del 1 al 10");
var grade1 = parseFloat(aux);
while(!checkGrades(grade1)){
    aux = prompt("Ingrese una nota valida del 1 al 10");
    grade1 = parseFloat(aux);
}
aux = prompt("Ingrese tu segunda nota del 1 al 10");
var grade2 = parseFloat(aux);
while(!checkGrades(grade2)){
    aux = prompt("Ingrese una nota valida del 1 al 10");
    grade1 = parseFloat(aux);
}
aux = prompt("Ingrese tu tercera nota del 1 al 10");
var grade3 = parseFloat(aux);
while(!checkGrades(grade3)){
    aux = prompt("Ingrese una nota valida del 1 al 10");
    grade1 = parseFloat(aux);
}
var total = (Math.round(((grade1 + grade2 + grade3)/3) * 100) / 100).toFixed(2);


document.writeln("Nombre: " + myName + "<br>");
document.writeln("Nota: " + total);