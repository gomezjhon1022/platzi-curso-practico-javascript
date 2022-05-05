//Código del cuadrado
//console.group("Cuadrados");
//const ladoCuadrado=5;
//console.log("Los lados del cuadrado miden: "+ ladoCuadrado + "cm");
function perimetroCuadrado(lado){
    return lado*4;
}
//console.log("El perímetro del cuadrado es: "+ perimetroCuadrado + "cm");
//const areaCuadrado=ladoCuadrado*ladoCuadrado;
function areaCuadrado(lado){
    return lado*lado;
}
//console.log("El área del cuadrado es: "+ areaCuadrado + "cm^2");
//console.groupEnd();
//Código del triángulo
//console.group("Triangulos");
//const ladoTriangulo1=6;
//const ladoTriangulo2=6;
//const baseTriangulo=4;
//const alturaTriangulo=5.5;
//console.log("Los lados del triángulo miden: " 
//+ ladoTriangulo1 
//+ " cm, " 
//+ ladoTriangulo2 
//+ " cm, "
//+ baseTriangulo
//+" cm"
// );
//console.log("La altura del triángulo es de: "+alturaTriangulo+" cm");
//const perimetroTriangulo=ladoTriangulo1+ladoTriangulo2+baseTriangulo;
function perimetroTriangulo(lado1, lado2, base){
  return lado1+lado2+base;
}
//console.log("El perímetro del triángulo es de: "+perimetroTriangulo+" cm");
//const areaTriangulo=(baseTriangulo*alturaTriangulo)/2;
//console.log("El área del triángulo es: "+ areaTriangulo + "cm^2");
function areaTriangulo(base,altura){
    return (base*altura)/2;    
}
//console.groupEnd();
//Código del círculo
//console.group("Círculos");
//Radio
//const radioCirculo=4;
//console.log("El radio del círculo es de: "+radioCirculo+" cm");
//Diámetro
//const diametroCirculo=radioCirculo*2;
//console.log("El diámetro del círculo es de: "+diametroCirculo+" cm");
function diametroCirculo(radio){
    return radio*2;
}
//PI
//const PI=3.1415;
const PI= Math.PI;
//console.log("PI es : "+PI);
//Circunferencia
//const perimetroCirculo=diametroCirculo*PI;
//console.log("El perimetro del círculo es de: "+perimetroCirculo+" cm");
function perimetroCirculo(radio){
   const diametro=diametroCirculo(radio);
   return diametro*PI;
}
//Area
//const areaCirculo=(radioCirculo*radioCirculo)*PI;
//console.log("El área del círculo es de: "+areaCirculo+" cm^2");
function areaCirculo(radio){
    return (radio*radio)*PI;
}
//console.groupEnd();