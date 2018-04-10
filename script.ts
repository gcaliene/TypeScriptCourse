let myName = 'Max';

function multiply(value1: number, value2: number): number {
	return value1 * value2;
}
//console.log(multiply(2,'max')) ; won't  work because of the type error.
console.log(multiply(10, 2));

//function Types
let myMultiply: (a: number, b:number ) => number;
// myMultiply = sayHello;
//myMultiply();
myMultiply = multiply;
console.log(myMultiply(5,2));

//objects
let userData = {
  name:'Max',
  age:27
}
