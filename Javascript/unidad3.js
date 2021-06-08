var num=0;
var maxCantSujetos=2;
var cantSujetos=[];
class sujeto{
    constructor(name, age) {
        this.name = name;
        this.age = age;
      }
}

function myFunction() {
    let edad, name;
    
    name = document.getElementById("name").value;
    edad = document.getElementById("edad").value;

    cantSujetos.push(new sujeto(name, edad));
    if(num==maxCantSujetos){
        checkAge();
    }
    num++;
  }
function checkAge(){
    let older = 0;

    for(var i=1; i< cantSujetos.length;i++){
        if(cantSujetos[older].age<cantSujetos[i].age){
            older=i;
        }
    }
    document.getElementById("demo").innerHTML = cantSujetos[older].name + " es la persona con mayor edad con: " + cantSujetos[older].age ;
}
//nom   edad arr
//gonza 25   0 
//bio   30   1
//hugo  24   2

var mayorEdad = 1;

