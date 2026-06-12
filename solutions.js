//----------------------------------------------------------------Expressions----------------------------------------------------------------

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


//Strings
export const makeName = (firstName,lastName) =>{

    let persona = {nombre:firstName,apellido:lastName}; 
    
    
    return `${persona.apellido}, ${persona.nombre}`;

    
};

export const ellide = (cadena,n) => {

    return cadena.substring(0,n) + "...";    

};

 console.log(ellide("Soy Armando",10));

//------------------------------------------------------------------Conditionals----------------------------------------------------------------------
 export const longer = (cadena1,cadena2) => {

    return cadena1.length >= cadena2.length 
    ? cadena1 
    : cadena2;

   

 };

  console.log(longer("Andres","Dominik"));  

             setTimeout(  () => {console.log("Frida");} , 1000 );


  export const mid3 = (a, b, c) => {

    if ((a >= b && a <= c) || (a <= b && a >= c)) {
        return a;
    }

    if ((b >= a && b <= c) || (b <= a && b >= c)) {
        return b;
    }

    return c;
};


export const lastFirst = (person) => {

    if (person.first && person.last) {
        return `${person.last}, ${person.first}`;
    }

    if (person.first) {
        return person.first;
    }

    if (person.last) {
        return person.last;
    }

    return "";
};


//----------------------------------------------------------------Notas mias objetos , callbacks y funciones----------------------------------------------------------------

/*
export const lastFirst = ({ nombre, apellido }) => {

    if (nombre && apellido) {
        return `${apellido}, ${nombre}`;
    }

    if (apellido) return `${apellido}`;
    if (nombre) return `${nombre}`;

    return "";
};

console.log(lastFirst({nombre: "Eva",apellido: "Arciniega"}));
console.log(lastFirst({nombre: "",apellido: "Arciniega"}));
console.log(lastFirst({nombre: "Eva",apellido: ""}));
console.log(lastFirst({nombre: "",apellido: ""})); 
*/  

let makeCircle = (radius) => ({
  radius: radius,
  circumference: 2 * Math.PI * radius
});

//Lo sieguiente devuelve un objeto
console.log(makeCircle(5));
console.log(makeCircle(15));
//Lo siguiente no se puede por ser funcion flecha
//let a = new makeCircle(10);




function makeCircleFunc(radius) {
    this.radius = radius;
    this.circumference = 2 * Math.PI * this.radius;
}

let c = new makeCircleFunc(10);
console.log(c);



//Lo siguiente usa arrow functions, para que dentro de setTimeout, pueda usarse el nombre de Frida, es decir el contexto anterior a esa funcion 
// Se usa una arrow function para que conserve el mismo `this`
// que tiene el método saludar(). De esta forma `this.nombre`
// sigue apuntando al objeto persona ("Frida") cuando setTimeout
// ejecuta el callback después de 1 segundo.
const persona = {
    nombre: "Frida",

    saludar() {

        setTimeout(() => {
            console.log(this.nombre);
        }, 1000);
    }
};

persona.saludar();

    
   

    
//Lo siguiente ya no muestra el nombre de juan, muestra undefined porque interpreta qiue lo llamo setTimeout, por eso se usan los arrow 
const person = {
    nombre: "juan",

    saludar() {
        setTimeout(function(){
            console.log(this.nombre);
        }, 1000);
    }
};

person.saludar();


//El siguiente es lo correcot de forma antigua , por lo cual ya mejor se usa arrow funcitons
const personOld = {
    nombre: "juan",

    saludar() {

        const self = this;

        setTimeout(function() {
            console.log(self.nombre);
        }, 1000);

    }
};

personOld.saludar();



//----------------------------------------------------------------Arreglos----------------------------------------------------------------

export const subArray = (array, indices) => {
    let resultado = [];

    for (let i = 0; i < indices.length; i++) {
        resultado.push(array[indices[i]]);
    }

    return resultado;
};

console.log(subArray(['A','r','m','a','n','d','o'],[3,4]));

console.log(subArray(['A','r','m','a','n','d','o'],[]));

console.log(subArray(['A','r','m','a','n','d','o'],[0,0]));

/*
export const over21 = (...personas) => {
    let resultado = [];

    for (let persona of personas) {
        if (persona.age >= 21) {
            resultado.push(persona);
        }
    }

    return resultado;
};*/

export const over21 = (personas) =>
    personas.filter(persona => persona.age >= 21);


const perritosMayores=over21([{name: 'Daysi', age: 12}, {name: 'Crazy', age: 9}, {age: 21, name: 'Frida'}]);
console.log(JSON.stringify(perritosMayores, null, 2));

//Los ... permiten manejar conjuntos de arreglos o conjuntos de objetos, en este caso es un solo array
export const product = (numbers) =>{

    let acumulador = 1;
     for (let number of numbers) {
        acumulador = acumulador * number;
    };
    return acumulador;
};
product([1, 2, 3, 4, 5]);

export const getRepeats = (numbers) => {
    let repetidos = [];

    for (let i = 0; i < numbers.length; i++) {

        for (let j = i + 1; j < numbers.length; j++) {

            if (numbers[i] === numbers[j]) {

                //includes() es un metodo que pregunta si existe algo dentro del arreglo ! este simbolo niega ejemplo !true=false
                if (!repetidos.includes(numbers[i])) {
                    repetidos.push(numbers[i]);
                }

            }

        }

    }

    return repetidos;
};

console.log(getRepeats([1, 2, 3, 3, 2, 4, 5, 3, 1]));
console.log(getRepeats([6, 67, -6, 23, 6, 3, 11, 100, 23, 6, 0, 3]));

console.log(!true===false);


export const aboveAverage = (alumnos) =>
    alumnos.filter(alumno => alumno.score >= 80);

const aproved=aboveAverage([{name: 'pat', score: 67}, {name: 'sandy', score: 82}, {name: 'max', score: 72}, {name: 'andy', score: 91}, {name: 'drew', score: 86}]);
console.log(JSON.stringify(aproved, null, 4));


//----------------------------------------------------------------Arrays y Strings----------------------------------------------------------------
export const reverseNumber = (number) => {
    return Number(
        //Tecnica llamada encadenamiento de métodos
        String(number)//convierte en texto el numero entrante
            .split("")//Divide el texto carácter por carácter.
            .reverse()//lo imprime alreves como texto
            .join("")//une todos los elementos del array
    );
};

console.log(reverseNumber(1200));

console.log(reverseNumber(21));