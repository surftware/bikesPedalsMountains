export const rectPerimeter = (base, altura) => 2*base + 2*altura;
console.log("rectPerimeter(4,5)="+rectPerimeter(4,5));
console.log("rectPerimeter(9,3)="+rectPerimeter(9,3));

export const rectArea = (base, altura) => base*altura;
console.log("rectArea(4,5)="+rectArea(4,5));
console.log("rectArea(9,3)="+rectArea(9,3));

export const triArea = (base, altura) => (base*altura)/2;
console.log("triArea(4,5)="+triArea(4,5));
console.log("triArea(9,3)="+triArea(9,3));

export const ringArea = ( radioInterno,radioExterno) => (Math.PI*(radioExterno**2))-(Math.PI*(radioInterno**2));
console.log("ringArea(1,4)="+ringArea(1,4));
console.log("ringArea(5,7)="+ringArea(5,7));
console.log("ringArea(6,6)="+ringArea(6,6));

export const f2c = (farenheit) => ((farenheit-32)*5)/9;
console.log("f2c(32)="+f2c(32));
console.log("f2c(100)="+f2c(100));

export const c2f = (celsius) => (celsius*(9/5))+32;
console.log("c2f(40)="+c2f(40));
console.log("c2f(100)="+c2f(100));

export const makeName = (firstName,lastName) =>{

    let persona = {nombre:firstName,apellido:lastName}; 
    
    
    return `${persona.apellido}, ${persona.nombre}`;

    
};

export const ellide = (cadena,n) => {

    return cadena.substring(0,n) + "...";

    

};

 console.log(ellide("Soy Armando",10));


 export const longer = (cadena1,cadena2) => {

    return cadena1.length >= cadena2.length 
    ? cadena1 
    : cadena2;

   

 };

  console.log(longer("Andres","Dominik"));


  export const mid3 = (a, b, c) => {

    if ((a >= b && a <= c) || (a <= b && a >= c)) {
        return a;
    }

    if ((b >= a && b <= c) || (b <= a && b >= c)) {
        return b;
    }

    return c;
};



export const lastFirst = ({ nombre, apellido }) => {

    if (nombre && apellido) {
        return `${apellido}, ${nombre}`;
    }

    if (apellido) return `${apellido}`;
    if (nombre) return `${nombre}`;

    return '';
};

console.log(lastFirst({nombre: "Eva",apellido: "Arciniega"}));
console.log(lastFirst({nombre: "",apellido: "Arciniega"}));
console.log(lastFirst({nombre: "Eva",apellido: ""}));
console.log(lastFirst({nombre: "",apellido: ""}));    
    
   

    



