export const rectPerimeter = (base, altura) => 2*base + 2*altura;
console.log("rectPerimeter(4,5)="+rectPerimeter(4,5));
console.log("rectPerimeter(9,3)="+rectPerimeter(9,3));

export const rectArea = (base, altura) => base*altura;
console.log("rectArea(4,5)="+rectArea(4,5));
console.log("rectArea(9,3)="+rectArea(9,3));

export const triArea = (base, altura) => (base*altura)/2;
console.log("triArea(4,5)="+triArea(4,5));
console.log("triArea(9,3)="+triArea(9,3));

export const ringArea = ( radioExterno,radioInterno) => Math.PI*((radioInterno**2)-(radioExterno**2));
console.log("ringArea(1,4)="+ringArea(1,4));
console.log("ringArea(5,7)="+ringArea(5,7));
console.log("ringArea(6,6)="+ringArea(6,6));
